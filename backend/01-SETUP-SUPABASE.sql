-- BẢN TIN MỘC: Chạy toàn bộ script này một lần trong Supabase SQL Editor.
-- KHÔNG dán service_role key vào HTML/JS/GitHub.
-- Chế độ an toàn: mọi bài viết và bình luận do độc giả gửi phải qua duyệt.

create table if not exists public.moderators (
  user_id uuid primary key references auth.users(id) on delete cascade
);
create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  author_name varchar(60) not null check (char_length(trim(author_name)) between 2 and 60),
  title varchar(160) not null check (char_length(trim(title)) between 12 and 160),
  excerpt varchar(320) not null check (char_length(trim(excerpt)) between 25 and 320),
  body text not null check (char_length(trim(body)) between 100 and 12000),
  category varchar(32) not null default 'goc-nhin'
    check (category in ('goc-nhin','thoi-su','doi-song','giao-duc','van-hoa','cong-nghe','kinh-te','moi-truong','du-lich','suc-khoe','giai-tri','the-thao')),
  kind varchar(20) not null default 'bai-viet' check (kind in ('bai-viet','cam-nghi')),
  cover_url text check (cover_url is null or (length(cover_url)<1000 and cover_url ~ '^https://[^[:space:]]+$')),
  status varchar(16) not null default 'pending' check (status in ('pending','approved','rejected')),
  rejection_reason text,
  created_at timestamptz not null default now(),
  published_at timestamptz
);
create index if not exists community_posts_status_date on public.community_posts(status,published_at desc);
create index if not exists community_posts_owner on public.community_posts(user_id,created_at desc);

create table if not exists public.community_comments (
  id uuid primary key default gen_random_uuid(),
  article_key varchar(130) not null check (article_key ~ '^[a-z0-9-]{3,130}$'),
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  display_name varchar(60) not null check (char_length(trim(display_name)) between 2 and 60),
  body varchar(1000) not null check (char_length(trim(body)) between 3 and 1000),
  status varchar(16) not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);
create index if not exists community_comments_article on public.community_comments(article_key,created_at desc);

create table if not exists public.opinion_votes (
  post_id uuid not null references public.community_posts(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  choice varchar(12) not null check(choice in ('agree','disagree')),
  created_at timestamptz not null default now(),
  primary key (post_id,user_id)
);

create table if not exists public.article_metrics (
  article_key varchar(130) primary key check (article_key ~ '^[a-z0-9-]{3,130}$'),
  view_count bigint not null default 0 check(view_count >= 0),
  comment_count bigint not null default 0 check(comment_count >= 0)
);
create table if not exists public.private_view_dedup (
  article_key varchar(130) not null,
  visitor_token uuid not null,
  day_utc date not null,
  primary key(article_key,visitor_token,day_utc)
);

alter table public.moderators enable row level security;
alter table public.community_posts enable row level security;
alter table public.community_comments enable row level security;
alter table public.opinion_votes enable row level security;
alter table public.article_metrics enable row level security;
alter table public.private_view_dedup enable row level security;

-- Phân quyền bảng: role anon không có quyền ghi; role authenticated chỉ được ghi đúng bảng, RLS tiếp tục kiểm soát.
revoke all on public.moderators from anon,authenticated;
revoke all on public.private_view_dedup from anon,authenticated;
revoke all on public.community_posts from anon,authenticated;
revoke all on public.community_comments from anon,authenticated;
revoke all on public.opinion_votes from anon,authenticated;
revoke all on public.article_metrics from anon,authenticated;
grant select on public.community_posts,public.community_comments,public.article_metrics to anon,authenticated;
grant select,insert on public.community_posts,public.community_comments to authenticated;
grant select,insert,update,delete on public.opinion_votes to authenticated;
grant update,delete on public.community_posts,public.community_comments to authenticated;

create or replace function public.is_moderator() returns boolean
language sql stable security definer set search_path = ''
as $$ select exists(select 1 from public.moderators m where m.user_id = (select auth.uid())); $$;
revoke all on function public.is_moderator() from public;
grant execute on function public.is_moderator() to authenticated;

-- Post SELECT: chưa đăng nhập chỉ đọc đã duyệt; chủ bài thấy bài của mình; admin thấy mọi bài.
drop policy if exists community_posts_public_read on public.community_posts;
create policy community_posts_public_read on public.community_posts for select to anon,authenticated
using (status='approved');
drop policy if exists community_posts_owner_read on public.community_posts;
create policy community_posts_owner_read on public.community_posts for select to authenticated
using (user_id=(select auth.uid()) or (select public.is_moderator()));
drop policy if exists community_posts_submit_pending on public.community_posts;
create policy community_posts_submit_pending on public.community_posts for insert to authenticated
with check (
  user_id=(select auth.uid()) and status='pending' and published_at is null and rejection_reason is null
);
drop policy if exists community_posts_only_mod_update on public.community_posts;
create policy community_posts_only_mod_update on public.community_posts for update to authenticated
using ((select public.is_moderator())) with check ((select public.is_moderator()));
drop policy if exists community_posts_only_mod_delete on public.community_posts;
create policy community_posts_only_mod_delete on public.community_posts for delete to authenticated
using ((select public.is_moderator()));

-- Bình luận gửi lên luôn pending. Chỉ bình luận approved mới được xem công khai.
drop policy if exists comments_public_read on public.community_comments;
create policy comments_public_read on public.community_comments for select to anon,authenticated using (status='approved');
drop policy if exists comments_own_or_mod on public.community_comments;
create policy comments_own_or_mod on public.community_comments for select to authenticated
using (user_id=(select auth.uid()) or (select public.is_moderator()));
drop policy if exists comments_submit on public.community_comments;
create policy comments_submit on public.community_comments for insert to authenticated
with check (user_id=(select auth.uid()) and status='pending');
drop policy if exists comments_only_mod_update on public.community_comments;
create policy comments_only_mod_update on public.community_comments for update to authenticated
using ((select public.is_moderator())) with check ((select public.is_moderator()));
drop policy if exists comments_only_mod_delete on public.community_comments;
create policy comments_only_mod_delete on public.community_comments for delete to authenticated
using ((select public.is_moderator()));

-- Vote: mỗi tài khoản được một phiếu cho bài GÓC NHÌN đã duyệt.
drop policy if exists vote_own_read on public.opinion_votes;
create policy vote_own_read on public.opinion_votes for select to authenticated using (user_id=(select auth.uid()));
drop policy if exists vote_insert on public.opinion_votes;
create policy vote_insert on public.opinion_votes for insert to authenticated
with check (user_id=(select auth.uid()) and exists (
 select 1 from public.community_posts p where p.id=post_id and p.status='approved' and p.category='goc-nhin'
));
drop policy if exists vote_update on public.opinion_votes;
create policy vote_update on public.opinion_votes for update to authenticated
using (user_id=(select auth.uid()))
with check (user_id=(select auth.uid()) and exists (
 select 1 from public.community_posts p where p.id=post_id and p.status='approved' and p.category='goc-nhin'
));
drop policy if exists vote_delete on public.opinion_votes;
create policy vote_delete on public.opinion_votes for delete to authenticated using (user_id=(select auth.uid()));

-- Thống kê chỉ được đọc công khai. Increment chỉ qua RPC có giới hạn một lượt/thiết bị/ngày (không chống giả mạo tuyệt đối).
drop policy if exists metrics_public on public.article_metrics;
create policy metrics_public on public.article_metrics for select to anon,authenticated using(true);
create or replace function public.track_article_view(p_article_key text,p_visitor_token uuid)
returns void language plpgsql security definer set search_path = ''
as $$
declare inserted_count int;
begin
  if p_article_key is null or p_article_key !~ '^[a-z0-9-]{3,130}$' or p_visitor_token is null then return; end if;
  if p_article_key like 'reader-%' and not exists (
   select 1 from public.community_posts p where p.id::text=substring(p_article_key from 8) and p.status='approved'
  ) then return; end if;
  insert into public.private_view_dedup(article_key,visitor_token,day_utc)
  values(p_article_key,p_visitor_token,(now() at time zone 'utc')::date)
  on conflict do nothing;
  get diagnostics inserted_count = row_count;
  if inserted_count > 0 then
    insert into public.article_metrics(article_key,view_count) values(p_article_key,1)
    on conflict(article_key) do update set view_count=public.article_metrics.view_count+1;
  end if;
end; $$;
revoke all on function public.track_article_view(text,uuid) from public;
grant execute on function public.track_article_view(text,uuid) to anon,authenticated;

-- Chỉ xuất tổng vote, không công khai danh tính người vote.
create or replace function public.get_opinion_vote_summary(p_post_id uuid)
returns table(agree bigint,disagree bigint) language sql stable security definer set search_path = ''
as $$ select count(*) filter(where v.choice='agree'),count(*) filter(where v.choice='disagree')
 from public.opinion_votes v join public.community_posts p on p.id=v.post_id
 where v.post_id=p_post_id and p.status='approved' and p.category='goc-nhin'; $$;
revoke all on function public.get_opinion_vote_summary(uuid) from public;
grant execute on function public.get_opinion_vote_summary(uuid) to anon,authenticated;

create or replace function public.published_at_on_approval() returns trigger
language plpgsql set search_path='' as $$
begin
 if new.status='approved' and (old.status is distinct from 'approved') then new.published_at=now(); end if;
 return new;
end; $$;
drop trigger if exists posts_publish_time on public.community_posts;
create trigger posts_publish_time before update on public.community_posts for each row
execute function public.published_at_on_approval();

create or replace function public.sync_comment_count() returns trigger
language plpgsql security definer set search_path = '' as $$
declare art text; diff int:=0;
begin
 if tg_op='DELETE' then art:=old.article_key; else art:=new.article_key; end if;
 if tg_op='INSERT' and new.status='approved' then diff:=1;
 elsif tg_op='DELETE' and old.status='approved' then diff:=-1;
 elsif tg_op='UPDATE' then
  if old.status!='approved' and new.status='approved' then diff:=1;
  elsif old.status='approved' and new.status!='approved' then diff:=-1; end if;
 end if;
 if diff<>0 then
 insert into public.article_metrics(article_key,comment_count) values(art,greatest(diff,0))
 on conflict(article_key) do update set comment_count=greatest(0,public.article_metrics.comment_count+diff);
 end if;
 if tg_op='DELETE' then return old; else return new; end if;
end; $$;
drop trigger if exists comment_counter on public.community_comments;
create trigger comment_counter after insert or update of status or delete on public.community_comments
for each row execute function public.sync_comment_count();

-- Ảnh bài viết: tạo bucket PUBLIC tên community-covers trong Storage UI, file size <= 2 MB,
-- allowed MIME: image/jpeg, image/png, image/webp. Không có bucket thì phần gửi bài bằng URL vẫn dùng được.
-- Mỗi người chỉ tải ảnh vào thư mục có UUID của chính mình.
drop policy if exists community_cover_upload on storage.objects;
create policy community_cover_upload on storage.objects for insert to authenticated
with check (bucket_id='community-covers' and (storage.foldername(name))[1]=(select auth.uid())::text
 and lower(storage.extension(name)) in ('jpg','jpeg','png','webp'));

-- SAU KHI ĐĂNG KÝ tài khoản quản trị và xác minh email, chạy riêng:
-- insert into public.moderators(user_id) values('DAN-UUID-NGUOI-DUYET-VAO-DAY');
-- Lấy UUID trong Authentication → Users (KHÔNG dùng email thay UUID).
