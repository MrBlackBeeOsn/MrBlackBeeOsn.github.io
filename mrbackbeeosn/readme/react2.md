my-react-app/
├── public/
│   └── index.html  ← chỉ có 1 file HTML duy nhất
├── src/
│   ├── App.jsx     ← nơi bạn gắn các component
│   ├── Mrbeeosn.jsx ← chuyển từ file HTML sang đây
│   └── index.js    ← điểm khởi động ứng dụng


bash

npm create vite@latest my-react-app

cd my-react-app
npm install

npm install react-router-dom

npm install gh-pages --save-dev

npm run dev

npm run build
npm run deploy

json
"homepage": "https://hieudev.github.io/test1/my-react-app/",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
Đảm bảo "homepage" khớp với đường dẫn bạn muốn hiển thị.