import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function Function() {

  const postId = "";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/programming#programming-terms"><mark className="highlight-tertiary-padding-4-8">Programming</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center" id="programming-terms">What is a function?</h2>

    {/* This is the content of Programming Term. */}

    <p>In programming, a <strong>function</strong> is like a mini-machine inside a bigger machine. It's a block of code designed to perform a specific task, and you can use it over and over again in different parts of your program.</p>

    <p className="margin-top-20">Here's a breakdown to understand it better:</p>
     
    <h4 className="margin-y-50 text-center">Tools in a Toolbox:</h4>
    
    <p>Imagine a toolbox with different tools for different jobs. You have a hammer for hammering nails, a screwdriver for tightening screws, and a saw for cutting wood. In programming, <strong>functions</strong> are like these tools. Each <strong>function</strong> has a specific purpose, like calculating an area, displaying a message on the screen, or playing a sound effect.</p>

     
    <h4 className="margin-y-50 text-center">Reusability:</h4>
    
    <p>The cool thing about tools is that you can use them in many different projects. <strong>Functions</strong> work the same way. Once you create a <strong>function</strong> to do something specific, you can reuse it throughout your program or even in other programs! This saves you time and effort from writing the same code repeatedly.</p>
    
    <h4 className="margin-y-50 text-center">Following Instructions (Parameters):</h4>
    
    <p>Just like a tool might need specific instructions (like the size of a nail), <strong>functions</strong> can sometimes take inputs called parameters. These parameters provide the <strong>function</strong> with the information it needs to perform its task correctly. For instance, a <strong>function</strong> to calculate area might take length and width as parameters.</p>

    <h4 className="margin-y-50 text-center">Why are Functions Important?</h4>
    
      <ul className="list-square">

        <li><strong>Code Organization</strong>: <strong>Functions</strong> help break down complex programs into smaller, manageable pieces. This makes your code easier to understand, maintain, and modify.</li>

        <li><strong>Reusability</strong>: As mentioned earlier, <strong>functions</strong> save time and effort by allowing you to reuse the same code for different purposes.</li>

        <li><strong>Modularity</strong>: <strong>Functions</strong> promote modularity in programming, where each <strong>function</strong> acts like a self-contained unit. This makes your code more readable and easier to collaborate on with other programmers.</li>

      </ul>

    <p className="margin-top-20">In Summary:</p>

    <p className="text-indent-whole"><strong>Functions</strong> are essential building blocks in programming. They allow you to create reusable mini-programs (<strong>functions</strong>) that perform specific tasks. This makes your code more organized, efficient, and easier to maintain.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

    <p>Imagine you're building a super fun fort out of blankets and pillows! A <strong>function</strong> in programming is like a special trick you can do to build different parts of your fort easily.</p>
    
    <h4 className="margin-y-50 text-center">Making Cool Fort Parts:</h4>
    
    <p>You might have a special trick for folding a sheet into a tunnel or a cool way to drape a blanket over chairs to make a roof. In programming, <strong>functions</strong> are like these tricks. They're small bits of code that do specific things to build different parts of your program, like showing a funny message on the screen or playing a sound effect.</p>
    
    <h4 className="margin-y-50 text-center">Doing the Trick Again and Again:</h4>
    
    <p>The cool thing about your fort-building tricks is that you can use them over and over again in different parts of your fort. <strong>Functions</strong> work the same way! Once you create a <strong>function</strong> to do something, you can use it anywhere in your program whenever you need that thing done. This saves you time from making the same thing over and over again in your fort (program).</p>

    <h4 className="margin-y-50 text-center">Following Instructions (Parameters):</h4>
    
    <p>Maybe your tunnel trick needs a big sheet to work. <strong>Functions</strong> can sometimes take instructions, called parameters, that tell them what to work with. For instance, a <strong>function</strong> to show a message might need the words for the message itself as a parameter.</p>

    <p className="margin-top-20">So, <strong>functions</strong> are like cool tricks you can reuse to build different parts of your program quickly and easily.  They save you time and effort, and make your fort (program) much more fun and interesting!</p>

    <p className="margin-top-50 text-small">April 24, 2024 · by 💎Gem ·</p>

<div className="viewcounter">
    
      <div className="post-date no-margin">
        <span> · by 💎Gem ·</span>
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