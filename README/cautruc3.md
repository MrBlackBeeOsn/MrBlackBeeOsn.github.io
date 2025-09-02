Grok

Ví dụ minh họa
Giả sử cấu trúc thư mục như trước:
textmy-blog/
├── assets/
│   ├── css/
│   │   ├── reset.css       // Reset kiểu dáng mặc định
│   │   ├── style.css       // Kiểu dáng chung (ví dụ: font, màu nền)
│   │   └── components/
│   │       ├── header.css  // Class cho header
│   │       └── footer.css  // Class cho footer
├── vi/
│   └── blog-journey.html   // Tệp HTML sử dụng các class chung
Nội dung các tệp CSS

reset.css (reset chung, không cần class cụ thể):
css* { margin: 0; padding: 0; box-sizing: border-box; }

style.css (class chung cho toàn trang):
cssbody { font-family: Arial, sans-serif; background-color: #f9f9f9; }
.container { max-width: 1200px; margin: 0 auto; padding: 20px; }

header.css (class cho header, có thể dùng chung):
css.header { background-color: #333; color: white; padding: 10px; text-align: center; }
.header__title { font-size: 24px; }  // Sử dụng BEM để tránh xung đột

footer.css (class cho footer, cũng dùng chung):
css.footer { background-color: #333; color: white; padding: 10px; text-align: center; }
.footer__link { color: #fff; text-decoration: none; }
.footer__link:hover { text-decoration: underline; }  // Có thể dùng ở bất kỳ trang nào


Liên kết và sử dụng trong HTML (ví dụ: vi/blog-journey.html)
html<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Hành Trình Blog Của Tôi</title>
    <link rel="stylesheet" href="../assets/css/reset.css">  <!-- Reset trước -->
    <link rel="stylesheet" href="../assets/css/style.css">  <!-- Chung -->
    <link rel="stylesheet" href="../assets/css/components/header.css">  <!-- Header -->
    <link rel="stylesheet" href="../assets/css/components/footer.css">  <!-- Footer -->
</head>
<body>
    <header class="header">  <!-- Sử dụng class từ header.css -->
        <h1 class="header__title">Hành Trình Blog Của Tôi</h1>  <!-- Class từ header.css -->
    </header>
    <main class="container">  <!-- Sử dụng class từ style.css -->
        <section>
            <h2>2025</h2>
            <p>Tháng 1: Cập nhật nội dung</p>
        </section>
    </main>
    <footer class="footer">  <!-- Sử dụng class từ footer.css -->
        <a href="#" class="footer__link">↑ Trở lại đầu trang</a>  <!-- Class từ footer.css -->
    </footer>
</body>
</html>