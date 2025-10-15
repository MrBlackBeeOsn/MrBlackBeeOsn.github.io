bash

# 1. Cài TypeScript (có thể báo vulnerabilities)
npm install --save-dev typescript @types/react @types/react-dom @types/node

# 2. Fix vulnerabilities  
npm audit fix --force

# 3. Kiểm tra kết quả
npm audit

# 4. Khởi động dev server (nếu cần restart)
npm start
