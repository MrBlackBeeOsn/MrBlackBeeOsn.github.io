import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function ReactJS(): React.JSX.Element {

  const postId = "React";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/front-end#pront-end-terms"><mark className="highlight-tertiary-padding-4-8">Pront-End</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is React?</h2>

    {/* This is the content of Pront-End Term. */}
    
    <p><strong>React</strong> is a JavaScript library for building user interfaces (UIs). It's an open-source tool developed and maintained by Meta (formerly Facebook) that's used to create dynamic and interactive front-end applications, particularly single-page applications.</p>

    <p className="margin-top-20">Key Concepts</p>

    <h4 className="margin-y-50 text-center">Component-Based Architecture:</h4>
    
    <p><strong>React</strong>'s core philosophy is to build UIs using reusable, self-contained pieces of code called components. A component can be a button, a form, or an entire page. This approach makes it easier to manage and maintain large applications, as you can break down the UI into smaller, logical parts.</p>

    <h4 className="margin-y-50 text-center">Declarative Views:</h4>
    
    <p><strong>React</strong> uses a declarative approach. Instead of telling the application "how" to change the UI, you simply describe "what" the UI should look like for a given state. <strong>React</strong> then efficiently updates and renders the right components when the data changes. This simplifies development and debugging.</p>

    <h4 className="margin-y-50 text-center">Virtual DOM:</h4>
    
    <p><strong>React</strong> uses a Virtual Document Object Model (DOM). The Virtual DOM is a lightweight copy of the actual DOM. When the state of an application changes, <strong>React</strong> first updates the Virtual DOM, compares it to the previous version, and then only updates the real DOM with the specific changes. This process, known as reconciliation, is highly efficient and significantly improves performance.</p>
     
    <h4 className="margin-y-50 text-center">JSX (JavaScript XML):</h4>
    
    <p><strong>React</strong> uses JSX, a syntax extension for JavaScript. JSX allows you to write HTML-like code within your JavaScript files, making it easier to define the structure of your components. It is not required to use <strong>React</strong>, but it's a common practice.</p>
    
    <h4 className="margin-y-50 text-center">State and Props:</h4>
    
    <p>State is an object that holds data that can change over the lifetime of a component. Props (short for properties) are used to pass data from a parent component to a child component. This mechanism enables data flow and communication between components.</p>
    
    <h4 className="margin-y-50 text-center">How It Works</h4>

    <p>A <strong>React</strong> application is essentially a tree of components. When a user interacts with the app (e.g., clicks a button), the component's state is updated. <strong>React</strong> then automatically re-renders the component and any child components that depend on that state, ensuring the UI stays in sync with the data. <strong>React</strong> handles all the complex UI updates behind the scenes, allowing developers to focus on the application's logic.</p>

    <p><strong>React</strong> is widely used by companies of all sizes, from tech giants to startups, due to its speed, scalability, and developer-friendly features. While it is a library and not a full framework, its robust ecosystem of tools and libraries (like Redux for state management and <strong>React</strong> Router for navigation) allows it to function as a powerful platform for building modern web applications.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}
    
    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

    <p><strong>React</strong> is a special toolbox for building websites. It's like having a big box of LEGOs where each LEGO piece is a part of a website, like a button, a picture, or a whole page!</p>

      <ul className="list-square">

        <li><strong>You build with pieces</strong>: Instead of building the whole website all at once, you build it with small pieces. This makes it easier to change things later.</li>

        <li><strong>It's smart</strong>: If you change one tiny piece, <strong>React</strong> is smart enough to only change that one piece on the website, not the whole thing. This makes websites super fast!</li>

        <li><strong>It's for the fun stuff</strong>: <strong>React</strong> is used to build the parts of a website that you can play with and interact with, like a game or a social media page.</li>

      </ul>

    <div className="viewcounter">
    
      <div className="post-date no-margin">
        <span>September 25, 2025 · by 💎Gem ·</span>
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