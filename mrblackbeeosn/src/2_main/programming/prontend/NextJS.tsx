import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NextJS(): React.JSX.Element {

	const postId = "NextJS";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/front-end#pront-end-terms"><mark className="highlight-tertiary-padding-4-8">Pront-End</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">What is Next.js?</h1>

			{/* This is the content of Pront-End Term. */}
			
			<p><strong>Next.js</strong> is an open-source React framework that enables developers to build server-rendered and static web applications using React. It extends React's capabilities by providing structure, tooling, and essential production-ready features that vanilla React typically lacks.</p>
			
			<p className="margin-top-20">Core Features and Architecture</p>

			<p className="text-indent-whole"><strong>Next.js</strong> is renowned for improving application performance and developer experience through its built-in features:</p>

				<ol>

					<li><strong>Server-Side Rendering</strong> (<strong>SSR</strong>): <strong>Next.js</strong> can render React components on the server and send the fully rendered HTML page to the client's browser. This dramatically improves SEO (Search Engine Optimization) and the initial loading time because the browser receives an immediate, ready-to-display page.</li>

					<li><strong>Static Site Generation</strong> (<strong>SSG</strong>): For pages that don't change often (like blog posts or documentation), <strong>Next.js</strong> can pre-render them into static HTML files at build time. This results in extremely fast loading speeds and reduced server load, as the files can be served directly from a CDN (Content Delivery Network).</li>

					<li><strong>Automatic Code Splitting</strong>: It automatically breaks the JavaScript code into smaller chunks required only for a specific page. This means pages load only the code they need, reducing the initial load time.</li>

					<li><strong>File-System Routing</strong>: Routing is handled automatically based on the file and folder structure within the pages directory. For example, a file named pages/about.js automatically becomes accessible at the /about URL path.</li>

					<li><strong>API Routes</strong>: <strong>Next.js</strong> allows developers to create API endpoints (serverless functions) directly within the project structure (in the pages/api directory). This enables full-stack development within a single framework.</li>

				</ol>

			<p className="margin-top-20">Rendering Strategies</p>
			
			<p className="text-indent-whole"><strong>Next.js</strong> offers flexible data fetching and rendering options:</p>
			
			<h3 className="margin-y-50 text-center">Pre-rendering:</h3>
			
			<p>The process of rendering HTML ahead of time, which can be done in two ways:</p>

				<ul className="list-square">

					<li><strong>Static Site Generation</strong> (<strong>SSG</strong>): HTML is generated at build time (e.g., using getStaticProps).</li>

					<li><strong>Server-Side Rendering</strong> (<strong>SSR</strong>): HTML is generated on each request (e.g., using getServerSideProps).</li>

				</ul>

			<h3 className="margin-y-50 text-center">Client-Side Rendering (CSR):</h3>
			
			<p>After the initial page load, parts of the page or subsequent navigation can be rendered by the browser's JavaScript, similar to a typical React application.</p>

			<p><strong>Next.js</strong> is the preferred choice for modern, high-performance web applications that require fast loading, robust SEO capabilities, and a seamless developer experience.</p>

			{/* =============================
						🌾 Think simply!
			============================= */}
			
			<hr className="hr-short"/>

			<h2 className="margin-bottom-50 text-center">🌾 Think simply!</h2>

			<p><strong>Next.js</strong> is like a super-powered builder that helps make websites using LEGOs (which is what React is). 🚀</p>

				<ul className="list-square">

					<li><strong>It makes websites super-fast</strong>: Imagine waiting for a whole picture to draw itself line by line. <strong>Next.js</strong> is smart and delivers the finished picture all at once, so you see it instantly!</li>

					<li><strong>It organizes the toys</strong>: It makes sure all the website's pieces (the LEGOs) are neatly sorted, so the computer knows exactly where to find the home page, the about page, and the pictures.</li>

					<li><strong>It's like a special path</strong>: When you click a link, <strong>Next.js</strong> quickly makes a smooth path to the next page so you don't have to wait for the computer to figure out where to go.</li>

				</ul>

			<p className="margin-top-20">So, <strong>Next.js</strong> is a clever tool that takes the building blocks (React) and turns them into a super-fast, well-organized website for everyone to use! 🏎️</p>
			
			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>October 16, 2025 · by 💎Gem ·</span>
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