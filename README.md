# BẢN TIN MỘC — WEBSITE BÁO ĐIỆN TỬ + CỘNG ĐỒNG (BẢN MỚI)

**ĐỌC ĐẦU TIÊN:** `HUONG-DAN-CONG-DONG-A-Z.md`.

Bản cập nhật từ website tĩnh trước đây. Giữ nguyên giao diện màu `#EEEAE6`, `#D7B689`, `#C38C55`, `#813527` và các bài demo. Đã bổ sung form gửi bài, tài khoản, quản trị duyệt bài/bình luận, bình chọn, thống kê, xếp hạng, podcast, thời tiết, giải trí và thể thao.

- GitHub Pages: hosting frontend **miễn phí**.
- Supabase Free: backend cho chức năng cộng đồng (có hạn mức; phải cấu hình bằng `assets/js/config.js` và chạy `backend/01-SETUP-SUPABASE.sql`).
- Khi chưa cấu hình Supabase, website vẫn hiện bài demo, nhưng không cho giả lập việc gửi bài thật.
- Nội dung demo không phải nguồn tin thật đã xác minh.
- Không có tên miền `.com` miễn phí mặc định; dùng `USERNAME.github.io/REPOSITORY/` nếu chưa mua domain.

Danh sách trang: `index.html`, `bai-viet.html`, `chuyen-muc.html`, `tim-kiem.html`, `da-luu.html`, `gioi-thieu.html`, `gui-bai.html`, `tai-khoan.html`, `duyet-bai.html`, `kham-pha.html`, `bai-ban-doc.html`, `podcast.html`.

**Nhớ:** Không đăng Supabase `service_role` hoặc `secret key` lên GitHub. Chỉ dùng Publishable/anon key và giữ Row Level Security bật.
