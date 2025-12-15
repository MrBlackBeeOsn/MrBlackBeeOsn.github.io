// BackendPracticeQuizDPDK.tsx

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

export default function BackEndQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Backend cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What is the primary role of a Back-End Developer?",
			options: [
				"Designing the user interface and user experience (UI/UX)",
				"Writing client-side scripts that run in the browser",
				"Managing server-side logic, databases, and application integration",
				"Optimizing front-end rendering performance"
			],
			correctAnswer: 2,
			explanation: "The primary role of a Back-End Developer is to build and maintain the core logic of a web application on the server side. This includes handling data storage (databases), business logic, application integration, and ensuring performance and security."
		},
		{
			id: 2,
			question: "Which HTTP method is typically used when creating a new resource on the server?",
			options: [
				"GET",
				"PUT",
				"POST",
				"DELETE"
			],
			correctAnswer: 2,
			explanation: "The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server, such as creating a new record in a database."
		},
		{
			id: 3,
			question: "What is an ORM (Object-Relational Mapper) primarily used for?",
			options: [
				"Optimizing CSS and JavaScript files for faster loading",
				"Translating between a programming language's objects and a relational database's tables",
				"Securing passwords through hashing and salting",
				"Managing the relationships between different front-end components"
			],
			correctAnswer: 1,
			explanation: "An ORM abstracts the database access layer, allowing developers to manipulate database records using the object-oriented paradigm of their programming language, thus avoiding writing raw SQL."
		},
		{
			id: 4,
			question: "Which of the following is an example of a NoSQL database?",
			options: [
				"PostgreSQL",
				"SQLite",
				"Microsoft SQL Server",
				"MongoDB"
			],
			correctAnswer: 3,
			explanation: "MongoDB is a popular document database, which is a type of NoSQL database. The other options are all relational databases (RDBMS) that use structured query language (SQL)."
		},
		{
			id: 5,
			question: "What characteristic defines a Stateless architecture in a RESTful API?",
			options: [
				"The server stores user session data after every request",
				"The server maintains a persistent connection with the client",
				"Each request from the client contains all the necessary information for the server to process it",
				"All API endpoints return the exact same data structure"
			],
			correctAnswer: 2,
			explanation: "Statelessness means the server does not rely on previous requests to process the current one. All necessary state and context (like authentication or session tokens) must be included in the request itself."
		},
		{
			id: 6,
			question: "What is the main security risk associated with Cross-Site Scripting (XSS)?",
			options: [
				"An attacker can overload the server with too many requests",
				"An attacker can inject malicious client-side scripts into a website viewed by other users",
				"An attacker can gain unauthorized access to the database using manipulated SQL queries",
				"An attacker can block network traffic, causing a service outage"
			],
			correctAnswer: 1,
			explanation: "XSS attacks involve injecting malicious scripts (typically JavaScript) into a trustworthy website. These scripts are then executed by the victim's browser, often to steal session cookies or other sensitive data."
		},
		{
			id: 7,
			question: "In the context of performance, what is the key benefit of caching on the back-end?",
			options: [
				"It encrypts data transmission for better security",
				"It temporarily stores frequently accessed data to reduce latency and database load",
				"It translates code between different programming languages",
				"It ensures the application is always running on the latest software version"
			],
			correctAnswer: 1,
			explanation: "Caching works by storing copies of data closer to the application layer. This speeds up responses because the application doesn't need to re-fetch or re-calculate the data from the primary database or service."
		},
		{
			id: 8,
			question: "Which technology is a runtime environment that allows JavaScript to be used for server-side development?",
			options: [
				"React",
				"Node.js",
				"TypeScript",
				"jQuery"
			],
			correctAnswer: 1,
			explanation: "Node.js is a cross-platform, open-source runtime environment that executes JavaScript code outside a web browser, making it a popular choice for building back-end services."
		},
		{
			id: 9,
			question: "What is the fundamental difference between Monolithic and Microservice architectures?",
			options: [
				"Monolithic uses only one programming language, while Microservices can use many",
				"Monolithic combines all application components into a single unit, while Microservices separate them into independent services",
				"Monolithic only supports SQL databases, while Microservices only support NoSQL",
				"Monolithic is deployed to the cloud, while Microservices are deployed on-premise"
			],
			correctAnswer: 1,
			explanation: "A Monolithic architecture is a single, unified codebase. A Microservice architecture breaks the application into smaller, loosely coupled services that can be developed, deployed, and scaled independently."
		},
		{
			id: 10,
			question: "What does Asynchronous programming allow a back-end server to do?",
			options: [
				"Execute all operations sequentially, one after the other",
				"Handle multiple requests without blocking the main thread while waiting for I/O operations (like database queries) to complete",
				"Automatically restart the server whenever an error occurs",
				"Force all connected clients to synchronize their internal clocks"
			],
			correctAnswer: 1,
			explanation: "Asynchronous programming allows the server to initiate a long-running task (like a database query or external API call) and immediately move on to process other requests, instead of sitting idle and blocking the execution thread."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/back-end#back-end-basic-practice"><mark className="highlight-tertiary-padding-4-8">Back-End</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Back-End Development Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental backend concepts</p>
				</header>
	
				{/* This is the content of Backend Quiz. */}
	
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