// LapTrinhPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import ProgrammingPracticeQuiz from '../../../../../components/quiz/ProgrammingPracticeQuiz';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

interface Question {
	id: number;
	question: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
}

export default function TracNghiemCSS(): React.JSX.Element {
	// Danh sách câu hỏi về CSS cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which CSS property is used to change the background color of an element?",
			options: [
				"color",
				"background-color",
				"bgcolor",
				"background"
			],
			correctAnswer: 1,
			explanation: "background-color thiết lập màu nền. color thiết lập màu chữ. background là thuộc tính viết tắt (shorthand)."
		},
		{
			id: 2,
			question: "Which CSS property controls the text size?",
			options: [
				"text-style",
				"font-size",
				"text-size",
				"font-style"
			],
			correctAnswer: 1,
			explanation: "font-size điều chỉnh kích thước văn bản. text-size không phải là thuộc tính CSS hợp lệ."
		},
		{
			id: 3,
			question: "Which of the following is the correct CSS syntax to make all the <p> elements blue?",
			options: [
				"p {color: blue;}",
				"p.all {color: blue;}",
				"<p style=\"color: blue;\">",
				"#p {color: blue;}"
			],
			correctAnswer: 0,
			explanation: "Cú pháp chuẩn là selector { property: value; }. p là bộ chọn cho tất cả thẻ đoạn văn."
		},
		{
			id: 4,
			question: "How do you select an element with the id=\"header\"?",
			options: [
				".header",
				"*header",
				"#header",
				"header"
			],
			correctAnswer: 2,
			explanation: "Ký hiệu thăng (#) dùng để chọn một phần tử dựa trên id duy nhất. Dấu chấm (.) dùng để chọn class."
		},
		{
			id: 5,
			question: "How do you select elements with the class=\"title\"?",
			options: [
				"#title",
				".title",
				"title",
				"class=\"title\""
			],
			correctAnswer: 1,
			explanation: "Dấu chấm (.) được sử dụng để chọn các phần tử dựa trên tên lớp (class) của chúng."
		},
		{
			id: 6,
			question: "Which CSS property is used for controlling the space between the element's content and its border?",
			options: [
				"margin",
				"spacing",
				"padding",
				"border-spacing"
			],
			correctAnswer: 2,
			explanation: "padding tạo không gian bên trong đường viền (giữa nội dung và đường viền). margin tạo không gian bên ngoài đường viền."
		},
		{
			id: 7,
			question: "Which value of the position property removes the element from the normal document flow and makes it positioned relative to the viewport?",
			options: [
				"relative",
				"static",
				"absolute",
				"fixed"
			],
			correctAnswer: 3,
			explanation: "position: fixed đặt phần tử ở vị trí cố định trên màn hình, không di chuyển khi cuộn trang (relative to viewport)."
		},
		{
			id: 8,
			question: "What is the correct order of the shorthand property margin: 10px 20px 30px 40px;?",
			options: [
				"Top, Bottom, Left, Right",
				"Top, Right, Bottom, Left",
				"Top, Left, Bottom, Right",
				"Right, Left, Top, Bottom"
			],
			correctAnswer: 1,
			explanation: "Thứ tự áp dụng giá trị của margin/padding shorthand là theo chiều kim đồng hồ: Trên, Phải, Dưới, Trái."
		},
		{
			id: 9,
			question: "What does CSS stand for?",
			options: [
				"Creative Style Sheets",
				"Computer Style Sheets",
				"Cascading Style Sheets",
				"Colorful Style Solutions"
			],
			correctAnswer: 2,
			explanation: "CSS là viết tắt của Cascading Style Sheets, ngôn ngữ dùng để mô tả kiểu dáng cho tài liệu HTML."
		},
		{
			id: 10,
			question: "Which CSS method is generally considered the best practice for styling complex web pages?",
			options: [
				"Inline Styles",
				"Internal Styles (using the <style> tag in HTML)",
				"External Stylesheet (using a separate .css file)",
				"JavaScript manipulation of styles"
			],
			correctAnswer: 2,
			explanation: "Sử dụng file CSS bên ngoài giúp tách biệt cấu trúc (HTML) và kiểu dáng (CSS), làm cho mã dễ quản lý và tái sử dụng hơn (best practice)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/lap-trinh#css-basic-practice"><mark className="highlight-tertiary-padding-4-8">CSS</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm CSS</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental CSS concepts</p>
				</header>
	
				{/* This is the content of CSS Quiz. */}
	
				<ProgrammingPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 15, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};