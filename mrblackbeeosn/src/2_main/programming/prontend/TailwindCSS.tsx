import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function TailwindCSS(): React.JSX.Element {

  const postId = "TailwindCSS";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/front-end#pront-end-terms"><mark className="highlight-tertiary-padding-4-8">Pront-End</mark></HashLink></h4>
      
      <h2 className="margin-y-50 text-center">What is Tailwind CSS?</h2>

      {/* This is the content of Pront-End Term. */}
      
      <p><strong>Tailwind CSS</strong> is a utility-first CSS framework for rapidly building custom user interfaces. Unlike traditional CSS frameworks like Bootstrap that provide pre-designed components (like buttons or cards), <strong>Tailwind CSS</strong> offers a low-level set of utility classes that are directly applied to HTML elements to build unique styles.</p>
      
      <h4 className="margin-y-50 text-center">Core Concept: Utility-First</h4>

      <p>The term "utility-first" means that instead of writing custom CSS rules for every component, you apply numerous pre-defined utility classes directly in your HTML. Each class corresponds to a single, specific CSS property and value.</p>

      <p className="margin-top-20">Example of styling a button in traditional CSS vs. <strong>Tailwind</strong>:</p>

      <h4 className="margin-y-50 text-center">Traditional</h4>

        <ul className="list-square">

          <li>HTML Code: <pre className="pre-border"><code>{`<button class="my-btn">Click</button>`}</code></pre></li>

          <li>CSS Code: <pre className="pre-border"><code>{`.my-btn { padding: 8px 16px; background-color: blue; color: white; border-radius: 4px; }`}</code></pre></li>

        </ul>

      <h4 className="margin-y-50 text-center">Tailwind</h4>

        <ul className="list-square">

          <li>HTML Code: <pre className="pre-border"><code>{`<button class="**py-2 px-4 bg-blue-500 text-white rounded**">Click</button>`}</code></pre></li>

          <li>CSS Code: (No custom CSS needed)</li>

        </ul>

      <p className="margin-top-20">In the <strong>Tailwind</strong> example, each class performs one job:</p>

        <ul className="list-square">

          <li><mark className="highlight-238-padding-0-4 text-border1">py-2</mark>: sets vertical padding (padding-top and padding-bottom).</li>

          <li><mark className="highlight-238-padding-0-4 text-border1">px-4</mark>: sets horizontal padding (padding-left and padding-right).</li>

          <li><mark className="highlight-238-padding-0-4 text-border1">bg-blue-500</mark>: sets the background color to a specific shade of blue.</li>

          <li><mark className="highlight-238-padding-0-4 text-border1">text-white</mark>: sets the text color to white.</li>

          <li><mark className="highlight-238-padding-0-4 text-border1">rounded</mark>: sets the border radius.</li>

        </ul>

      <p className="margin-top-20">Key Features and Advantages</p>

        <ul className="list-square">

          <li><strong>Customization without Constraint</strong>: Because <strong>Tailwind</strong> provides raw utilities rather than opinionated components, developers maintain complete control over the design. It facilitates building unique designs that don't look like they came from a standard template.</li>

          <li><strong>Rapid Development</strong>: Styling elements becomes faster as developers rarely need to switch between HTML and separate CSS files to apply simple styles.</li>

          <li><strong>Responsive Design Built-In</strong>: <strong>Tailwind</strong> uses prefixes like sm:, md:, and lg: to easily apply responsive styles directly in the HTML. For example, lg:text-xl makes the text extra-large only on large screens and up.</li>

          <li><strong>Purging for Production</strong>: When deploying a <strong>Tailwind</strong> project, a tool called PurgeCSS scans the HTML files and removes all unused utility classes from the final CSS bundle. This results in extremely small CSS file sizes, which improves load times.</li>

          <li>Configuration: The entire framework is highly configurable via a JavaScript configuration file (<strong>tailwind</strong>.config.js), allowing developers to customize colors, spacing scales, fonts, and more to match a specific design system.</li>

        </ul>

      <p className="margin-top-20">In essence, <strong>Tailwind CSS</strong> shifts the responsibility of styling from the CSS files to the HTML structure, leading to highly efficient styling and minimal maintenance of custom CSS.</p>

      {/* =============================
            🌾 Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

      <p><strong>Tailwind CSS</strong> is like having a big box of super-fast stickers for your website! 🎨</p>

        <ul className="list-square">

          <li><strong>You don't paint</strong>: Normally, you have to get a big bucket of paint and a big brush to color a wall (that's the website).</li>

          <li><strong>You use stickers</strong>: With <strong>Tailwind</strong>, you just take tiny, special stickers and stick them right onto your toys (the buttons and pictures on the website).</li>

          <li><strong>Each sticker does one thing</strong>: One sticker says "make this corner round," another says "make the background blue," and another says "make the words big."</li>

        </ul>

      <p className="margin-top-20">By sticking these tiny stickers on, you can make your website look exactly how you want it, very quickly, without having to paint anything yourself! 💨</p>

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