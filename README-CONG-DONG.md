# BẢN TIN MỘC · Community Edition

Bản nâng cấp từ website HTML/CSS/JS đã tạo trước đó, giữ nguyên 18 bài minh họa và bảng màu gốc.

**Bắt đầu:** `HUONG-DAN-CONG-DONG-A-Z.md`.

- Frontend tĩnh GitHub Pages: trang chủ, tin, chuyên mục, tìm kiếm, podcast, khám phá, tài khoản, form gửi bài, biên tập, xem bài do bạn đọc đăng.
- Backend tùy chọn (bắt buộc để tài khoản/gửi/duyệt/comment/vote hoạt động): Supabase Free với RLS.
- SQL ở `backend/01-SETUP-SUPABASE.sql`.
- Điền Supabase Project URL và Publishable Key ở `assets/js/config.js`; **không bao giờ điền `service_role`**.
- Nếu chưa cấu hình Supabase: giao diện vẫn xem demo như thường và báo rõ các chức năng cộng đồng chưa kết nối.
- Ảnh do độc giả upload được giữ trong Supabase Storage; bucket public chỉ dùng cho ảnh có thể công khai.

Các bài cũ nằm ở `assets/js/data.js` và chưa tự động được chuyển sang Supabase, cần chỉnh thủ công. Không sử dụng bản demo như nguồn tin thời sự đã kiểm chứng.
