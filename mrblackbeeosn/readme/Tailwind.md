🚀 Cài đặt Tailwind CSS cho React + TypeScript Project
📦 Bước 1: Cài đặt dependencies
bash
# Mở terminal trong project và chạy:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
⚙️ Bước 2: Cấu hình Tailwind
File: tailwind.config.js
javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			// Giữ lại CSS variables của bạn
			colors: {
				'primary': 'var(--primary-color)',
				'secondary': 'var(--secondary-color)',
				'tertiary': 'var(--tertiary-color)',
				'accent': 'var(--accent-color)',
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
File: postcss.config.js (tự tạo nếu chưa có)
javascript

export const plugins = {
	tailwindcss: {},
	autoprefixer: {},
};

or

module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}

🎨 Bước 3: Import Tailwind vào CSS
File CSS chính của bạn (thường là index.css hoặc App.css):
css
/* Giữ nguyên CSS custom của bạn */
:root {
	--primary-color: #your-color;
	--secondary-color: #your-color;
	--tertiary-color: #your-color;
	--accent-color: #your-color;
}

/* Thêm Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Giữ lại tất cả CSS custom hiện tại của bạn */
.blog-card {
	/* your existing styles */
}

.header {
	/* your existing styles */
}

/* Thêm các custom components sử dụng Tailwind */
@layer components {
	.btn-primary {
		@apply px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all;
	}
	
	.card {
		@apply bg-white rounded-lg shadow-md p-6 border border-gray-200;
	}
}
🔧 Bước 4: Kiểm tra cấu hình TypeScript
File: tsconfig.json (đảm bảo có)
json
{
	"compilerOptions": {
		"target": "es5",
		"lib": ["dom", "dom.iterable", "esnext"],
		"allowJs": true,
		"skipLibCheck": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"strict": true,
		"forceConsistentCasingInFileNames": true,
		"noFallthroughCasesInSwitch": true,
		"module": "esnext",
		"moduleResolution": "node",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react-jsx"
	},
	"include": ["src"]
}
💡 Bước 5: Sử dụng trong component
Ví dụ với component hiện tại:
tsx
import React from 'react';

export default function Header(): React.JSX.Element {
	return (
		<header className="header bg-primary text-white p-4 shadow-lg">
			{/* Kết hợp class cũ + Tailwind */}
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">My Blog</h1>
				<nav className="flex gap-4">
					<a href="/" className="hover:text-accent transition-colors">Home</a>
					<a href="/about" className="hover:text-accent transition-colors">About</a>
				</nav>
			</div>
		</header>
	);
}
🎯 Bước 6: Test cài đặt
Tạo component test để kiểm tra:

tsx
// src/components/TestTailwind.tsx
export default function TestTailwind(): React.JSX.Element {
	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold text-primary mb-4">Tailwind Test</h2>
			<div className="flex gap-4 mb-4">
				<button className="btn-primary">Primary Button</button>
				<button className="px-4 py-2 bg-secondary text-white rounded">
					Secondary
				</button>
			</div>
			<div className="card">
				<p>This is a card with combined styles</p>
			</div>
		</div>
	);
}
🚀 Bước 7: Chạy project
bash
npm start
📚 Cheatsheet nhanh để bạn practice:
Spacing:
tsx
// Padding
<p className="p-4">Padding all</p>
<p className="px-4 py-2">Padding x & y</p>

// Margin  
<div className="mt-4 mb-2 mx-auto">Margin top/bottom</div>

// Gaps
<div className="flex gap-4">Gap between items</div>
Flexbox:
tsx
<div className="flex justify-between items-center">
<div className="flex flex-col md:flex-row">
Responsive:
tsx
<div className="w-full md:w-1/2 lg:w-1/3">
<p className="text-sm md:text-base lg:text-lg">
🎉 Done!
Bây giờ bạn có thể:

✅ Giữ nguyên CSS custom của bạn

✅ Sử dụng Tailwind cho rapid development

✅ Kết hợp cả hai một cách linh hoạt

✅ Practice gõ class utilities

Bắt đầu bằng cách thêm vài class Tailwind đơn giản vào components hiện có của bạn!