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
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 2,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 3,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 4,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 5,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 6,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 7,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 8,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 9,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 10,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
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