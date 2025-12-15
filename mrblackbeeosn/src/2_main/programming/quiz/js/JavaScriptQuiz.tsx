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

export default function JavaScriptQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về JavaScript cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What is the correct way to declare a constant variable in JavaScript?",
			options: [
				"variable myConst = 10;",
				"let const myConst = 10;",
				"const myConst = 10;",
				"var myConst = 10;"
			],
			correctAnswer: 2,
			explanation: "The const keyword is the standard and correct way to declare a read-only named constant in modern JavaScript (ES6+). Constants must be initialized when declared, and their value cannot be reassigned later."
		},
		{
			id: 2,
			question: "What will be the output of the following code? console.log(typeof null);",
			options: [
				"\"null\"",
				"\"undefined\"",
				"\"object\"",
				"\"number\""
			],
			correctAnswer: 2,
			explanation: "In JavaScript, the typeof operator returns \"object\" for null. This is a historical quirk in the language's design from its earliest implementation and remains for backward compatibility."
		},
		{
			id: 3,
			question: "Which method is used to add one or more elements to the end of an array and return the new length of the array?",
			options: [
				"shift()",
				"unshift()",
				"push()",
				"pop()"
			],
			correctAnswer: 2,
			explanation: "The push() method adds one or more elements to the end of an array and returns the array's new length."
		},
		{
			id: 4,
			question: "Which of the following is not a primitive data type in JavaScript?",
			options: [
				"string",
				"boolean",
				"object",
				"bigint"
			],
			correctAnswer: 2,
			explanation: "object is a non-primitive (reference) data type used for complex structures. Primitive data types include string, number, bigint, boolean, undefined, symbol, and null."
		},
		{
			id: 5,
			question: "In JavaScript, which comparison operator checks for both value and type equality (strict equality)?",
			options: [
				"==",
				"!=",
				"===",
				"="
			],
			correctAnswer: 2,
			explanation: "The strict equality operator (===) checks if the operands are equal and of the same type, without performing type coercion."
		},
		{
			id: 6,
			question: "What is the purpose of the \"use strict\" directive in JavaScript?",
			options: [
				"To enable asynchronous operations.",
				"To indicate that the code should be compiled before execution.",
				"To enforce stricter parsing and error handling in the code.",
				"To define a new scope for variables."
			],
			correctAnswer: 2,
			explanation: "The \"use strict\" directive enables strict mode, which helps write \"secure\" JavaScript by eliminating silent errors (like using undeclared variables) and introducing better error handling."
		},
		{
			id: 7,
			question: "How do you write an IF statement in JavaScript to execute code if \"i\" is not equal to 5?",
			options: [
				"if (i <> 5)",
				"if (i != 5)",
				"if i not equal 5",
				"if (i =! 5)"
			],
			correctAnswer: 1,
			explanation: "The != operator is the standard JavaScript operator for \"not equal to\" (loose inequality). For strict inequality (checking value and type), you would use !==."
		},
		{
			id: 8,
			question: "Which JavaScript function is used to convert a JSON string into a JavaScript object?",
			options: [
				"JSON.stringify()",
				"JSON.parse()",
				"JSON.toObject()",
				"Object.toJSON()"
			],
			correctAnswer: 1,
			explanation: "JSON.parse() is used to parse a JSON string and construct the JavaScript value or object described by the string. JSON.stringify() converts an object to a JSON string."
		},
		{
			id: 9,
			question: "What keyword is used to define a function that handles asynchronous operations and implicitly returns a Promise?",
			options: [
				"sync",
				"await",
				"callback",
				"async"
			],
			correctAnswer: 3,
			explanation: "The async keyword is used before a function declaration to make it an asynchronous function, which implicitly returns a Promise."
		},
		{
			id: 10,
			question: "Which event is triggered when a user releases a key on the keyboard?",
			options: [
				"onkeypress",
				"onkeydown",
				"onkeyup",
				"onrelease"
			],
			correctAnswer: 2,
			explanation: "The onkeyup event occurs when the user releases a key. onkeydown occurs when a key is pressed down."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/programming#js-basic-practice"><mark className="highlight-tertiary-padding-4-8">JavaScript</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center"></h1>
					<p className="subtitle text-center">Test your knowledge of fundamental JavaScript concepts</p>
				</header>
	
				{/* This is the content of JavaScript Quiz. */}
	
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