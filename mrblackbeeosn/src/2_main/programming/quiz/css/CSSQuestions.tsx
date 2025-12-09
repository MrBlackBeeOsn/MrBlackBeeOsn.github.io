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

export default function CSSQuestions(): React.JSX.Element {
	// Danh sách câu hỏi về CSS cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What does CSS stand for?",
			options: [
				"Creative Style Sheets",
				"Cascading Style Sheets",
				"Computer Style Syntax",
				"Colorful Styling System"
			],
			correctAnswer: 1,
			explanation: "CSS is an acronym for Cascading Style Sheets. It is a stylesheet language used to describe the presentation of a document written in a markup language like HTML."
		},
		{
			id: 2,
			question: "Which HTML tag is used to link an external CSS file to an HTML document?",
			options: [
				"<style>",
				"<script>",
				"<link>",
				"<css>"
			],
			correctAnswer: 2,
			explanation: "The <link> tag is used to establish a relationship between the current document and an external resource. When linking CSS, the attributes are typically rel=\"stylesheet\" and href=\"styles.css\"."
		},
		{
			id: 3,
			question: "Which CSS property is used to change the background color of an element?",
			options: [
				"color",
				"bgcolor",
				"background-color",
				"background"
			],
			correctAnswer: 2,
			explanation: "The background-color property sets the background color of an element. The color property changes the color of the text (foreground). The background property is a shorthand for several background properties, including color."
		},
		{
			id: 4,
			question: "Which CSS selector is used to select elements with a specific ID?",
			options: [
				"# (hash symbol)",
				". (dot symbol)",
				"* (asterisk)",
				": (colon)"
			],
			correctAnswer: 0,
			explanation: "The hash symbol (#) followed by the ID name is the syntax for an ID selector (e.g., #header). An ID must be unique within an HTML document. The dot symbol (.) is used for class selectors."
		},
		{
			id: 5,
			question: "Which property is used to control the space between the element's content and its border?",
			options: [
				"margin",
				"padding",
				"border-spacing",
				"spacing"
			],
			correctAnswer: 1,
			explanation: "padding is the space between the content of an element and its border. margin is the space outside the border, between the element and other elements, as defined in the CSS Box Model."
		},
		{
			id: 6,
			question: "How do you make the text bold using CSS?",
			options: [
				"text-style: bold;",
				"font-weight: bold;",
				"text-decoration: bold;",
				"font-style: bold;"
			],
			correctAnswer: 1,
			explanation: "The font-weight property sets how thick or thin characters in a text should be displayed. Common values include bold, normal, and numerical values like 700."
		},
		{
			id: 7,
			question: "Which unit is relative to the font-size of the root <html> element?",
			options: [
				"px (pixels)",
				"rem (root em)",
				"em (element's font size)",
				"vh (viewport height)"
			],
			correctAnswer: 1,
			explanation: "The rem (root em) unit is relative only to the font-size of the document's root element (<html>). The em unit is relative to the font-size of the parent element."
		},
		{
			id: 8,
			question: "What is the default value of the position property in CSS?",
			options: [
				"absolute",
				"relative",
				"static",
				"fixed"
			],
			correctAnswer: 2,
			explanation: "Elements with position: static; are positioned according to the normal flow of the document. The top, bottom, left, and right properties have no effect on these elements."
		},
		{
			id: 9,
			question: "What is the correct CSS syntax for making all elements with the class highlight blue?",
			options: [
				"highlight {color: blue;}",
				"#highlight {color: blue;}",
				".highlight {color: blue;}",
				"highlight.all {color: blue;}"
			],
			correctAnswer: 2,
			explanation: "The correct syntax for a class selector is the dot symbol (.) followed by the class name (e.g., .highlight). The hash symbol (#) is used for ID selectors."
		},
		{
			id: 10,
			question: "Which value of the display property is used to layout content in a flexible box model (Flexbox)?",
			options: [
				"display: block;",
				"display: inline;",
				"display: grid;",
				"display: flex;"
			],
			correctAnswer: 3,
			explanation: "Setting display: flex; on a container makes it a flex container, enabling all of the flex item properties used for one-dimensional layouts. display: grid; is used for two-dimensional grid layouts."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/programming#css-basic-practice"><mark className="highlight-tertiary-padding-4-8">CSS</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">CSS Multiple-Choice Questions</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental CSS concepts</p>
				</header>
	
				{/* This is the content of CSS Quiz. */}
	
				<ProgrammingPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 09, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};