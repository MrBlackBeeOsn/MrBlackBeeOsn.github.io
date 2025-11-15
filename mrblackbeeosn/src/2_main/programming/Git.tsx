import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Git(): React.JSX.Element {

  const postId = "Git";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/programming#programming-terms"><mark className="highlight-tertiary-padding-4-8">Programming</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center" id="programming-terms">What is Git?</h1>

      {/* This is the content of Programming Term. */}
      
      <p><strong>Git</strong> is a specific type of version control system used in programming. It's like a really popular brand of that giant box with shelves we talked about earlier (from version control).</p>

      <p className="margin-top-20">Here's how <strong>Git</strong> works:</p>
      
      <h3 className="margin-y-50 text-center">The Most Popular Box:</h3>
      
      <p>Imagine there are many different giant boxes with shelves for saving your drawings (version control systems). <strong>Git</strong> is like the most well-known and widely used brand of these boxes (the most popular version control system).</p>

      <h3 className="margin-y-50 text-center">Keeping Track of Changes:</h3>
      
      <p>Just like any version control system, <strong>Git</strong> tracks changes made to your program code. It remembers different versions as you make edits and saves them like snapshots in time.</p>

      <h3 className="margin-y-50 text-center">More Than Just Saving:</h3>
      
      <p><strong>Git</strong> offers some extra features compared to a simple box. It allows you to:</p>
      
        <ul className="list-square">

          <li><strong>Work with Others</strong>: Multiple programmers can work on the same codebase using <strong>Git</strong> and see each other's changes easily (like multiple people working on the same Lego castle in the giant box).</li>

          <li><strong>Share Your Work</strong>: You can easily share specific versions of your program with others or collaborate on projects remotely (like lending your Lego castle creation to a friend or showing it off online).</li>

        </ul>

      <p className="margin-top-20">Benefits of Using <strong>Git</strong>:</p>
      
        <ul className="list-square">

          <li><strong>Keeps Your Code Safe</strong>: Like any version control system, <strong>Git</strong> protects your code by allowing you to revert to previous versions if needed (safety net in case of errors).</li>

          <li><strong>Collaboration Made Easy</strong>: <strong>Git</strong> makes it simple for programmers to work together on projects (great for team coding projects).</li>

          <li><strong>Open Source Friendly</strong>: <strong>Git</strong> is widely used in open-source projects where code is shared and developed by many people around the world.</li>

        </ul>

      <p>In Summary:</p>

      <p className="margin-top-20 text-indent-whole"><strong>Git</strong> is a powerful version control system specifically designed for programmers. It allows them to track changes, collaborate effectively, and share code easily. While there are other version control systems, <strong>Git</strong> has become the most popular choice due to its features and widespread adoption.</p>

      {/* =============================
            🌾 Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">🌾 Think simply!</h2>

      <p>Imagine you're building the coolest castle ever out of Legos! You built a giant tower, a long wall, and maybe even a moat with a working drawbridge. But what if you accidentally knock over a tower while building something new? Version control, and specifically <strong>Git</strong>, is like a special box that helps you keep track of your castle building journey!</p>

        <ul className="list-square">

          <li><strong>Saving Your Castle Steps</strong>: You built the main tower of your castle first (like writing the first part of your program code). <strong>Git</strong> is like a special box with shelves that lets you save this progress on a shelf (repository) so you can always come back to it later.</li>

          <li><strong>The Box Remembers Everything</strong> (<strong>Almost Like Magic</strong>!): As you keep building your castle, you might add more towers, a gate, or even change the color of some walls (make changes to your program code). <strong>Git</strong> keeps track of all these changes on separate shelves in the box, even your very first tower (all past versions of your code are stored).</li>

          <li><strong>Going Back in Time</strong> (<strong>Sort Of</strong>): Let's say you accidentally knock over a tower you just built (make a mistake in your code). With <strong>Git</strong>, you can't exactly rewind time, but you can take the pieces from the shelf that has the earlier version you saved and rebuild the tower from there (you can revert your program code to an earlier version if needed).</li>

          <li><strong>Sharing and Teamwork</strong>: Imagine you and your friend can both work on the same castle in the same giant box (multiple programmers can work on the same codebase using <strong>Git</strong>). You can see what each other added and avoid accidentally knocking things over (like working on the same program without messing each other's work up). <strong>Git</strong> is especially useful for this!</li>

        </ul>
      
      <h3 className="margin-y-50 text-center">Why Use the Special <strong>Git</strong> Box?</h3>

      <p>There are a few reasons why the <strong>Git</strong> box is important:</p>
      
        <ul className="list-square">

          <li><strong>Safety Net</strong>: If you make a mistake building, you can always go back to an earlier version you saved (fix errors by going back to a good version of your program).</li>

          <li><strong>Building Together</strong>: Multiple people can work on the same castle together (great for team coding projects).</li>

          <li><strong>Sharing Your Castle Creations</strong>: <strong>Git</strong> even lets you share specific versions of your castle creation with others or show it off online (like sharing your program code with others).</li>

        </ul>

      <p className="margin-top-20">So, <strong>Git</strong> in programming is a super cool tool (like a special box) that helps programmers keep track of their work, fix mistakes, and even work together on building awesome things, just like you and your friend building the coolest Lego castle ever!</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 25, 2024 · by 💎Gem ·</span>
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