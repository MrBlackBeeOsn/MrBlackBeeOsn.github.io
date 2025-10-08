import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function JavaScript() {

  const postId = "";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/front-end#pront-end-terms"><mark className="highlight-tertiary-padding-4-8">Pront-End</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center" id="programming-terms">What is JavaScript?</h2>

    {/* This is the content of Back-End Term. */}

    <p><strong>JavaScript</strong>: The Dynamic Language of the Web</p>

    <p><strong>JavaScript</strong> is a high-level programming language that's primarily used to add interactivity and dynamic content to web pages. It's one of the core technologies of the web, alongside <Link to="/front-end/what-is-html?">HTML</Link> and <Link to="/front-end/what-is-css?">CSS</Link>.</p>

    <h4 className="margin-y-50 text-center">How Does JavaScript Work?</h4>
    
      <ul className="list-square">

        <li><strong>Client-side scripting</strong>: <strong>JavaScript</strong> code is typically executed within the user's web browser. This means it runs on the user's device, not on the server.</li>

        <li><strong>Interaction with HTML and CSS</strong>: <strong>JavaScript</strong> can manipulate HTML elements and modify CSS styles to create dynamic effects.</li>

        <li><strong>Event handling</strong>: It allows you to respond to user actions, such as clicks, mouse movements, and form submissions.</li>

        <li><strong>Data validation</strong>: <strong>JavaScript</strong> can validate user input to ensure data is correct and complete.</li>

        <li><strong>AJAX requests</strong>: It enables asynchronous communication with the server, allowing you to load new content without reloading the entire page.</li>

      </ul>

    <p className="margin-top-20">Common Use Cases</p>
    
      <ul className="list-square">

        <li><strong>Interactive elements</strong>: Creating dropdown menus, sliders, modal windows, and other interactive components.</li>

        <li><strong>Animations</strong>: Animating elements on the page to enhance the user experience.</li>

        <li><strong>Dynamic content</strong>: Generating content based on user input or data.</li>

        <li><strong>Web applications</strong>: Building full-featured web applications with <strong>JavaScript</strong> frameworks like React, Angular, or Vue.</li>

        <li><strong>Game development</strong>: Creating web-based games using <strong>JavaScript</strong> libraries like Phaser or PixiJS.</li>

      </ul>

    <p className="margin-top-20">Key Features of <strong>JavaScript</strong></p>
    
      <ul className="list-square">

        <li><strong>Object</strong>-<strong>oriented programming</strong>: <strong>JavaScript</strong> supports object-oriented concepts like objects, classNamees, and inheritance.</li>

        <li><strong>Dynamic typing</strong>: Variables can change their data type during runtime.</li>

        <li><strong>Asynchronous programming</strong>: <strong>JavaScript</strong> allows for non-blocking operations, making it suitable for handling tasks like network requests.</li>

        <li><strong>Cross</strong>-<strong>platform compatibility</strong>: <strong>JavaScript</strong> runs in most modern web browsers, ensuring wide compatibility.</li>

      </ul>

    <p className="margin-top-20">In essence, <strong>JavaScript</strong> is the language that brings web pages to life. It adds interactivity, responsiveness, and dynamic content, making the web a more engaging and interactive experience.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}
    
    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>
    
    <p><strong>JavaScript</strong> is like a magic wand for your computer!</p>

    <p>Imagine you have a book with a picture of a castle. With <strong>JavaScript</strong>, you can make the castle move, change colors, or even grow bigger! It's like adding magic to your computer screen.</p>
    
      <ul className="list-square">

        <li><strong>It makes things happen</strong>: <strong>JavaScript</strong> can make buttons do things, pictures move, and even games work.</li>

        <li><strong>It</strong>'<strong>s like a secret language</strong>: <strong>JavaScript</strong> is a special language that computers understand. It helps the computer know what to do when you click or type on your screen.</li>

        <li><strong>It</strong>'<strong>s like a magician</strong>'<strong>s trick</strong>: <strong>JavaScript</strong> can make your website look like it's doing something cool and exciting, even though it's just a computer following instructions!</li>

      </ul>

    <p className="margin-top-20">So, next time you see a cool website with moving pictures or buttons that do something, remember that <strong>JavaScript</strong> is the magic behind it all!</p>

    <div className="viewcounter">
    
      <div className="post-date no-margin">
        <span>April 15, 2024 · by 💎Gem ·</span>
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