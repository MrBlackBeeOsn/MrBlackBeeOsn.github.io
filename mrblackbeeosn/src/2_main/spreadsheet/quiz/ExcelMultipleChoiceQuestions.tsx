// SpreadsheetPracticeQuizDPDK.tsx

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

export default function ExcelMultipleChoiceQuestions(): React.JSX.Element {
	// Danh sách câu hỏi về Spreadsheet cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which symbol must all Excel formulas begin with?",
			options: [
				"+",
				"=",
				"(",
				"#"
			],
			correctAnswer: 1,
			explanation: "In Excel, the equals sign (=) tells the application that the characters following it constitute a formula. If you do not enter the equals sign, Excel will interpret the data as standard text or numbers."
		},
		{
			id: 2,
			question: "Which function is used to find the highest number in a range of cells?",
			options: [
				"HIGH",
				"UPPER",
				"MAX",
				"TOP"
			],
			correctAnswer: 2,
			explanation: "The MAX function returns the largest value in a set of values. For example, =MAX(A1:A10) will show the highest number in that range. UPPER is used for text, and HIGH/TOP are not standard Excel functions."
		},
		{
			id: 3,
			question: "What does the error message #DIV/0! signify?",
			options: [
				"The formula refers to an empty cell.",
				"The column is not wide enough.",
				"You are trying to divide a number by zero.",
				"The file format is invalid."
			],
			correctAnswer: 2,
			explanation: "This error occurs when a formula attempts to divide a value by zero (0) or by a cell reference that is empty (which Excel treats as zero). Mathematical division by zero is undefined."
		},
		{
			id: 4,
			question: "Which symbol is used to create an absolute cell reference (e.g., fixing a cell like $A$1)?",
			options: [
				"%",
				"$",
				"&",
				"!"
			],
			correctAnswer: 1,
			explanation: "The dollar sign ($) is used to \"lock\" a reference. When you copy a formula with $A$1 to another cell, the reference will remain pointing to A1, whereas a relative reference (like A1) would change based on the new position."
		},
		{
			id: 5,
			question: "In the function =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]), what does col_index_num represent?",
			options: [
				"The number of columns in the table.",
				"The column number in the table_array from which to retrieve the value.",
				"The row number of the value.",
				"The name of the worksheet."
			],
			correctAnswer: 1,
			explanation: "The col_index_num argument specifies which column of the selected table contains the data you want to get. For example, if you want data from the 3rd column of your selection, you type 3."
		},
		{
			id: 6,
			question: "What is the intersection of a row and a column called?",
			options: [
				"Grid",
				"Box",
				"Cell",
				"Range"
			],
			correctAnswer: 2,
			explanation: "A cell is the basic unit of a worksheet in which you enter data. It is formed by the intersection of a row and a column and is identified by its address (e.g., B5)."
		},
		{
			id: 7,
			question: "Which keyboard shortcut is commonly used to \"Select All\" cells in the current worksheet or data region?",
			options: [
				"Ctrl + S",
				"Ctrl + C",
				"Ctrl + A",
				"Ctrl + V"
			],
			correctAnswer: 2,
			explanation: "Ctrl + A selects the entire current region (if you are inside a data set) or the entire worksheet (if pressed again). Ctrl + S is for saving, Ctrl + C for copying, and Ctrl + V for pasting."
		},
		{
			id: 8,
			question: "Which logical function returns one value if a condition is true and another value if it is false?",
			options: [
				"AND",
				"OR",
				"IF",
				"WHAT"
			],
			correctAnswer: 2,
			explanation: "The structure of the IF function is =IF(condition, value_if_true, value_if_false). It checks if a statement is true or false and returns the corresponding result you specified."
		},
		{
			id: 9,
			question: "What is the correct file extension for a standard modern Excel workbook?",
			options: [
				".doc",
				".txt",
				".xlsx",
				".ppt"
			],
			correctAnswer: 2,
			explanation: "Since Excel 2007, the default file format for Excel workbooks is XML-based, indicated by the .xlsx extension. Previously, the standard extension was .xls."
		},
		{
			id: 10,
			question: "Which feature allows you to quickly visualize data trends (like a small line graph) inside a single cell?",
			options: [
				"PivotTable",
				"Sparklines",
				"Macro",
				"Slicer"
			],
			correctAnswer: 1,
			explanation: "Sparklines are tiny charts that fit within a single worksheet cell to provide a visual representation of data. They are useful for showing trends in a series of values, such as seasonal increases or decreases, right alongside the data."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/spreadsheet#spreadsheet-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Excel Multiple Choice Questions</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental spreadsheet concepts</p>
				</header>
	
				{/* This is the content of Spreadsheet Quiz. */}
	
				<SpreadsheetPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 06, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};