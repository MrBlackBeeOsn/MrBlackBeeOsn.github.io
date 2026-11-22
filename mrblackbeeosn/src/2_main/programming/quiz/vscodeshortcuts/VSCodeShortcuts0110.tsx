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
			question: "Which shortcut opens the Command Palette in VS Code?",
			options: [
				"Ctrl + Space",
				"Ctrl + P",
				"Ctrl + Shift + F",
				"Ctrl + Shift + P (or F1)"
			],
			correctAnswer: 3,
			explanation: "Ctrl + Shift + P (or F1, and Cmd + Shift + P on macOS) opens the Command Palette, allowing you to search for and run almost any command in VS Code. Ctrl + P opens the Go to File quick-open menu, and Ctrl + Shift + F opens global search across files."
		},
		{
			id: 2,
			question: "What does pressing Ctrl + P (without Shift) do in VS Code?",
			options: [
				"Opens Go to File for quick file navigation",
				"Opens the Settings editor",
				"Prints the current file",
				"Toggles the integrated terminal"
			],
			correctAnswer: 0,
			explanation: "Ctrl + P (Cmd + P on macOS) opens a search bar to quickly find and open files in your workspace by name. You can also type > inside it to switch to commands, : to jump to a line number, or @ to jump to a symbol."
		},
		{
			id: 3,
			question: "Which shortcut toggles the Integrated Terminal open and closed?",
			options: [
				"Ctrl + Shift + T",
				"Alt + F12",
				"Ctrl + `  (backtick)",
				"Ctrl + Alt + T"
			],
			correctAnswer: 2,
			explanation: "Pressing Ctrl + `  (Cmd +  on macOS) toggles the integrated terminal panel.Ctrl + Shift + Treopens the last closed editor tab, andAlt + F12` peeks at a symbol's definition."
		},
		{
			id: 4,
			question: "How do you comment or uncomment a selected line (or block of lines) in VS Code?",
			options: [
				"Ctrl + Shift + C",
				"Ctrl + /",
				"Alt + /",
				"Ctrl + K"
			],
			correctAnswer: 1,
			explanation: "Ctrl + / (Cmd + / on macOS) toggles line comments for the current line or all selected lines using the appropriate comment syntax for the active language."
		},
		{
			id: 5,
			question: "Which shortcut selects all occurrences of the current word or selection in the active file for multi-cursor editing?",
			options: [
				"Ctrl + D",
				"Alt + Click",
				"Ctrl + Alt + Down",
				"Ctrl + Shift + L"
			],
			correctAnswer: 3,
			explanation: "Ctrl + Shift + L (Cmd + Shift + L on macOS) places a cursor at every match of the current selection in the file. By contrast, Ctrl + D (Cmd + D on macOS) selects only the next matching occurrence one at a time."
		},
		{
			id: 6,
			question: "What does Shift + Alt + F (or Ctrl + Shift + I on Linux) do in VS Code?",
			options: [
				"Finds and replaces text in the current file",
				"Folds all code blocks",
				"Formats the entire active document",
				"Opens the Extensions view"
			],
			correctAnswer: 2,
			explanation: "Shift + Alt + F on Windows (Shift + Option + F on macOS) invokes your configured formatter to format the entire active file. To format only selected lines, use Ctrl + K followed by Ctrl + F."
		},
		{
			id: 7,
			question: "Which shortcut moves the current line (or selected lines) up or down?",
			options: [
				"Alt + Up / Alt + Down",
				"Ctrl + Up / Ctrl + Down",
				"Shift + Up / Shift + Down",
				"Ctrl + Shift + Up / Ctrl + Shift + Down"
			],
			correctAnswer: 0,
			explanation: "Alt + Up and Alt + Down (Option + Up / Option + Down on macOS) move the current line or selection up or down by one line. Adding Shift (Shift + Alt + Up / Down) copies (duplicates) the line instead of moving it."
		},
		{
			id: 8,
			question: "Which shortcut deletes the entire current line without needing to select it first?",
			options: [
				"Ctrl + X (with nothing selected)",
				"Ctrl + Shift + K",
				"Ctrl + Backspace",
				"Shift + Delete"
			],
			correctAnswer: 1,
			explanation: "Ctrl + Shift + K (Cmd + Shift + K on macOS) deletes the entire line containing the cursor immediately without placing it into the clipboard. (Note: Ctrl + X with nothing selected cuts the line into your clipboard.)"
		},
		{
			id: 9,
			question: "How do you jump directly to a specific line number in the active file?",
			options: [
				"F12",
				"Ctrl + L",
				"Ctrl + J",
				"Ctrl + G"
			],
			correctAnswer: 3,
			explanation: "Ctrl + G (Ctrl + G on macOS as well) opens the Go to Line input box where you can type a line number and press Enter to jump straight to it."
		},
		{
			id: 10,
			question: "Which shortcut toggles Word Wrap on and off in the editor?",
			options: [
				"Alt + W",
				"Ctrl + Alt + W",
				"Alt + Z",
				"Shift + Alt + Z"
			],
			correctAnswer: 2,
			explanation: "Alt + Z (Option + Z on macOS) toggles word wrapping so long lines wrap visually within the viewport width instead of requiring horizontal scrolling."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/programming#vs-code-shortcuts-quiz"><mark className="highlight-tertiary-padding-4-8">VS Code Shortcuts Quiz</mark></HashLink></h4>

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