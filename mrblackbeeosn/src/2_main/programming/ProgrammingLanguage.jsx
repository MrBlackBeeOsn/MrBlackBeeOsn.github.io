import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function ProgrammingLanguage() {

  const postId = "";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/programming#programming-terms"><mark className="highlight-tertiary-padding-4-8">Programming</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is a programming language?</h2>

    {/* This is the content of Programming Term. */}

    <p>A <strong>programming language</strong> is a special set of instructions that people use to tell computers what to do. It's like a secret code that computers can understand.</p>

    <p className="margin-top-20">Here's a breakdown to make it easier to understand:</p>

    <h4 className="margin-y-50 text-center">Why do we need programming languages?</h4>
    
      <ul className="list-square">

        <li><strong>Clear instructions</strong>: Imagine you want your friend to help you build a Lego castle. You can't just say "build it!" You need to give clear instructions like "put the big red block on the bottom." <strong>Programming languages</strong> help people give computers clear instructions.</li>

        <li><strong>Makes computers work</strong>: Computers are good at following instructions, but they don't understand regular words like we do. <strong>Programming languages</strong> translate our instructions into a code the computer can understand.</li>

      </ul>

    <h4 className="margin-y-50 text-center">What are programming languages made of?</h4>
    
      <ul className="list-square">

        <li><strong>Words</strong> (<strong>Keywords</strong>): These are special words that have a specific meaning in the <strong>programming language</strong>, like "if," "for," or "while." They act like signposts, telling the computer what to do next.</li>

        <li><strong>Instructions</strong> (<strong>Statements</strong>): These are combinations of words and values that tell the computer to perform a specific action, like "show a picture on the screen" or "add two numbers together."</li>

        <li><strong>Values</strong> (<strong>Data</strong>): This is the information the computer works with, like numbers, text, or pictures.</li>

      </ul>

    <p className="margin-top-20">Types of <strong>programming languages</strong>:</p>
    
      <ul className="list-square">

        <li><strong>Simple</strong> (<strong>like Scratch</strong>): These are easy to learn and use, like using building blocks with big, colorful pictures. They're great for beginners to get started.</li>

        <li><strong>More complex</strong> (<strong>like Python or Java</strong>): These offer more features and power, like having more building blocks and special tools. They're used for creating complex programs like games, websites, and even apps.</li>

      </ul>

    <p className="margin-top-20">Learning <strong>programming languages</strong>:</p>
    
      <ul className="list-square">

        <li>There are many resources available online and in libraries to teach you <strong>programming languages</strong>.</li>

        <li>Some websites even have games that make learning code fun!</li>

      </ul>

    <p className="margin-top-20">By learning a <strong>programming language</strong>, you can tell computers what to do and create amazing things, just like building a cool Lego castle with your friend!</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}
    
    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

    <p>Have you ever given instructions to your favorite toy robot? A <strong>programming language</strong> is kind of like a special way to talk to computers so they know what to do, just like you give instructions to your robot!</p>

    <h4 className="margin-y-50 text-center">Why do we need special talk?</h4>
    
    <p>Imagine you can't talk to your robot with words, you can only give simple commands. A <strong>programming language</strong> lets you give clear instructions to the computer, even though it doesn't understand regular words like us. It's like a secret code that computers can understand!</p>

    <h4 className="margin-y-50 text-center">What's in this secret code?</h4>
    
      <ul className="list-square">

        <li><strong>Special Words</strong> (<strong>Keywords</strong>): These are like secret code words that tell the computer what to do next. Imagine saying "turn left" or "play music" to your robot with special hand signals. Keywords in code are a bit like that!</li>

        <li><strong>Instructions</strong> (<strong>Statements</strong>): These are like complete sentences in the secret code, telling the computer to do something specific. You might say "show a picture of a cat" or "count to 10" in the code.</li>

        <li><strong>Things to Work With</strong> (<strong>Values</strong>): This is the information the computer uses to follow your instructions. It could be numbers (like how many times to count), words (like "cat"), or even pictures!</li>

      </ul>

    <p className="margin-top-20">Types of Secret Code (<strong>Programming Languages</strong>):</p>
    
      <ul className="list-square">

        <li><strong>Easy to Learn</strong> (<strong>like Scratch</strong>): Imagine a robot with big buttons for simple commands. There are <strong>programming languages</strong> like Scratch that are easy to use, kind of like those buttons! They're great for beginners to learn how to code.</li>

        <li><strong>Trickier to Learn</strong> (<strong>like Python or Java</strong>): These are more complex languages, like having a robot with lots of buttons and switches. They can do more things, but they take more time to learn. They're used to build all sorts of cool things like games and websites!</li>

      </ul>

    <p className="margin-top-20">Learning the Secret Code:</p>
   
    <p className="indent-me">Just like you can learn how to give your robot more complex commands, you can learn <strong>programming languages</strong> too! There are games, websites, and even books that can teach you how to code in a fun way.</p>

    <p>By learning a <strong>programming language</strong>, you can become a computer whisperer, giving them instructions to create amazing things, just like building a cool robot adventure with your special code!</p>

    <p className="margin-top-50 text-small">June 20, 2024 · by 💎Gem ·</p>

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