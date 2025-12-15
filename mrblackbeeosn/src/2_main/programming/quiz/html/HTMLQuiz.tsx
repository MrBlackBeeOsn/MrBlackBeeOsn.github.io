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

export default function HTMLQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về HTML cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What does HTML stand for?",
			options: [
				"Hyper Trainer Markup Language",
				"Hypertext Markup Language",
				"Hyperlinks and Text Markup Language",
				"Home Tool Markup Language"
			],
			correctAnswer: 1,
			explanation: "HTML is the standard markup language for creating web pages, and its full name is Hypertext Markup Language."
		},
		{
			id: 2,
			question: "Which HTML tag is used to define a hyperlink?",
			options: [
				"<link>",
				"<href>",
				"<a>",
				"<url>"
			],
			correctAnswer: 2,
			explanation: "The <a> tag (anchor) is used to create a hyperlink, and its href attribute specifies the destination address."
		},
		{
			id: 3,
			question: "Which attribute specifies the path to an image in HTML?",
			options: [
				"alt",
				"src",
				"link",
				"href"
			],
			correctAnswer: 1,
			explanation: "The src (source) attribute is required inside the <img> tag to specify the URL or file path of the image file."
		},
		{
			id: 4,
			question: "Which is the largest heading tag in HTML?",
			options: [
				"<h6>",
				"<heading>",
				"<h1>",
				"<head>"
			],
			correctAnswer: 2,
			explanation: "HTML headings are defined with the <h1> to <h6> tags, where <h1> defines the most important (largest) heading."
		},
		{
			id: 5,
			question: "Which HTML element is used for an unordered list?",
			options: [
				"<list>",
				"<ol>",
				"<ul>",
				"<li>"
			],
			correctAnswer: 2,
			explanation: "The <ul> tag (unordered list) is used to create a list of items with bullet points, while <ol> is for an ordered list."
		},
		{
			id: 6,
			question: "What is the correct HTML element for inserting a line break?",
			options: [
				"<lb>",
				"<break>",
				"<br>",
				"<newline>"
			],
			correctAnswer: 2,
			explanation: "The <br> tag is a self-closing tag used to insert a single line break in text or content."
		},
		{
			id: 7,
			question: "What is the correct declaration for HTML5?",
			options: [
				"<DOCTYPE html>",
				"<!DOCTYPE HTML5>",
				"<!DOCTYPE html>",
				"<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">"
			],
			correctAnswer: 2,
			explanation: "The simplified <!DOCTYPE html> is the correct and only required DOCTYPE for all modern HTML5 documents."
		},
		{
			id: 8,
			question: "How do you add a comment in HTML?",
			options: [
				"// This is a comment",
				"``",
				"/* This is a comment */",
				"<comment> This is a comment </comment>"
			],
			correctAnswer: 1,
			explanation: "Comments in HTML start with ``, and are ignored by the browser."
		},
		{
			id: 9,
			question: "Which HTML attribute is used to open a linked document in a new browser tab?",
			options: [
				"new",
				"target=\"_blank\"",
				"href=\"_new\"",
				"rel=\"external\""
			],
			correctAnswer: 1,
			explanation: "Setting the target attribute to _blank within an <a> tag instructs the browser to open the linked document in a new window or tab."
		},
		{
			id: 10,
			question: "Which of these is a semantic element introduced in HTML5?",
			options: [
				"<div>",
				"<span>",
				"<header>",
				"<table>"
			],
			correctAnswer: 2,
			explanation: "The <header> element is a semantic element introduced in HTML5 to clearly define the introductory content of a section or page, unlike non-semantic tags like <div> and <span>."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/programming#html-basic-practice"><mark className="highlight-tertiary-padding-4-8">HTML</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">HTMLQuiz</h1>
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