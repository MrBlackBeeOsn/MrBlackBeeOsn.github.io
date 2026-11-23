// SpreadsheetPracticeQuizDPDK.tsx
// SpreadsheetPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import SpreadsheetPracticeQuiz from '../../../../components/quiz/SpreadsheetPracticeQuiz';

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

export default function ExcelShortcuts0110(): React.JSX.Element {
	// Danh sách câu hỏi về Programming cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which shortcut selects the entire current region (contiguous data range) around the active cell in Excel?",
			options: [
				"Ctrl + Shift + Space",
				"Alt + Enter",
				"Ctrl + A",
				"F2"
			],
			correctAnswer: 2,
			explanation: "Pressing Ctrl + A once in a cell inside a data table selects the contiguous range of data surrounding it; pressing Ctrl + A a second time selects the entire worksheet."
		},
		{
			id: 2,
			question: "What does pressing Ctrl + ; (semicolon) insert into the active cell in Excel?",
			options: [
				"The current time",
				"The current date",
				"Today's dynamic formula (=TODAY())",
				"A new line inside the cell"
			],
			correctAnswer: 1,
			explanation: "Ctrl + ; inserts a static value for the current date, whereas Ctrl + Shift + ; (or Ctrl + :) inserts the current time."
		},
		{
			id: 3,
			question: "Which keyboard shortcut opens the Format Cells dialog box in Excel?",
			options: [
				"Ctrl + Shift + F",
				"Alt + 1",
				"F4",
				"Ctrl + 1"
			],
			correctAnswer: 3,
			explanation: "Ctrl + 1 opens the Format Cells dialog box, giving quick access to Number, Alignment, Font, Border, Fill, and Protection tabs."
		},
		{
			id: 4,
			question: "How can you toggle absolute ($A$1), mixed, and relative (A1) cell references while editing a formula in Excel?",
			options: [
				"F4",
				"F2",
				"F9",
				"Alt + ="
			],
			correctAnswer: 0,
			explanation: "When a cell reference is selected or adjacent to the cursor in the formula bar or cell, pressing F4 cycles through $A$1, A$1, $A1, and A1."
		},
		{
			id: 5,
			question: "Which shortcut quickly inserts an AutoSum (=SUM(...)) formula for adjacent numeric cells in Excel?",
			options: [
				"Shift + =",
				"Ctrl + Shift + S",
				"Alt + =",
				"Alt + S"
			],
			correctAnswer: 2,
			explanation: "Alt + = automatically enters the SUM function and detects the most likely range of adjacent numbers above or to the left of the active cell."
		},
		{
			id: 6,
			question: "What does Ctrl + Shift + L do in an Excel worksheet?",
			options: [
				"Inserts a hyperlink",
				"Locks selected cells",
				"Aligns text to the left",
				"Toggles AutoFilter on or off"
			],
			correctAnswer: 3,
			explanation: "Ctrl + Shift + L adds filter drop-down arrows to the header row of a table or removes them if filters are already active."
		},
		{
			id: 7,
			question: "Which shortcut moves the active cell to the very last non-empty cell in the current row (to the right) in Excel?",
			options: [
				"End + Right Arrow",
				"Ctrl + Right Arrow",
				"Alt + Right Arrow",
				"Shift + Right Arrow"
			],
			correctAnswer: 1,
			explanation: "Ctrl + Right Arrow jumps to the edge of the current data region in a row (or the far right column if the row is blank)."
		},
		{
			id: 8,
			question: "When typing inside a cell in Excel, how do you start a new line within the same cell?",
			options: [
				"Enter",
				"Shift + Enter",
				"Alt + Enter",
				"Ctrl + Enter"
			],
			correctAnswer: 2,
			explanation: "Alt + Enter inserts a line break inside the active cell so you can stack text on multiple lines within a single cell."
		},
		{
			id: 9,
			question: "Which shortcut creates a standard column or bar chart from selected data on a new chart sheet in Excel?",
			options: [
				"F11",
				"Alt + F1",
				"Ctrl + F1",
				"Shift + F11"
			],
			correctAnswer: 0,
			explanation: "Pressing F11 creates a chart on a dedicated new chart sheet, whereas Alt + F1 embeds a chart directly on the current worksheet."
		},
		{
			id: 10,
			question: "What does Ctrl +  ` (grave accent / tilde key) toggle in Excel?",
			options: [
				"Freeze Panes",
				"Track Changes",
				"Full Screen mode",
				"Show formulas vs. calculated values"
			],
			correctAnswer: 3,
			explanation: "Ctrl +  ` switches the worksheet display between showing evaluated cell results and showing the underlying formulas across cells."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/spreadsheet#Shortcuts-Quiz"><mark className="highlight-tertiary-padding-4-8">Shortcuts Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Excel Shortcuts 01-10</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Excel Shortcuts</p>
				</header>
	
				{/* This is the content of Programming Quiz. */}
	
				<SpreadsheetPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>noVEMber 21, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};