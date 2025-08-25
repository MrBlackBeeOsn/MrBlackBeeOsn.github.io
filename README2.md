1. Chuẩn bị
Đầu tiên, bạn cần cài đặt Node.js trên máy tính. Sau đó, mở Terminal (trên Mac/Linux) hoặc Command Prompt (trên Windows) và chạy lệnh sau để cài đặt Pug và một số công cụ cần thiết:

Bash

npm install -g pug-cli
Lệnh này sẽ cài đặt trình biên dịch Pug.

2. Tạo file template
Bạn sẽ tạo một file layout chung. File này sẽ chứa những phần lặp lại trên tất cả các trang, chẳng hạn như header, footer và <head>.

Tạo một thư mục mới cho dự án của bạn và tạo một file có tên layout.pug.

layout.pug

Code snippet

doctype html
html(lang='vi')
  head
    title My Blog
    link(rel='stylesheet' href='style.css')
  body
    header
      h1 My Blog
    
    main
      block content
    
    footer
      p Đây là footer của tôi

Trong file này, block content là một "vùng" trống mà bạn sẽ điền nội dung riêng cho từng trang.

3. Tạo các file trang
Bây giờ, bạn có thể tạo các file .pug riêng cho từng trang (ví dụ: index.pug, about.pug). Bạn chỉ cần "mở rộng" file layout chung và điền nội dung vào block content.

index.pug

Code snippet

extends layout.pug

block content
  h1 Đây là Trang Chủ
  p Chào mừng bạn đến với blog của tôi!
about.pug

Code snippet

extends layout.pug

block content
  h1 Về Chúng Tôi
  p Blog này được tạo ra để chia sẻ kiến thức.
4. Biên dịch Pug thành HTML
Cuối cùng, bạn sẽ dùng Terminal để biên dịch các file .pug thành file .html.

Mở Terminal và điều hướng đến thư mục dự án của bạn. Sau đó, chạy lệnh sau:

Bash

pug *.pug --pretty
Lệnh này sẽ tìm tất cả các file .pug (trừ layout.pug vì nó được dùng làm template) và tạo ra các file .html tương ứng với nội dung được điền đầy đủ. Bây giờ, khi bạn muốn thay đổi footer, bạn chỉ cần sửa file layout.pug duy nhất.
