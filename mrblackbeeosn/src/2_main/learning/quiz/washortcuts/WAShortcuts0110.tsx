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

export default function WAShortcuts0110(): React.JSX.Element {
	// Danh sách câu hỏi về VS Code cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which shortcut inserts a new line inside a message in WhatsApp Web without sending it?",
			options: [
				"Enter",
				"Ctrl + Enter",
				"Alt + Enter",
				"Shift + Enter"
			],
			correctAnswer: 3,
			explanation: "Pressing Enter alone sends the message immediately, whereas Shift + Enter adds a line break so you can write multi-line messages before sending."
		},
		{
			id: 2,
			question: "On WhatsApp Web (Windows/Linux), what does pressing Ctrl + Alt + Shift + M do?",
			options: [
				"Opens the microphone to record a voice note",
				"Mutes or unmutes the active chat",
				"Marks the selected chat as unread",
				"Minimizes the browser window"
			],
			correctAnswer: 1,
			explanation: "In WhatsApp Web on Windows/Linux, Ctrl + Alt + Shift + M toggles mute notifications for the selected chat."
		},
		{
			id: 3,
			question: "Which keyboard shortcut archives the current chat on WhatsApp Web (Windows/Linux)?",
			options: [
				"Ctrl + Alt + E",
				"Ctrl + Shift + A",
				"Alt + E",
				"Ctrl + A"
			],
			correctAnswer: 0,
			explanation: "Ctrl + Alt + E (or Cmd + Ctrl + E on Mac browser) archives the currently selected chat so it moves out of your main chat list."
		},
		{
			id: 4,
			question: "What is the purpose of Ctrl + Alt + N on WhatsApp Web (Windows/Linux)?",
			options: [
				"Opens a new browser tab",
				"Creates a new group",
				"Starts a new chat",
				"Opens WhatsApp Settings"
			],
			correctAnswer: 2,
			explanation: "Ctrl + Alt + N opens the new chat panel to start a conversation with a contact, while Ctrl + Alt + Shift + N is used to create a new group."
		},
		{
			id: 5,
			question: "Which shortcut pins or unpins a chat in WhatsApp Web (Windows/Linux)?",
			options: [
				"Ctrl + Alt + P",
				"Ctrl + Shift + P",
				"Alt + Shift + P",
				"Ctrl + Alt + Shift + P"
			],
			correctAnswer: 3,
			explanation: "Pressing Ctrl + Alt + Shift + P on Windows/Linux (or Cmd + Ctrl + Shift + P on Mac browser) pins or unpins the selected conversation at the top of your chat list."
		},
		{
			id: 6,
			question: "How can you quickly search your chats on WhatsApp Web (Windows/Linux)?",
			options: [
				"Alt + F4",
				"Ctrl + Alt + /",
				"Shift + /",
				"Ctrl + Alt + S"
			],
			correctAnswer: 1,
			explanation: "Ctrl + Alt + / (or Cmd + Ctrl + / on Mac browser) focuses the search bar so you can quickly search across chats and contacts."
		},
		{
			id: 7,
			question: "Which shortcut marks a chat as unread on WhatsApp Web (Windows/Linux)?",
			options: [
				"Ctrl + Alt + Shift + U",
				"Ctrl + Alt + U",
				"Shift + U",
				"Alt + U"
			],
			correctAnswer: 0,
			explanation: "Using Ctrl + Alt + Shift + U toggles the unread status on a chat, which is helpful when you want to come back and reply to a message later."
		},
		{
			id: 8,
			question: "What does typing a colon (:) followed by letters (such as :smi) do in the message box on WhatsApp Web?",
			options: [
				"Formats the text as monospace code",
				"Mentions a group member",
				"Translates the message automatically",
				"Displays matching emoji suggestions"
			],
			correctAnswer: 3,
			explanation: "Typing : followed by keywords triggers an inline emoji picker, allowing you to navigate suggestions with the arrow keys and insert an emoji with Tab or Enter."
		},
		{
			id: 9,
			question: "Which Markdown-style text formatting shortcut wraps text in tildes (~text~) on WhatsApp Web?",
			options: [
				"Bold",
				"Italic",
				"Strikethrough",
				"Monospace"
			],
			correctAnswer: 2,
			explanation: "Placing tildes around text (~text~) applies strikethrough formatting, whereas asterisks (*text*) apply bold, underscores (_text_) apply italic, and triple backticks (`) apply monospace."
		},
		{
			id: 10,
			question: "Which shortcut opens WhatsApp Settings on WhatsApp Web (Windows/Linux)?",
			options: [
				"Ctrl + Shift + S",
				"Ctrl + Alt + ,",
				"Alt + ,",
				"Ctrl + Alt + O"
			],
			correctAnswer: 1,
			explanation: "Pressing Ctrl + Alt + , (or Cmd + Ctrl + , on Mac browser) opens the Settings menu directly without needing to click the menu icon."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/learning#whatsapp-web-shortcuts-quiz"><mark className="highlight-tertiary-padding-4-8">WhatsApp Web Shortcuts Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">WhatsApp Web Shortcuts 01-10</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental WhatsApp Web Shortcuts</p>
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