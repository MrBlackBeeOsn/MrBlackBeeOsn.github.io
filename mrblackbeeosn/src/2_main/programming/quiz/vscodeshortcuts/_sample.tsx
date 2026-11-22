// ProgrammingPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import ProgrammingPracticeQuiz from '../../../../components/quiz/ProgrammingPracticeQuiz';

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

export default function VSCodeShortcuts0110(): React.JSX.Element {
	// Danh sách câu hỏi về VS Code cơ bản
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
				
				<h4><HashLink smooth to="/programming#vscode-shortcuts-quiz"><mark className="highlight-tertiary-padding-4-8">VS Code Shortcuts Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">VS Code Shortcuts 01-10</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental VS Code Shortcuts</p>
				</header>
	
				{/* This is the content of VS Code Quiz. */}
	
				<ProgrammingPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>noVEMber 22, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};