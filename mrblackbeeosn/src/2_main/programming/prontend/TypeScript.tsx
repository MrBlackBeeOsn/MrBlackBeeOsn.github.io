import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function TypeScript(): React.JSX.Element {

  const postId = "TypeScript";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/front-end#pront-end-terms"><mark className="highlight-tertiary-padding-4-8">Pront-End</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is TypeScript?</h1>

      {/* This is the content of Pront-End Term. */}
      
      <p><strong>TypeScript</strong> is an open-source programming language developed and maintained by Microsoft. It is a superset of JavaScript, meaning that any valid JavaScript code is also valid <strong>TypeScript</strong> code. Its primary goal is to add static type definitions to JavaScript, enabling developers to build more robust, scalable, and maintainable applications, especially large-scale ones.</p>

      <p className="margin-top-20">Key Features</p>

      <h4 className="margin-y-50 text-center">Static Typing:</h4>
      
      <p>This is the most defining feature. Unlike standard JavaScript (which is dynamically typed), <strong>TypeScript</strong> allows you to declare variables with explicit types (e.g., string, number, boolean).</p>

        <ul className="list-square">

          <li><strong>Benefit</strong>: This allows errors to be caught during the compilation phase (when the code is being checked) rather than at runtime (when the code is actually running). This prevents common bugs and improves code reliability.</li>

        </ul>

      <h4 className="margin-y-50 text-center">Compilation (Transpilation):</h4>
      
      <p>Since browsers cannot directly execute <strong>TypeScript</strong>, the code must be converted into plain JavaScript. This process is called transpilation, and it is handled by the <strong>TypeScript</strong> compiler. The resulting JavaScript code is then executed by the browser or a runtime environment like Node.js.</p>
      
      <h4 className="margin-y-50 text-center">Object-Oriented Features:</h4>
      
      <p><strong>TypeScript</strong> supports advanced object-oriented programming concepts like interfaces, generics, and access modifiers (public, private), which are not fully present in standard JavaScript.</p>

      <h4 className="margin-y-50 text-center">Tooling and IDE Support:</h4>
      
      <p>Because of the static types, developer tools (like Visual Studio Code) can provide much better features, including:</p>

        <ul className="list-square">

          <li><strong>IntelliSense</strong>/<strong>Autocompletion</strong>: More accurate and helpful code suggestions.</li>

          <li><strong>Refactoring</strong>: Easier and safer ways to restructure code.</li>

          <li><strong>Code Navigation</strong>: Simple jumps to the definition of a function or variable.</li>

        </ul>
      
      <h4 className="margin-y-50 text-center">Superset of JavaScript:</h4>
      
      <p><strong>TypeScript</strong> includes all the features of the latest ECMAScript (JavaScript standard) versions, meaning developers can use modern JavaScript features while also benefiting from <strong>TypeScript</strong>'s type system.</p>
      
      <p>Advantages in Large Applications</p>

      <p className="text-indent-whole">For small projects, the benefits might be minimal, but in large codebases:</p>

        <ol>

          <li><strong>Readability</strong>: The types act as documentation, making the code easier for new developers to understand.</li>

          <li><strong>Refactoring Safety</strong>: When a function signature changes, the compiler immediately flags all other parts of the code that need to be updated, ensuring nothing is missed.</li>

          <li><strong>Scalability</strong>: The structure and constraints provided by static types make it simpler to manage complexity as the application grows.</li>

        </ol>

      <p className="margin-top-20">In essence, <strong>TypeScript</strong> brings the benefits of strongly-typed languages (like Java or C#) to the JavaScript ecosystem, making it the preferred choice for major frameworks and large enterprise projects.</p>

      {/* =============================
            🌾 Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

      <p><strong>TypeScript</strong> is like giving special name tags to all the toys and blocks you use when you build things on the computer. 🏷️</p>

        <ul className="list-square">

          <li><strong>Why name tags</strong>? When you use regular building blocks (that's JavaScript), you don't always know if a block is a car, a doll, or a square.</li>

          <li><strong>TypeScript</strong> makes you put a tag on every block! So, you put a tag that says "car" on the car block, and a tag that says "number" on a number block.</li>

          <li><strong>The magic</strong>: The computer can check all the tags before you start playing. If you accidentally try to build a tower out of a car block, <strong>TypeScript</strong> yells "Wait! That's a car, not a tower block!" This helps you fix mistakes early so your finished program doesn't break later!</li>

        </ul>

      <p className="margin-top-20">So, <strong>TypeScript</strong> is a smart helper that makes building big computer projects safer and less messy! 🛠️ </p>

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