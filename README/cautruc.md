grok

my-blog/
├── assets/
│   ├── css/
│   │   ├── reset.css        # Reset/normalize CSS
│   │   ├── style.css        # CSS chính
│   │   └── components/
│   │       ├── header.css   # CSS cho header
│   │       └── footer.css   # CSS cho footer
├── vi/
│   ├── blog-journey.html
│   └── home.html
├── en/
│   ├── blog-journey.html
│   └── home.html
├── index.html
└── .gitignore

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hành Trình Blog Của Tôi</title>
    <!-- Liên kết CSS -->
    <link rel="stylesheet" href="../assets/css/reset.css"> <!-- Reset CSS -->
    <link rel="stylesheet" href="../assets/css/style.css"> <!-- CSS chính -->
    <link rel="stylesheet" href="../assets/css/components/header.css"> <!-- CSS cho header -->
    <link rel="stylesheet" href="../assets/css/components/footer.css"> <!-- CSS cho footer -->
</head>
<body>
    <header>
        <h1>Hành Trình Blog Của Tôi</h1>
    </header>
    <main>
        <section>
            <h2>2025</h2>
            <p>Tháng 1: Cập nhật nội dung</p>
        </section>
        <section>
            <h2>2026</h2>
            <p>Tháng 1: Cập nhật nội dung</p>
        </section>
    </main>
    <footer>
        <p>↑ Trở lại đầu trang</p>
    </footer>
</body>
</html>