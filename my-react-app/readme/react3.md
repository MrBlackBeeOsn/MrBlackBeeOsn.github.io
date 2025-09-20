🚀 Các bước để hiển thị my-react-app trên GitHub Pages

✅ Bước 1: Cài đặt GitHub Pages cho React
Trong thư mục my-react-app, mở file package.json và thêm dòng sau:

json
"homepage": "https://yourusername.github.io/your-repo-name"
Thay yourusername bằng tên GitHub của bạn, và your-repo-name là tên repo chứa thư mục my-react-app.



✅ Bước 2: Cài đặt gói hỗ trợ deploy
Chạy lệnh sau trong terminal:

bash
npm install gh-pages --save-dev



✅ Bước 3: Thêm script deploy vào package.json
Thêm vào phần "scripts":

json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"



✅ Bước 4: Deploy lên GitHub Pages
Chạy lệnh sau:


bash
npm run deploy
Lệnh này sẽ:

Build React app vào thư mục build/

Đẩy nội dung build/ lên nhánh gh-pages của repo



✅ Bước 5: Mở trang web
Sau khi deploy xong, bạn có thể truy cập:

Code
https://yourusername.github.io/your-repo-name/
React app sẽ hiển thị tại đó 🎉



🧠 Mẹo thêm
Nếu repo của bạn chứa cả index.html thuần ở thư mục gốc và thư mục my-react-app, bạn nên deploy React app từ nhánh riêng (gh-pages) để tránh xung đột.

Nếu bạn muốn React app hiển thị ở đường dẫn phụ như /my-react-app/, bạn cần chỉnh lại homepage và cấu hình router trong React.

npm run build