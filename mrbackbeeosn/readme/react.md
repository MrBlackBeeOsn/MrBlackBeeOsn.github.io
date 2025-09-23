Ok 👍 mình viết cho bạn một **checklist đầy đủ** từ đầu tới cuối để dựng project React với Vite + React Router. Bạn chỉ cần đi theo từng bước là chạy được ngay:

---

## 🚀 Checklist tạo React App với Vite + React Router

### 1. Tạo dự án mới với Vite

```bash
npm create vite@latest my-react-app
```

* `my-react-app` là tên dự án → bạn có thể đổi.
* Sau đó Vite sẽ hỏi:

  * **Select a framework:** chọn `React`
  * **Select a variant:** chọn `JavaScript` (hoặc `TypeScript` nếu quen).

---

### 2. Vào thư mục dự án

```bash
cd my-react-app
```

---

### 3. Cài dependency mặc định

```bash
npm install
```

👉 Thư mục `node_modules/` sẽ xuất hiện (chứa toàn bộ thư viện).

---

### 4. Cài React Router

```bash
npm install react-router-dom
```

---

### 5. Trong package.json, thêm:

```json
"homepage": "https://your-username.github.io/my-react-app",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

### 6. Trong vite.config.js, thêm:

```
export default defineConfig({
  base: '/my-react-app/', // ← thay bằng tên repo của bạn
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

### 7. Cài React gh-pages --save-dev

```bash
npm install gh-pages --save-dev
```

### 7. Build và deploy

```
npm run deploy

👉 Lệnh này sẽ:

Build app vào thư mục dist

Tạo nhánh gh-pages

Push nội dung lên GitHub Pages
```

---

### 8. Trên GitHub

```
Setting:
Kiểm tra có nhánh gh-pages chưa
Vào settings: Chọn pages -> chọn nhánh gh-pages - > Save

```

---

### 9. Build và deploy

```
cd my-react-app
npm run dev (xem trực tiếp live)

cd my-react-app
npm run build (đóng gói jsx vào thư mục dist)
npm run deploy (úp lên nhánh gh-pages )
```

---

### Tạo các file trong thư mục `src/`

📂 `src/`

```
main.jsx
App.jsx
Navbar.jsx
Home.jsx
About.jsx
Contact.jsx
```

---

#### `main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### `App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
```

#### `Navbar.jsx`

```jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "15px",
        padding: "10px 20px",
        background: "#f5f5f5",
        borderBottom: "1px solid #ddd"
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

#### `Home.jsx`

```jsx
export default function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>This is the homepage of your React app.</p>
    </div>
  );
}
```

#### `About.jsx`

```jsx
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This page contains information about us.</p>
    </div>
  );
}
```

#### `Contact.jsx`

```jsx
export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>You can reach us via email at contact@example.com.</p>
    </div>
  );
}
```

---

### 6. Chạy ứng dụng

```bash
npm run dev
```

👉 Mở trình duyệt theo địa chỉ mà Vite báo (thường là `http://localhost:5173/`).

---

### ✅ Kết quả

* Menu **Navbar** hiển thị ở mọi trang.
* Chọn `Home`, `About`, `Contact` → trang sẽ đổi nội dung mà không cần tải lại.
* Muốn sửa menu? chỉ cần đổi `Navbar.jsx`.

---

Bạn có muốn mình viết thêm phần **build ra bản deploy (npm run build)** và cách đưa lên **GitHub Pages** không?
