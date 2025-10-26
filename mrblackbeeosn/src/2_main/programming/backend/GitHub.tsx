import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function GitHub(): React.JSX.Element {

  const postId = "GitHub";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/back-end#back-end-terms"><mark className="highlight-tertiary-padding-4-8">Back-End</mark></HashLink></h4>
      
      <h2 className="margin-y-50 text-center" id="programming-terms">What is GitHub?</h2>

      {/* This is the content of Programming Term. */}

      <p><strong>GitHub</strong> is like a giant online storage space specifically designed for programmers to store and share their code projects, kind of like a website for Lego creations. Here's how it works:</p>

      <h4 className="margin-y-50 text-center">Storing Your Lego Sets (Code Projects):</h4>
      
      <p>Imagine you've built an awesome castle and a cool spaceship out of Legos (written different program codes). <strong>GitHub</strong> is like a giant online storage space where you can keep these creations (store your code projects).</p>

      <h4 className="margin-y-50 text-center">Not Just Storage, It's Shareable!</h4>
      
      <p>Unlike a simple box, <strong>GitHub</strong> lets you share your Lego creations with others or even the whole world (share your code projects publicly or privately). This allows people to see your work, learn from it, or even use it in their own projects (like open-source Legos!).</p>

      <h4 className="margin-y-50 text-center">Version Control with Git:</h4>
      
      <p>Remember the special Git box with shelves (version control system) we talked about earlier? <strong>GitHub</strong> actually uses Git "under the hood" to keep track of different versions of your projects (tracks changes in your code). This means you can revert to older versions if needed and collaborate easily with others.</p>

      <h4 className="margin-y-50 text-center">More Than Just Legos (Code):</h4>
      
      <p><strong>GitHub</strong> isn't just for finished projects. Programmers can also use it to share ideas, work on projects together, and discuss code. It's like a social network for programmers to collaborate and build cool things together!</p>

      <p className="margin-top-20">Benefits of Using <strong>GitHub</strong>:</p>
      
        <ul className="list-square">

          <li><strong>Share Your Work</strong>: Showcase your programming skills and let others see your awesome code projects.</li>

          <li><strong>Learn from Others</strong>: Explore and learn from the code of other programmers around the world.</li>

          <li><strong>Collaboration Made Easy</strong>: Work on projects with other programmers, even if they're far away (like a team building Legos together online).</li>

          <li><strong>Version Control Included</strong>: <strong>GitHub</strong> uses Git for version control, keeping your code safe and organized.</li>

        </ul>

      <p className="margin-top-20">In Summary:</p>

      <p className="text-indent-whole"><strong>GitHub</strong> is a popular online platform specifically designed for programmers. It provides a space to store, share, and collaborate on code projects. By using <strong>GitHub</strong>, programmers can showcase their work, learn from others, and work together to build amazing things!</p>

      {/* =============================
            🌾 Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

      <p>Imagine you're a master Lego builder, and you've created the coolest things ever - a giant castle and a rocket ship that can fly to the moon! <strong>GitHub</strong> is like a giant online world, just for awesome Lego creations, built by kids from all over the world!</p>

      <h4 className="margin-y-50 text-center">Storing Your Lego Sets (Code Projects):</h4>
      
      <p>You built a fantastic castle and a rocket ship out of Legos (written different computer programs). <strong>GitHub</strong> is like a giant online space where you can keep your Lego sets safe and show them off (store your code projects).</p>

      <h4 className="margin-y-50 text-center">Sharing with Friends (or the World!):</h4>
      
      <p>Unlike a regular box, <strong>GitHub</strong> lets you share your Lego creations with your friends, or even with the whole world (share your code projects publicly or privately). This way, other kids can see your amazing builds, learn from them, or even use some of your ideas in their own Lego creations (like open-source Legos!).</p>

      <h4 className="margin-y-50 text-center">Keeping Track of Changes (Version Control):</h4>
      
      <p>Remember the special box with shelves we talked about earlier (version control system)? <strong>GitHub</strong> uses something similar to keep track of different versions of your Lego sets, like how your castle looked before you added the giant drawbridge (tracks changes in your code). This means you can go back to an earlier version if you accidentally break something while building.</p>

      <h4 className="margin-y-50 text-center">More Than Just Finished Legos (Code):</h4>
      
      <p><strong>GitHub</strong> isn't just for showing off finished Lego sets. Builders can also use it to share ideas for cool new creations, work on projects together with other kids online, and even talk about how to build the best things ever! It's like a giant online club for Lego lovers to share ideas and build amazing things together!</p>

      <h4 className="margin-y-50 text-center">Why Use GitHub?</h4>
      
        <ul className="list-square">

          <li><strong>Show Off Your Creations</strong>: Let everyone see your awesome Lego sets and how you built them (showcase your programming skills).</li>

          <li><strong>Learn from Others</strong>: See what other kids are building all over the world and get inspired to create your own amazing things (learn from other programmers).</li>

          <li><strong>Building Together Online</strong>: Team up with other Lego builders to create something even cooler, even if they live far away (work on projects with other programmers).</li>

          <li><strong>Keeping Track of Your Builds</strong>: <strong>GitHub</strong> remembers all the different versions of your creations, so you can always go back to an earlier one if needed (version control keeps your code safe and organized).</li>

        </ul>

      <p className="margin-top-20">So, <strong>GitHub</strong> in programming is like a giant online world where programmers can store, share, and work together on their Lego sets (code projects), just like you sharing your amazing Lego creations with other builder friends from all over the world!</p>

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