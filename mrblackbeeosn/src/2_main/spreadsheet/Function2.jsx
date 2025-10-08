import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function Function2() {

	const postId = "Function2";

	return (<>

	<main className="image image2">
		
		<h4><HashLink smooth to="/spreadsheet#spreadsheet-terms"><mark className="highlight-tertiary-padding-4-8">Spreadsheet</mark></HashLink></h4>
		
		<h2 className="margin-y-50 text-center">What is a function in a spreadsheet?</h2>

		{/* This is the content of Spreadsheet Term. */}

		<p>A <strong>function</strong> in a spreadsheet is like a little helper that can do special tricks with your numbers. Think of it like having a mini calculator built right into your spreadsheet!</p>

		<p className="margin-top-20">Here's how it works:</p>
		
			<ul className="list-square">

				<li><strong>Simple Math</strong>: You can use your spreadsheet to do basic math like adding, subtracting, multiplying, and dividing, just like a regular calculator.</li>

				<li><strong>More Than Simple Math</strong>: But <strong>functions</strong> can do more complicated things! For example, you can use a <strong>function</strong> to find the average of all your toys, or count how many of them are red.</li>

				<li><strong>Special Words</strong>: To use a <strong>function</strong>, you need to write a special word (like "SUM" for adding) followed by instructions for the <strong>function</strong> (like which cells to add up). It's like giving your mini calculator specific instructions on what to do.</li>

				<li><strong>Lots of Helpers</strong>: There are many different <strong>functions</strong> available in a spreadsheet, each with its own special trick. Some <strong>functions</strong> can find the biggest or smallest number, while others can even look up information in other parts of your spreadsheet!</li>

				<li><strong>Making Things Easier</strong>: <strong>Functions</strong> can save you a lot of time and effort. Instead of adding up a long list of numbers yourself, you can use a <strong>function</strong> to do it in one step!</li>

			</ul>
	
		<p className="margin-top-20">So, a <strong>function</strong> in a spreadsheet is like a mini helper that can do cool tricks with your numbers, making it easier and faster to work with your information!</p>

		{/* =============================
					🌾 Think simply!
		============================= */}
		
		<hr className="hr-short"/>

		<h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

		<p>A <strong>function</strong> in a spreadsheet is like a magic button on your checklist! Remember how you use your checklist to keep track of your toys? A spreadsheet is like a giant checklist, but with special buttons that can help you with your toys.</p>
		
			<ul className="list-square">

				<li><strong>Regular Math</strong>: You can add or subtract your toys on the checklist, just like with a regular calculator.</li>

				<li><strong>Magic Buttons for Tricks</strong>: But the spreadsheet has special buttons called <strong>functions</strong> that can do cool tricks! Imagine a button that counts all your toys for you, or another button that finds the biggest toy you have!</li>

				<li><strong>Secret Words</strong>: To use the magic buttons, you need to say a special word like "Count" or "Biggest." It's like a secret code that tells the button what trick to do.</li>

				<li><strong>Lots of Magic Buttons</strong>: There are many magic buttons in a spreadsheet, each with a different trick. Some buttons can add up all your toys, some can find the one you play with the most, and some can even look for specific toys on your list!</li>

				<li><strong>Saving Time</strong>: These magic buttons are super helpful because they save you time! Instead of counting your toys one by one, you can press the "Count" button and it does it for you in a flash!</li>

			</ul>
		
		<p className="margin-top-20">So, <strong>functions</strong> in a spreadsheet are like magic buttons that help you do cool tricks with your information, making it super easy and fun to keep track of all your stuff!</p>

		<div className="viewcounter">
		
			<div className="post-date no-margin">
				<span>July 20, 2024 · by 💎Gem ·</span>
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

	</main>

	</>);
}