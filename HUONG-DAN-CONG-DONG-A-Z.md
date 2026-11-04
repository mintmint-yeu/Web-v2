# HƯỚNG DẪN A–Z — BẢN TIN MỘC (BẢN CỘNG ĐỒNG)

**Mục tiêu:** Giữ website đang có trên GitHub Pages, bổ sung đăng ký, đăng nhập, gửi bài/bút ký/cảm nghĩ, hàng đợi duyệt, quản trị bài và bình luận, bình chọn quan điểm, số lượt mở, xếp hạng và podcast.

**Chi phí:** Có thể duy trì **0đ** ở quy mô nhỏ, nếu ở trong hạn mức của GitHub Pages và Supabase Free. Supabase có thể tạm dừng dự án Free sau một tuần không hoạt động; không bảo đảm dịch vụ 24/7. Giới hạn theo trang giá Supabase tại thời điểm viết: 500 MB database, 1 GB Storage, 50.000 người dùng hoạt động/tháng, 5 GB egress. GitHub Pages chỉ cung cấp phần website tĩnh.

## 1. Có những gì ngay khi đăng bộ code?

- Trang chủ đã có khung quảng cáo **placeholder** ở đầu trang (không tự tải quảng cáo của bất cứ đơn vị nào).
- Hàng trên cùng tự ghi ngày tháng; có thể **chọn thành phố** để xem nhiệt độ. Nút **Theo IP** chỉ gọi dịch vụ nhận diện thành phố khi người đọc bấm, để tránh tự động gửi IP sang bên thứ ba.
- Menu mới: **Xem nhiều + Mới nhất, Giải trí, Thể thao**.
- Khối nổi bật về **Bạn đọc**, **Khám phá**, **Podcast**; box podcast nằm ở cột phải trang chủ.
- Trang **Gửi bài** có form nội dung, chuyên mục và **ảnh đại diện**, có nút **Lưu nháp trên thiết bị**.
- Trang **Tài khoản**, **Ban biên tập**, **Bài bạn đọc**, **Khám phá**, **Podcast**.
- Sắp xếp theo bài mới, lượt mở, số bình luận; lọc theo chuyên mục.
- Giữ nguyên website cũ, ảnh và 18 bài **minh họa**.

**Chưa có Supabase thì các nút Đăng ký/Đăng nhập/Gửi thật/Duyệt/Bình luận/Vote sẽ không hoạt động**; website hiện thông báo cấu hình thay vì báo thành công giả. Riêng **Lưu nháp** lưu tại trình duyệt, KHÔNG phải đã gửi tới ban biên tập.

## 2. Đưa bản cập nhật lên GitHub Pages

1. Giải nén file ZIP mới.
2. Mở thư mục `ban-tin-moc` ở trong ZIP. **Phải đưa các tệp bên trong thư mục này lên cấp gốc repository**, nơi có `index.html`.
3. Vào repository GitHub đang chạy web của nhóm → **Add file → Upload files** (hoặc dùng GitHub Desktop để thay thế file cũ và thêm file mới). Nếu dùng trình duyệt, kéo thả **các tệp và thư mục bên trong** `ban-tin-moc`; đừng upload nguyên file `.zip` làm website.
4. Nhấn **Commit changes**. Nếu GitHub trình duyệt không thay được cả thư mục, dùng GitHub Desktop: Clone repository → sao chép file mới vào thư mục clone → Commit → Push origin.
5. Vào **Settings → Pages**. Source `Deploy from a branch`, nhánh `main`, thư mục `/(root)`; **Custom domain để trống** nếu chưa sở hữu tên miền.
6. Tới địa chỉ dạng `https://TEN-TAI-KHOAN.github.io/TEN-REPOSITORY/`. Đợi GitHub hoàn thành deploy; Refresh.

**LƯU Ý:** Website hoạt động với các đường dẫn tương đối `./`, nên dùng được cả địa chỉ dự án có phần `/TEN-REPOSITORY/`.

## 3. Tạo Supabase Free để gửi/duyệt bài THẬT

1. Mở https://supabase.com/dashboard → đăng ký / đăng nhập → **New project**.
2. Tạo project Free, đặt password quản trị database **mạnh và cất riêng**, chọn region gần người dùng.
3. Vào **SQL Editor → New query**.
4. Trong ZIP, mở file **`backend/01-SETUP-SUPABASE.sql`**, sao chép TOÀN BỘ nội dung và dán vào SQL Editor → **Run**.
   - Script tạo database, các quy tắc RLS bảo vệ dữ liệu, chức năng đếm lượt mở (gần đúng), đếm bình luận, vote, và hàng chờ duyệt.
   - Quy tắc quan trọng: tài khoản thường KHÔNG có quyền duyệt bài. Người dùng không thể tự đặt trạng thái thành `approved`.
5. Vào **Project Settings → API** (hoặc **Connect / API Keys** trong giao diện mới).
6. Sao chép **Project URL** và **Publishable key** (hoặc legacy **anon/public key**).
7. Mở file `assets/js/config.js` bằng VS Code hoặc trình soạn thảo văn bản. Điền hai giá trị, ví dụ:

```js
window.COMMUNITY_CONFIG = {
  supabaseUrl: 'https://PROJECT-ID.supabase.co',
  publishableKey: 'sb_publishable_...'
};
```

8. Tải file `config.js` đã sửa lên GitHub, Commit thay đổi. `publishableKey`/`anon` là khóa **công khai** được phép ở frontend vì RLS bảo vệ dữ liệu. **TUYỆT ĐỐI KHÔNG đưa service_role, secret key, mật khẩu database hay mật khẩu người dùng lên GitHub!**

### Quan trọng: Thiết lập email đăng ký

1. Vào **Authentication → URL Configuration**.
2. Điền Site URL theo website của nhóm, ví dụ `https://USERNAME.github.io/REPOSITORY/`.
3. Thêm Redirect URL `https://USERNAME.github.io/REPOSITORY/tai-khoan.html` (có thể thêm `https://USERNAME.github.io/REPOSITORY/**`).
4. Trong **Authentication → Providers → Email**, kiểm tra Email provider được bật; việc xác minh email có thể được bật mặc định.
5. Supabase có giới hạn gửi email tích hợp, nếu email xác nhận không đến thì kiểm tra log/email throttling. Trường hợp muốn dùng lâu dài với nhiều người dùng, cấu hình một SMTP có độ tin cậy phù hợp (có thể phát sinh phí).

### Tạo kho ảnh nếu muốn upload ảnh ngay trên website

1. Supabase → **Storage → New bucket**.
2. Tạo bucket tên chính xác: `community-covers`.
3. Chọn **Public bucket** để ảnh hiển thị sau khi bài được duyệt. Link trực tiếp của ảnh có thể mở được nếu ai đó biết URL ngay cả khi bài chưa duyệt; không dùng cho ảnh riêng tư.
4. Cấu hình **file size limit = 2 MB** và MIME types: `image/jpeg`, `image/png`, `image/webp`.
5. SQL đã tạo policy để chỉ thành viên đã đăng nhập được upload vào thư mục ID của chính họ.
6. Nếu không muốn upload ảnh, **không cần tạo bucket**; gửi bài không ảnh vẫn hoạt động.

## 4. Tạo tài khoản quản trị / Ban biên tập

1. Đăng bản website lên GitHub, kết nối Supabase, rồi vào `.../tai-khoan.html`.
2. Chọn **Tạo tài khoản**; dùng email của thành viên nhóm sẽ duyệt bài. Xác minh email nếu được yêu cầu rồi đăng nhập.
3. Vào **Supabase Dashboard → Authentication → Users**. Tìm tài khoản vừa đăng ký, bấm vào và sao chép **User UID** (một chuỗi UUID dạng `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).
4. Vào **SQL Editor → New query**, chạy **một lệnh riêng**:

```sql
insert into public.moderators(user_id)
values ('UUID-CUA-TAI-KHOAN-QUAN-TRI');
```

5. Thay chuỗi giả bằng UUID thật và chạy. **Không đưa UUID bí mật?** UUID không phải mật khẩu, nhưng cũng không cần công khai.
6. Về website → tải lại → vào **Ban biên tập** qua link ở cuối trang hoặc trực tiếp `/duyet-bai.html`. Tài khoản này mới có quyền duyệt bài/bình luận và sửa bài đã gửi.
7. Muốn thêm biên tập viên thứ hai: cho người đó tạo tài khoản rồi lặp lại lệnh `insert` với UUID thứ hai. Muốn thu hồi, chạy `delete from public.moderators where user_id='UUID...'` trong SQL Editor.

**Không chọn “mình là admin” từ frontend**: vai trò này chỉ do bảng `moderators` của database xác thực.

## 5. Kiểm tra quy trình gửi bài thực tế

1. Dùng một tài khoản **độc giả** khác → `Gửi bài` → nhập tên/bút danh, tiêu đề, chuyên mục, tóm tắt, nội dung tối thiểu 100 ký tự, ảnh nếu có.
2. Tick ô quyền sử dụng nội dung, chọn **Gửi để xét duyệt**.
3. Khi mạng và Supabase hoạt động, website mới báo **đã gửi thành công**.
4. Vào **Tài khoản** → phần **Các bài đã gửi / Đang chờ duyệt**; bài mới có trạng thái **Đang chờ duyệt**.
5. Đăng nhập bằng tài khoản **biên tập viên** → `Ban biên tập` → mở bài → sửa tiêu đề/nội dung nếu cần → **Lưu & Duyệt đăng**.
6. Bài xuất hiện trên trang **Góc nhìn bạn đọc**, trang khám phá và trang chuyên mục của nó; link đọc dạng `bai-ban-doc.html?id=UUID`.
7. Nếu bấm **Từ chối bài**, độc giả nhìn thấy trạng thái **Bị từ chối** và lý do, không xuất hiện công khai.
8. Bình luận mới có trạng thái chờ duyệt, admin phải duyệt mới xuất hiện với khách truy cập.
9. Vote **Đồng tình / Không đồng tình** chỉ áp dụng cho bài bạn đọc thuộc chuyên mục **Góc nhìn**, đã được duyệt, có đăng nhập.

## 6. Những chức năng đã được bổ sung và giới hạn

| Chức năng | Đã có trong gói | Điều kiện/giới hạn |
|---|---|---|
| Ngày/thứ/tháng năm | Có | Dùng đồng hồ thiết bị |
| Thành phố + nhiệt độ | Có | Chọn thành phố hoặc tự nhấn **Theo IP**; cần Internet và dịch vụ ngoài |
| Podcast bên phải | Có khung | Cần audio có quyền sử dụng, thêm vào `PODCASTS` trong `data.js` |
| Tạo tài khoản | Có | Supabase và xác minh email tùy cài đặt |
| Bài đăng của độc giả | Có | Supabase; hàng chờ duyệt |
| Upload ảnh đại diện | Có | Supabase Storage bucket + policy |
| Bình luận | Có | Đăng nhập; bình luận phải duyệt |
| Vote Góc nhìn | Có | Bài bạn đọc đã duyệt, mỗi tài khoản một phiếu; 2 lựa chọn |
| Xem nhiều / mới nhất / bình luận nhiều | Có | Lượt mở chỉ tương đối; cần DB để lưu thống kê |
| Phần quảng cáo đầu trang | Có | Chỉ khung trống, chưa tích hợp mạng quảng cáo |
| Giải trí + Thể thao | Có | Chuyên mục mới, cần thêm bài thật |
| Biên tập bài bạn đọc | Có | Tài khoản biên tập viên, áp dụng các bài trong Supabase |
| Sửa 18 bài minh họa cũ | Bằng file `data.js` | Chưa chuyển các bài cũ sang Supabase nên không sửa từ dashboard |
| Lọc theo chuyên mục | Có | Trang Khám phá; bộ lọc tags nhỏ lẻ chưa triển khai |
| Hiển thị bài đã duyệt ở trang chủ | Có | Chỉ khi thật sự được duyệt |

### Cách cập nhật podcast

Mở cuối `assets/js/data.js`, sửa `window.PODCASTS = []` thành:

```js
window.PODCASTS = [
 { title:'Tập 01: Câu chuyện của nhóm', description:'Một podcast do nhóm tự thu.',
   audioUrl:'https://dia-chi-cong-khai-cua-nhom/tap01.mp3' }
];
```

Dùng link HTTPS công khai trỏ tới file âm thanh, đảm bảo **được quyền phát** và máy chủ cho phép phát từ trình duyệt. Chưa điền audioUrl thì giao diện ghi “Podcast sắp ra mắt”, không giả lập nút phát.

### Cách đổi màu và các bài demo cũ

- `assets/css/style.css`: đổi bốn biến `--ivory:#EEEAE6`, `--beige:#D7B689`, `--ochre:#C38C55`, `--brick:#813527`.
- `assets/js/data.js`: tên báo, danh mục, 18 bài minh họa, file podcast.
- Không sửa file SQL nhiều lần hoặc tắt RLS khi chưa hiểu; quyền duyệt do backend quyết định.

## 7. Quyền riêng tư và độ chính xác

- Nút **Theo IP** gửi yêu cầu đến `ipwho.is` để ước đoán thành phố, sau đó gọi `Open-Meteo` lấy nhiệt độ. Vị trí theo IP có thể sai nếu dùng VPN/mạng di động. Không ghi hoặc lưu địa chỉ IP này trong database của dự án.
- Lượt mở được đếm gần đúng **một lần mỗi trình duyệt/thiết bị mỗi ngày cho mỗi bài**, có thể bị thao túng. Không dùng như chỉ số đo lường đã kiểm toán.
- Dữ liệu của người dùng được lưu trong Supabase; cần có nội quy, hướng dẫn báo cáo nội dung xấu, chính sách quyền riêng tư và cơ chế xóa dữ liệu nếu triển khai chính thức.
- Mỗi bình luận hiện được kiểm duyệt thủ công. Trong quy mô lớn, cần chống spam, kiểm duyệt, rate limiting nâng cao.
- Supabase Free có thể ngừng tạm thời khi không hoạt động; cần theo dõi hạn mức.

## 8. Nếu site bị lỗi

**Gửi bài bị mờ:** Chưa đăng nhập hoặc thiếu URL/key Supabase trong `config.js`.

**Báo permission denied / RLS:** Chưa chạy SQL đầy đủ hoặc thiếu quyền. Không tắt RLS; kiểm tra SQL Editor và xác minh đăng nhập.

**Gửi ảnh báo lỗi:** Chưa tạo bucket `community-covers`, chọn sai tên, file quá 2 MB hoặc sai định dạng.

**Không nhận được email xác minh:** Kiểm tra hộp thư rác, Authentication → Users/logs, Redirect URL và giới hạn email Supabase.

**Admin không thấy hàng duyệt:** Chưa thêm User UID vào `public.moderators`; reload sau khi thêm.

**Website không mở:** Kiểm tra `index.html` ở thư mục gốc và Settings → Pages; đừng đặt tên vào Custom domain nếu chưa sở hữu domain.

**Website chỉ hiện bài demo:** Supabase chưa kết nối, hoặc chưa có bài bạn đọc được duyệt.

**Podcast không chạy:** Chưa điền link audio HTTPS thực và có quyền sử dụng, hoặc audio host không cho phép.

---

**Tài liệu chính thức:**
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Supabase Free: https://supabase.com/pricing
- Supabase Auth: https://supabase.com/docs/guides/auth/passwords
- Supabase RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- Supabase Storage: https://supabase.com/docs/guides/storage/security/access-control
- Open-Meteo: https://open-meteo.com/en/docs
