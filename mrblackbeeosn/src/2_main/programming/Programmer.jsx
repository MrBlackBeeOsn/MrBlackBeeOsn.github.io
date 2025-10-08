import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function Programmer() {

  const postId = "";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/programming#programming-terms"><mark className="highlight-tertiary-padding-4-8">Programming</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is a programmer?</h2>

    {/* This is the content of Programming Term. */}
    
    <p>A <strong>programmer</strong>, also known as a software developer, is a professional who writes and tests code to create software programs. They are involved in various stages of the software development lifecycle, from conceptualization and design to deployment and maintenance.</p>
  
    <p className="margin-top-20">Key Responsibilities of a <strong>Programmer</strong></p>
    
      <ul className="list-square">

        <li><strong>Writing Code</strong>: <strong>Programmers</strong> use specific programming languages to write instructions that a computer can understand and execute. This code forms the foundation of all software, from simple mobile apps to complex operating systems.</li>

        <li><strong>Debugging</strong>: A significant part of a <strong>programmer</strong>'s job is debugging, which involves identifying and fixing errors or "bugs" in the code. This ensures the software runs smoothly and as intended.</li>

        <li><strong>Testing</strong>: <strong>Programmers</strong> write and run tests to ensure their code functions correctly under various conditions. They may use unit tests, integration tests, or other methods to verify the code's quality.</li>

        <li><strong>Collaboration</strong>: <strong>Programmers</strong> often work in teams, collaborating with other developers, designers, and project managers. They use version control systems like Git to manage and merge code from different team members.</li>

        <li><strong>Documentation</strong>: They write documentation to explain how their code works, which helps other <strong>programmers</strong> understand and maintain the software. This is crucial for long-term project viability.</li>

        <li><strong>Maintenance</strong>: A <strong>programmer</strong>'s role doesn't end after a project is launched. They are responsible for maintaining the software, which includes updating it with new features, patching security vulnerabilities, and ensuring it remains compatible with new technologies.</li>

      </ul>
    
    <p className="margin-top-20"><strong>Programmers</strong> often specialize in a particular area, such as:</p>

    <p className="text-indent-whole">Specializations in Programming</p>
    
      <ul className="list-square">

        <li><strong>Front-End Development</strong>: Focuses on the user-facing parts of a website or application (UI/UX).</li>

        <li><strong>Back-End Development</strong>: Deals with the server-side logic, databases, and APIs.</li>

        <li><strong>Mobile Development</strong>: Specializes in creating applications for mobile devices like smartphones and tablets.</li>

        <li><strong>Data Science</strong>: Uses programming to analyze and interpret large datasets.</li>

        <li><strong>Embedded Systems</strong>: Develops software for non-computer devices, such as cars or smart appliances.</li>

      </ul>

    <p className="margin-top-20">In short, a <strong>programmer</strong> is a problem-solver who uses logic and code to build the software that powers our digital world. They are the architects of the digital age, turning ideas into functional applications.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}
    
    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

    <p>A <strong>programmer</strong> is like a teacher for a computer! They use a special secret language called code to tell the computer exactly what to do.</p>

    <h4 className="margin-y-50 text-center">Why do they do it?</h4>

    <p>Computers are smart, but they don't know how to do things on their own. A <strong>programmer</strong> gives them a list of instructions, step-by-step, to make a game, a movie, a website, or an app!</p> 

    <h4 className="margin-y-50 text-center">What's the secret language like?</h4>

    <p>It's not like talking or writing. It uses special words and symbols that the computer understands perfectly.</p>

    <h4 className="margin-y-50 text-center">What do they build?</h4>
    
    <p>They build all the fun things you use every day, like your favorite video game, the cartoons you watch on a tablet, or the apps your parents use to order food! They are like builders who use code instead of wood and bricks.</p>

    <div className="viewcounter">
    
      <div className="post-date no-margin">
        <span>August 29, 2025 · by 💎Gem ·</span>
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