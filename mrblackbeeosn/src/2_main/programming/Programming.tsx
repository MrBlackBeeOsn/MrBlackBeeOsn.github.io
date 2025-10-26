import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Programming(): React.JSX.Element {

	const postId = "Programming";

	return (<>

	<main className="image image2">

		<article>

			<h4><HashLink smooth to="/programming#programming-terms"><mark className="highlight-tertiary-padding-4-8">Programming</mark></HashLink></h4>
			
			<h2 className="margin-y-50 text-center">What is programming?</h2>

			{/* This is the content of Programming Term. */}
			
			<p><strong>Programming</strong> is the process of creating a set of instructions that tells a computer how to perform a task. It's the method by which we write, test, and maintain the source code of software applications. This code is written in one or more <strong>programming</strong> languages and serves as a detailed plan for the computer to follow.</p>

			<p>How it Works</p>

			<p className="text-indent-whole">At its core, <strong>programming</strong> involves breaking down a complex problem into a series of smaller, logical steps that a computer can execute. A programmer uses a <strong>programming</strong> language to translate these steps into a format the computer understands. The code is then compiled or interpreted, turning the human-readable instructions into machine code that the computer's processor can run.</p>

			<p className="margin-top-20"><strong>Programming</strong> isn't just about writing code. It includes several key stages:</p>
			
				<ul className="list-square">

					<li><strong>Problem-solving</strong>: Before writing any code, a programmer must understand the problem they are trying to solve and design a logical solution. This often involves creating flowcharts or algorithms.</li>

					<li><strong>Coding</strong>: Writing the actual instructions in a specific <strong>programming</strong> language, following its syntax and rules.</li>

					<li><strong>Testing and Debugging</strong>: After the code is written, it's run to check for errors, known as "bugs." Debugging is the process of finding and fixing these errors to ensure the program works as intended.</li>

					<li><strong>Deployment and Maintenance</strong>: Once the software is ready, it's released to users. Programmers then continue to maintain it, adding new features, fixing new bugs, and ensuring it remains compatible with evolving technology.</li>

				</ul>

			<p className="margin-top-20">Key Concepts</p>
			
				<ul className="list-square">

					<li><strong>Syntax</strong>: The set of rules that defines the combinations of symbols that are considered to be correctly structured statements in that language.</li>

					<li><strong>Algorithms</strong>: A set of well-defined, step-by-step instructions for a computer to follow to solve a specific problem.</li>

					<li><strong>Data Structures</strong>: Ways of organizing and storing data in a computer so that it can be accessed and used efficiently.</li>

					<li><strong>Paradigms</strong>: Different approaches to solving problems using <strong>programming</strong> languages, such as object-oriented <strong>programming</strong> (OOP) or functional <strong>programming</strong>.</li>

				</ul>

			<p className="margin-top-20">In short, <strong>programming</strong> is a blend of logic, problem-solving, and creativity. It's the fundamental skill that powers all software, from mobile apps and video games to operating systems and complex scientific tools.</p>

			{/* =============================
						🌾 Think simply!
			============================= */}
			
			<hr className="hr-short"/>

			<h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>
			
			<p><strong>Programming</strong> is like teaching a robot what to do. You use a special language to give the robot very clear, step-by-step instructions. If you want the robot to sing, you have to tell it exactly how to do it: "open mouth, make a high sound, then make a low sound."</p>

			<p>Programmers write all the instructions for computers, phones, and video games. They're like the brains behind the scenes, telling all our digital tools how to work and play.</p>

			<div className="viewcounter">

				<div className="post-date no-margin">
					<span>August 30, 2025 · by 💎Gem ·</span>
				</div>

				<div className="eye-icon no-margin">
					<EyeIcon />
				</div>

				<div className="post-date no-margin">
					<ViewCounter postId={postId} />
				</div>

				<div className="like-button no-margin">
					<LikeButton postId={postId} />
				</div>

			</div>

		</article>

	</main>

	</>);
}