import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ProgrammingTopic from '@/components/ProgrammingTopic';

export default function ProgrammingIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Programming Topic
      ============================= */}
      
        <ProgrammingTopic/>

      {/* =============================
          1. Programming Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="programming-terms">Programming Terms</h3>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/programming/what-is-programming?">Programming</Link></li>
            
            <li><Link to="/programming/what-is-a-programming-language?">Programming language</Link></li>

            <li><Link to="/programming/what-are-good-habits?">Good habits</Link></li>

            <li><Link to="/programming/what-is-if-then-else?">If-Then-Else</Link></li>

            <li><Link to="/programming/what-is-Git?">Git</Link></li>

            <li><Link to="/programming/what-is-a-function?">Function</Link></li>

          </ul>

        </div>

        <div className="sub-box">

          <ul className="list-border1">
            
            <li><Link to="/programming/what-is-a-programmer?">Programmer</Link></li>

            <li><Link to="/programming/what-is-a-software-developer?">Software Developer</Link></li>

            <li><Link to="/programming/what-is-a-full-stack-developer?">Full-Stack Developer</Link></li>

            <li><Link to="/programming/what-is-a-mobile-developer?">Mobile Developer</Link></li>

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}