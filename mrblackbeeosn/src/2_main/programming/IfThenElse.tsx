import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function IfThenElse(): React.JSX.Element {

  const postId = "IfThenElse";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/programming#programming-terms"><mark className="highlight-tertiary-padding-4-8">Programming</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center" id="programming-terms">What is If-Then-Else?</h2>

    {/* This is the content of Programming Term. */}

    <p>If-then-else is a fundamental control flow statement in programming. It allows a program to make decisions and execute different code blocks based on certain conditions. Here's a breakdown:</p>

    <h4 className="margin-y-50 text-center">Core Idea:</h4>
    
    <p><strong>The if-then-else</strong> statement checks a condition. If the condition is true, the program executes a block of code (the "then" part). If the condition is false, the program might optionally execute a different block of code (the "else" part).</p>
    
    <h4 className="margin-y-50 text-center">Structure:</h4>

    <pre className="pre-border"><code>{`
      if (condition) {

        // Code to execute if the condition is true (then part)

      } else {

        // Code to execute if the condition is false (else part) (optional)

      }
    `}</code></pre>

    <h4 className="margin-y-50 text-center">Example:</h4>

    <pre className="pre-border"><code>{`
      age = 10

      if (age >= 13) {

        print("You are a teenager!")

      } else {

        print("You are still a child.")

      }
    `}</code></pre>
    
    <p className="margin-top-20">In this example:</p>
    
      <ul className="list-square">

        <li>The condition checks if  age  is greater than or equal to 13.</li>

        <li>If the condition is true ( age  is 10, which is not greater than or equal to 13), the "else" part is executed, printing "You are still a child."</li>

      </ul>
    
    <h4 className="margin-y-50 text-center">Why Use If-Then-Else?</h4>
    
      <ul className="list-square">

        <li><strong>Making Decisions</strong>: If-then-else statements enable programs to adapt their behavior based on conditions, making them more dynamic and responsive.</li>

        <li><strong>Simplifying Complex Logic</strong>: By breaking down complex logic into smaller conditional statements, code becomes easier to read, understand, and maintain.</li>

      </ul>

    <h4 className="margin-y-50 text-center">Things to Consider:</h4>
    
      <ul className="list-square">

        <li><strong>Nesting</strong>: If-then-else statements can be nested within each other to create more complex decision-making logic. However, excessive nesting can make code harder to follow.</li>

        <li><strong>Alternative Control Flow</strong>: Some programming languages offer additional control flow statements like "else if" for handling multiple conditions beyond just true or false.</li>

      </ul>

    <p className="margin-top-20">In summary, <strong>the if-then-else</strong> statement is a cornerstone of programming, allowing programs to make decisions and execute code conditionally. By understanding this concept, you can build more flexible and interactive programs.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

    <p>Imagine you're playing a game with a friend! You get to decide what happens next, but only if you follow certain rules. If-then-else in programming is like that! It lets the program make choices based on simple rules, like this:</p>
    
      <ul className="list-square">

        <li><strong>The Rule</strong> (<strong>Condition</strong>): This is like the question you ask your friend before deciding what to do next. Maybe the rule is "if it's sunny outside."</li>

        <li><strong>What Happens if the Rule is True</strong> (<strong>Then Part</strong>): If the answer to your question matches the rule, you get to do something fun! In programming, this is the code that runs if the condition is true. Maybe you get to go outside and play if it's sunny.</li>

        <li><strong>What Happens if the Rule is False</strong> (<strong>Else Part</strong>): If the answer doesn't match the rule, you might do something different. In programming, this is optional code that runs only if the condition is false. Maybe you play a board game if it's not sunny.</li>

      </ul>
    
    <p className="margin-top-20">Here's an example:</p>
    
      <ul className="list-square">

        <li><strong>Rule</strong>: Your program has a number stored, like your age (pretend it's 7).</li>

        <li><strong>Question</strong> (<strong>Condition</strong>): Is your age greater than or equal to 5? (7 is greater than or equal to 5, so the answer is yes).</li>

        <li><strong>Then Part</strong>: The program runs code that says "You can ride a bike!" because the rule is true.</li>

        <li><strong>Else Part</strong>: (This part isn't used in this example because the condition was true). The program could have code here that says "You're too young to ride a bike yet" if your age wasn't greater than or equal to 5.</li>

      </ul>

    <p className="margin-top-20">If-then-else is like a little helper that lets programs follow instructions and make choices based on those instructions. The more you learn about these helpers, the more complex and interesting programs you can build!</p>

    <div className="viewcounter">
    
      <div className="post-date no-margin">
        <span>April 27, 2024 · by 💎Gem ·</span>
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