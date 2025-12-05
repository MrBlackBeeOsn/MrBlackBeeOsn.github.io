// ProgrammingQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import ProgrammingQuiz from './ProgrammingQuiz';

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

export default function ProgrammingQuiz0110(): React.JSX.Element {
	// Danh sách câu hỏi về Programming cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What is the correct command to create a new React app using Create React App?",
			options: [
				"npm new react-app",
				"npm start react-app",
				"npx create-react-app my-app",
				"npm init react-app"
			],
			correctAnswer: 2,
			explanation: "The official way to bootstrap a new React app is using npx create-react-app <app-name>. This command sets up a modern React project with no build configuration."
		},
		{
			id: 2,
			question: "In React, which hook is used to manage state in a functional component?",
			options: [
				"useEffect",
				"useContext",
				"useReducer",
				"useState"
			],
			correctAnswer: 3,
			explanation: "The useState hook is the primary way to add state to functional components. It returns a state variable and a function to update it."
		},
		{
			id: 3,
			question: "What will happen when the following code runs? setCount(count + 1); setCount(count + 1);",
			options: [
				"count increases by 1.",
				"count increases by 2.",
				"It causes an error.",
				"count does not change."
			],
			correctAnswer: 0,
			explanation: "React batches state updates, and since count is stale in both calls, they both set the same value. To update twice, use a function: setCount(prev => prev + 1)."
		},
		{
			id: 4,
			question: "Which method is invoked right after a component is mounted (inserted into the DOM)?",
			options: [
				"componentWillMount",
				"componentDidUpdate",
				"componentDidMount",
				"render"
			],
			correctAnswer: 2,
			explanation: "In class components, componentDidMount is called after the component output has been rendered to the DOM. In functional components, the useEffect hook with an empty dependency array mimics this."
		},
		{
			id: 5,
			question: "How do you pass data from a parent component to a child component?",
			options: [
				"Using state",
				"Using refs",
				"Using props",
				"Using context"
			],
			correctAnswer: 2,
			explanation: "Props are the primary mechanism for passing data from parent to child components in React."
		},
		{
			id: 6,
			question: "What is the purpose of the key prop when rendering a list of elements?",
			options: [
				"To improve component styling.",
				"To identify which items have changed, are added, or are removed.",
				"To make items clickable.",
				"To store additional data about the element."
			],
			correctAnswer: 1,
			explanation: "Keys help React track elements in a list, optimizing re-rendering by identifying changes efficiently."
		},
		{
			id: 7,
			question: "Which of the following is true about React fragments?",
			options: [
				"They create an extra DOM element.",
				"They are used to group multiple elements without adding a wrapper node.",
				"They improve performance by reducing CSS overhead.",
				"They can only contain two elements."
			],
			correctAnswer: 1,
			explanation: "Fragments (<>...</>) let you group children without adding extra DOM nodes, keeping the HTML clean."
		},
		{
			id: 8,
			question: "What does the useEffect hook do?",
			options: [
				"It performs side effects in functional components.",
				"It optimizes component rendering.",
				"It manages component state.",
				"It creates reusable logic."
			],
			correctAnswer: 0,
			explanation: "useEffect handles side effects like data fetching, subscriptions, or manually changing the DOM in functional components."
		},
		{
			id: 9,
			question: "How can you prevent a component from re-rendering unnecessarily?",
			options: [
				"Using React.forwardRef",
				"Using React.memo",
				"Using React.fragment",
				"Using React.createRef"
			],
			correctAnswer: 1,
			explanation: "React.memo is a higher-order component that memoizes the result, preventing re-renders if props haven’t changed."
		},
		{
			id: 10,
			question: "In React, what is Context used for?",
			options: [
				"To replace Redux in all applications.",
				"To pass data through the component tree without prop drilling.",
				"To manage component state locally.",
				"To handle routing between pages."
			],
			correctAnswer: 1,
			explanation: "Context provides a way to share values (like themes, authentication) between components without passing props manually at every level."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/programming#programming-quiz-01-10"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				{/* This is the content of Programming Quiz. */}
	
				<ProgrammingQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 04, 2025 · by DPSK ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};