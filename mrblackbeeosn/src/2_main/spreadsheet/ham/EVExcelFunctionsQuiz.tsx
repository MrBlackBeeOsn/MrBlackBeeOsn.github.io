// FunctionsPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import SpreadsheetPracticeQuiz from '../../../components/quiz/SpreadsheetPracticeQuiz';

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

export default function EVExcelFunctionsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Hàm cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which function would you use to find the highest value in a range of cells?",
			options: [
				"MAXIMUM()",
				"HIGH()",
				"MAX()",
				"LARGE()"
			],
			correctAnswer: 2,
			explanation: "Trong Excel, hàm MAX() được dùng để trả về giá trị lớn nhất trong một vùng dữ liệu."
		},
		{
			id: 2,
			question: "What is the correct syntax for the VLOOKUP function?",
			options: [
				"=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
				"=VLOOKUP(table_array, lookup_value, col_index_num)",
				"=VLOOKUP(lookup_value, col_index_num, table_array)",
				"=VLOOKUP(range_lookup, lookup_value, table_array)"
			],
			correctAnswer: 0,
			explanation: "Đây là cấu trúc chuẩn để tìm kiếm dữ liệu theo cột."
		},
		{
			id: 3,
			question: "If cell A1 contains \"Excel\" and B1 contains \"Functions\", which formula joins them as \"Excel Functions\"?",
			options: [
				"=A1+B1",
				"=JOIN(A1, B1)",
				"=A1 & \" \" & B1",
				"=CONCAT(A1, B1)"
			],
			correctAnswer: 2,
			explanation: "Sử dụng toán tử & kết hợp với khoảng trắng nằm trong dấu ngoặc kép."
		},
		{
			id: 4,
			question: "Which function counts the number of cells that contain numbers in a range?",
			options: [
				"COUNTA()",
				"COUNT()",
				"COUNTBLANK()",
				"COUNTIF()"
			],
			correctAnswer: 1,
			explanation: "Hàm COUNT() chỉ đếm các ô có chứa giá trị là số."
		},
		{
			id: 5,
			question: "What will be the result of the formula: =IF(10>5, \"Yes\", \"No\")?",
			options: [
				"10",
				"5",
				"No",
				"Yes"
			],
			correctAnswer: 3,
			explanation: "Vì biểu thức so sánh 10 > 5 là đúng, hàm trả về kết quả ở vế \"Value_if_true\"."
		},
		{
			id: 6,
			question: "Which function is used to calculate the arithmetic mean of a group of cells?",
			options: [
				"SUM()",
				"MEDIAN()",
				"AVERAGE()",
				"MODE()"
			],
			correctAnswer: 2,
			explanation: "Hàm AVERAGE() dùng để tính số trung bình cộng của các đối số hoặc vùng dữ liệu."
		},
		{
			id: 7,
			question: "What does the #VALUE! error usually mean in Excel?",
			options: [
				"The formula cannot find what it is asked to look for.",
				"You are dividing by zero.",
				"The formula has the wrong type of argument (e.g., adding text to a number).",
				"The column is not wide enough."
			],
			correctAnswer: 2,
			explanation: "Xuất hiện khi bạn thực hiện toán tử toán học trên các ô chứa văn bản hoặc kiểu dữ liệu không phù hợp."
		},
		{
			id: 8,
			question: "Which function returns the current date and time?",
			options: [
				"TODAY()",
				"DATE()",
				"TIME()",
				"NOW()"
			],
			correctAnswer: 3,
			explanation: "Hàm NOW() cung cấp cả ngày và giờ hệ thống hiện tại, trong khi TODAY() chỉ cho ngày."
		},
		{
			id: 9,
			question: "In the formula =SUMIF(A1:A10, \">50\", B1:B10), what is B1:B10?",
			options: [
				"The range to be evaluated by the criteria.",
				"The criteria itself.",
				"The actual cells to add if the condition is met.",
				"The range of cells to count."
			],
			correctAnswer: 2,
			explanation: "Đây là vùng tính tổng (sum_range), nơi chứa các con số sẽ được cộng lại nếu điều kiện tương ứng ở cột A thỏa mãn."
		},
		{
			id: 10,
			question: "Which function can be used to convert text to all uppercase letters?",
			options: [
				"UP()",
				"UPPER()",
				"CAPS()",
				"BIG()"
			],
			correctAnswer: 1,
			explanation: "Hàm UPPER() chuyển đổi toàn bộ chuỗi văn bản thành chữ hoa."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/functions#ham-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Excel Hàm Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental hàm concepts</p>
				</header>
	
				{/* This is the content of Hàm Quiz. */}
	
				<SpreadsheetPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 20, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};