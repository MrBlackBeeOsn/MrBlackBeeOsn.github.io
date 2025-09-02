chatgpt

📂 Cấu trúc thư mục
my-website/
│
├── index.html
└── styles/
    ├── base.css
    ├── layout.css
    └── components.css

📄 base.css

(Dùng để reset, định nghĩa màu sắc, font chữ cơ bản)

/* Reset margin, padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Biến global */
:root {
  --primary-color: #4a90e2;
  --font-main: "Segoe UI", sans-serif;
}

body {
  font-family: var(--font-main);
  background-color: #f9f9f9;
  color: #333;
}

📄 layout.css

(Định dạng bố cục, container, header, footer)

header, footer {
  background: var(--primary-color);
  color: white;
  text-align: center;
  padding: 1rem;
}

main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

📄 components.css

(Style cho nút bấm, card, tiêu đề)

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

button:hover {
  background: #357abd;
}

📄 index.html

(Link 3 file CSS vào theo thứ tự)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo Website</title>

  <!-- Link CSS theo thứ tự -->
  <link rel="stylesheet" href="styles/base.css">
  <link rel="stylesheet" href="styles/layout.css">
  <link rel="stylesheet" href="styles/components.css">
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>

  <main>
    <p>Đây là nội dung chính của trang.</p>
    <button>Click Me</button>
  </main>

  <footer>
    <p>© 2025 - My Website</p>
  </footer>
</body>
</html>


👉 Khi mở index.html, bạn sẽ thấy:

base.css lo font + màu nền.

layout.css lo header, main, footer.

components.css lo button + h1.