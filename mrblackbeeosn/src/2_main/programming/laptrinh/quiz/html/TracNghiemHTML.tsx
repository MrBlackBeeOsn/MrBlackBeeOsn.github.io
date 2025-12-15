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

export default function TracNghiemHTML(): React.JSX.Element {
	// Danh sách câu hỏi về HTML cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which attribute of the <img> tag is used to specify the path to the image file?",
			options: [
				"alt",
				"href",
				"src",
				"title"
			],
			correctAnswer: 2,
			explanation: "Thuộc tính src (source) trong thẻ <img> là bắt buộc và được sử dụng để chỉ định đường dẫn (URL) đến tệp hình ảnh."
		},
		{
			id: 2,
			question: "What is the correct HTML element for inserting a line break?",
			options: [
				"<lb>",
				"<break>",
				"<br>",
				"<newline>"
			],
			correctAnswer: 2,
			explanation: "Thẻ <br> là thẻ trống (empty tag) và được sử dụng để chèn một lần xuống dòng đơn (line break), không cần thẻ đóng."
		},
		{
			id: 3,
			question: "Which HTML element is used to define the most important heading?",
			options: [
				"<h6>",
				"<h10>",
				"<h1.>",
				"<h1>"
			],
			correctAnswer: 3,
			explanation: "HTML định nghĩa 6 cấp độ tiêu đề, từ <h1> đến <h6>. Trong đó, <h1> biểu thị tiêu đề quan trọng nhất hoặc lớn nhất."
		},
		{
			id: 4,
			question: "How do you create an unordered list in HTML?",
			options: [
				"Using the <dl> tag",
				"Using the <ul> tag",
				"Using the <ol> tag",
				"Using the <li> tag"
			],
			correctAnswer: 1,
			explanation: "Thẻ <ul> (unordered list) được sử dụng để tạo một danh sách không có thứ tự (thường được hiển thị bằng dấu chấm tròn hoặc ký hiệu khác)."
		},
		{
			id: 5,
			question: "Which attribute is necessary for the <form> element to specify where to send the form data upon submission?",
			options: [
				"method",
				"action",
				"type",
				"data"
			],
			correctAnswer: 1,
			explanation: "Thuộc tính action trong thẻ <form> chỉ định URL (trang hoặc tập lệnh) nơi dữ liệu biểu mẫu sẽ được gửi đi để xử lý khi người dùng nhấn nút gửi (submit)."
		},
		{
			id: 6,
			question: "Which HTML5 semantic element is used to define a set of navigation links?",
			options: [
				"<links>",
				"<navigation>",
				"<nav>",
				"<menu>"
			],
			correctAnswer: 2,
			explanation: "Thẻ <nav> là một yếu tố ngữ nghĩa (semantic element) trong HTML5, dùng để nhóm các liên kết điều hướng chính của trang web."
		},
		{
			id: 7,
			question: "What does the DOCTYPE declaration represent?",
			options: [
				"It defines the document type and HTML version.",
				"It declares the page title for the browser tab.",
				"It is a container for all the visible page content.",
				"It is a required closing tag for the <html> element."
			],
			correctAnswer: 0,
			explanation: "Khai báo <!DOCTYPE html> giúp trình duyệt hiểu rằng tài liệu là một tài liệu HTML5, đảm bảo trang được hiển thị một cách chính xác."
		},
		{
			id: 8,
			question: "Which HTML tag is used to make text appear italic (semantic meaning)?",
			options: [
				"<italic>",
				"<i>",
				"<em>",
				"<break>"
			],
			correctAnswer: 2,
			explanation: "Thẻ <em> (emphasis) được sử dụng để nhấn mạnh một phần văn bản (với ý nghĩa ngữ nghĩa), và theo mặc định, nó thường được hiển thị dưới dạng in nghiêng."
		},
		{
			id: 9,
			question: "To define cells in a standard HTML table, which tag is used?",
			options: [
				"<tc>",
				"<tr>",
				"<th>",
				"<td>"
			],
			correctAnswer: 3,
			explanation: "Thẻ <td> (table data) được sử dụng để định nghĩa một ô dữ liệu tiêu chuẩn trong bảng. Thẻ <tr> định nghĩa hàng, còn <th> định nghĩa ô tiêu đề."
		},
		{
			id: 10,
			question: "Which of the following is an example of an inline HTML element?",
			options: [
				"<div>",
				"<p>",
				"<span>",
				"<h1>"
			],
			correctAnswer: 2,
			explanation: "Thẻ <span> là một phần tử nội tuyến (inline element), chỉ chiếm không gian cần thiết cho nội dung của nó. Các thẻ còn lại (<div>, <p>, <h1>) đều là các phần tử khối (block-level elements)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/lap-trinh#html-basic-practice"><mark className="highlight-tertiary-padding-4-8">HTML</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center"></h1>
					<p className="subtitle text-center">Test your knowledge of fundamental HTML concepts</p>
				</header>
	
				{/* This is the content of HTML Quiz. */}
	
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