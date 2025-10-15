Cài TypeScript cho dự án React có sẵn
1. Cài đặt packages cần thiết
bash
# Nếu dùng npm
npm install --save-dev typescript @types/react @types/react-dom @types/node

# Hoặc nếu dùng yarn
yarn add --dev typescript @types/react @types/react-dom @types/node

# Hoặc nếu dùng pnpm
pnpm add -D typescript @types/react @types/react-dom @types/node
2. Tạo file tsconfig.json
Tạo file tsconfig.json ở thư mục gốc dự án:

json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
3. Tuỳ chỉnh theo build tool của bạn
Nếu dùng Create React App:
bash
# CRA đã hỗ trợ sẵn, chỉ cần cài packages
npm install --save-dev typescript @types/react @types/react-dom @types/node
Nếu dùng Vite:
javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
Nếu dùng Webpack:
javascript
// webpack.config.js
module.exports = {
  // ... existing config
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
4. Kiểm tra cài đặt
Tạo file test để verify:

typescript
// src/test-tsx.tsx
import React from 'react';

function TestComponent(): JSX.Element {
  return <div>TypeScript is working! ✅</div>;
}

export default TestComponent;
5. Chạy thử
bash
# Khởi động development server
npm start

# Hoặc build thử
npm run build
6. Đổi file đầu tiên để test
bash
# Đổi 1 file .jsx đơn giản sang .tsx
mv src/components/HelloWorld.jsx src/components/HelloWorld.tsx
Cấu hình quan trọng cần nhớ:
"allowJs": true → Cho phép file .js/.jsx

"strict": false → Tắt strict mode ban đầu

"jsx": "react-jsx" → Hỗ trợ JSX syntax

"noEmit": true → Build tool sẽ xử lý compilation

Nếu gặp lỗi khi cài đặt:
Lỗi phiên bản React:
bash
# Kiểm tra phiên bản React
npm list react react-dom

# Nếu cần, cài đúng phiên bản types
npm install --save-dev @types/react@18 @types/react-dom@18
Lỗi module resolution:
json
// Thêm vào tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
Sau khi cài xong, bạn có thể:
Giữ nguyên tất cả file JSX - vẫn chạy bình thường

Đổi từng file JSX → TSX khi có thời gian

Nhận type checking cho file TSX mới

Vẫn deploy bình thường với cả JSX và TSX
