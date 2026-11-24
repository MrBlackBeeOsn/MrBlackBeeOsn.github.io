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

export default function FBShortcuts0110(): React.JSX.Element {
	// Danh sách câu hỏi về VS Code cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which single-key shortcut allows you to scroll down to the next story in your Facebook News Feed?",
			options: [
				"K",
				"J",
				"N",
				"S"
			],
			correctAnswer: 1,
			explanation: "Pressing J scrolls down to the next post in your Facebook News Feed, while pressing K scrolls back up to the previous post."
		},
		{
			id: 2,
			question: "Which key do you press to \"Like\" or \"Unlike\" the currently selected post on Facebook?",
			options: [
				"U",
				"H",
				"L",
				"Spacebar"
			],
			correctAnswer: 2,
			explanation: "Pressing L toggles the \"Like\" reaction on whichever post is currently highlighted or selected in your Facebook feed."
		},
		{
			id: 3,
			question: "What happens when you press the \"P\" key while browsing your Facebook News Feed?",
			options: [
				"It opens your profile page.",
				"It pauses a playing video.",
				"It opens the privacy settings menu.",
				"It opens the \"Create Post\" composer box."
			],
			correctAnswer: 3,
			explanation: "Pressing P immediately triggers the status update/post creation box on Facebook so you can start typing a new post without using your mouse."
		},
		{
			id: 4,
			question: "Which shortcut moves your cursor directly into the Facebook search bar from anywhere on the site?",
			options: [
				"/",
				"?",
				"Ctrl + F",
				"Alt + S"
			],
			correctAnswer: 0,
			explanation: "Pressing the forward slash (/) key immediately focuses your cursor in the main Facebook search bar at the top of the screen."
		},
		{
			id: 5,
			question: "How can you quickly open a list of all available keyboard shortcuts while on Facebook?",
			options: [
				"Press Ctrl + H",
				"Press Alt + K",
				"Press Shift + ?",
				"Press F1"
			],
			correctAnswer: 2,
			explanation: "Pressing Shift + ? (the question mark key) brings up an on-screen overlay displaying all active single-key and modifier shortcuts on Facebook."
		},
		{
			id: 6,
			question: "Which single-key shortcut opens the comment box on a selected Facebook post?",
			options: [
				"M",
				"C",
				"R",
				"Enter"
			],
			correctAnswer: 1,
			explanation: "When a post is highlighted in your Facebook News Feed, pressing C places your cursor directly into the comment field for that post."
		},
		{
			id: 7,
			question: "Which key allows you to share the currently selected post on Facebook?",
			options: [
				"X",
				"F",
				"W",
				"S"
			],
			correctAnswer: 3,
			explanation: "Pressing S opens the Share menu for the currently selected Facebook post, allowing you to share it to your feed, a friend's timeline, or a group."
		},
		{
			id: 8,
			question: "While viewing a photo or video in Facebook's full-screen theater mode, how do you close it and return to your feed?",
			options: [
				"Press Esc",
				"Press Q",
				"Press Backspace",
				"Press B"
			],
			correctAnswer: 0,
			explanation: "Pressing the Esc (Escape) key closes Facebook's full-screen media viewer (theater mode) and returns you to your previous page or News Feed."
		},
		{
			id: 9,
			question: "Which key combination opens a new message window in Facebook Messenger on the web?",
			options: [
				"Alt + N",
				"Ctrl + M",
				"Shift + M",
				"Q"
			],
			correctAnswer: 3,
			explanation: "On the Facebook desktop web interface, pressing Q opens the quick chat/new message pop-up window in Messenger."
		},
		{
			id: 10,
			question: "Which shortcut lets you open the attachment or photo menu on a selected Facebook post to view its media?",
			options: [
				"V",
				"O",
				"I",
				"A"
			],
			correctAnswer: 1,
			explanation: "Pressing O opens the attachment (such as a photo, link, or video) belonging to the currently selected post in your Facebook News Feed."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/learning#facebook-shortcuts-quiz"><mark className="highlight-tertiary-padding-4-8">Facebook Shortcuts Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Facebook Shortcuts 01-10</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Facebook Shortcuts</p>
				</header>
	
				{/* This is the content of VS Code Quiz. */}
	
				<ProgrammingPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>noVEMber 24, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};