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

export default function WindowsShortcuts0110(): React.JSX.Element {
	// Danh sách câu hỏi về VS Code cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which keyboard shortcut opens File Explorer in Windows?",
			options: [
				"Windows + R",
				"Windows + S",
				"Windows + E",
				"Windows + D"
			],
			correctAnswer: 2,
			explanation: "Windows + E launches File Explorer directly. Windows + R opens the Run dialog, Windows + D shows or hides the desktop, and Windows + S opens Windows Search."
		},
		{
			id: 2,
			question: "What does pressing Windows + L do in Windows?",
			options: [
				"Opens the Ease of Access / Accessibility settings",
				"Locks your PC or switches accounts",
				"Launches the Snipping Tool overlay",
				"Minimizes all windows except the active one"
			],
			correctAnswer: 1,
			explanation: "Windows + L immediately locks your workstation so you can step away securely. Windows + Home minimizes all inactive windows, and Windows + Shift + S starts screen snipping."
		},
		{
			id: 3,
			question: "Which shortcut cycles through open apps using Task View in Windows?",
			options: [
				"Alt + Tab",
				"Ctrl + Shift + Esc",
				"Windows + A",
				"Windows + Tab"
			],
			correctAnswer: 3,
			explanation: "Windows + Tab opens Task View, allowing you to switch between open windows and manage virtual desktops. Alt + Tab also switches between open windows in a compact switcher, while Ctrl + Shift + Esc opens Task Manager."
		},
		{
			id: 4,
			question: "How can you quickly open Task Manager in Windows without pressing Ctrl + Alt + Delete first?",
			options: [
				"Ctrl + Shift + Esc",
				"Ctrl + Alt + Tab",
				"Windows + X",
				"Alt + F4"
			],
			correctAnswer: 0,
			explanation: "Ctrl + Shift + Esc opens Task Manager directly in a single step. Alt + F4 closes the active window or opens the shut-down dialog on the desktop, and Windows + X opens the Quick Link menu."
		},
		{
			id: 5,
			question: "Which shortcut opens your Clipboard history in Windows (when enabled)?",
			options: [
				"Ctrl + Shift + V",
				"Windows + C",
				"Windows + V",
				"Ctrl + Alt + V"
			],
			correctAnswer: 2,
			explanation: "Windows + V opens the Clipboard history panel so you can view and paste previously copied items (and pin favorites). Standard pasting is Ctrl + V."
		},
		{
			id: 6,
			question: "What is the shortcut to snap the active window to the left half of the screen in Windows?",
			options: [
				"Alt + Left Arrow",
				"Windows + Left Arrow",
				"Ctrl + Left Arrow",
				"Shift + Left Arrow"
			],
			correctAnswer: 1,
			explanation: "Windows + Left Arrow snaps the active window to the left half of the display (and Windows + Right Arrow snaps it to the right). Alt + Left Arrow typically navigates back in browsers or File Explorer."
		},
		{
			id: 7,
			question: "Which shortcut creates a new virtual desktop in Windows?",
			options: [
				"Windows + Ctrl + F4",
				"Windows + Shift + D",
				"Ctrl + Alt + D",
				"Windows + Ctrl + D"
			],
			correctAnswer: 3,
			explanation: "Windows + Ctrl + D creates a new virtual desktop. To close the current virtual desktop, use Windows + Ctrl + F4, and to switch between them, use Windows + Ctrl + Left/Right Arrow."
		},
		{
			id: 8,
			question: "What does Windows + Shift + S do in Windows?",
			options: [
				"Saves the current document",
				"Puts the computer to sleep",
				"Opens Snipping Tool to capture a specific area of the screen",
				"Opens System Settings"
			],
			correctAnswer: 2,
			explanation: "Windows + Shift + S dims the screen and opens the snipping toolbar so you can capture a rectangular area, freeform shape, window, or full screen to the clipboard."
		},
		{
			id: 9,
			question: "Which shortcut opens the Quick Link (power user) menu near the Start button in Windows?",
			options: [
				"Windows + X",
				"Windows + M",
				"Windows + K",
				"Ctrl + Shift + N"
			],
			correctAnswer: 0,
			explanation: "Windows + X opens the Quick Link menu with fast access to Device Manager, Disk Management, Terminal/PowerShell, Settings, and power options. Ctrl + Shift + N creates a new folder in File Explorer."
		},
		{
			id: 10,
			question: "What does pressing Ctrl + Shift + T typically do in a web browser or File Explorer in Windows?",
			options: [
				"Opens a new Incognito/InPrivate window",
				"Toggles full-screen mode",
				"Opens the Downloads panel",
				"Reopens the last closed tab or window"
			],
			correctAnswer: 3,
			explanation: "Ctrl + Shift + T reopens the most recently closed tab (or window) in major browsers like Edge, Chrome, and Firefox, and can also restore recently closed File Explorer tabs in modern Windows builds."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/learning#windows-shortcuts-quiz"><mark className="highlight-tertiary-padding-4-8">Windows Shortcuts Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Windows Shortcuts 01-10</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Windows Shortcuts</p>
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