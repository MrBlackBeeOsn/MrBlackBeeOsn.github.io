import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ProgrammingTopic from '@/components/ProgrammingTopic';

export default function BackendIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Programming Topic
    ============================= */}
            
      <ProgrammingTopic/>

    {/* =============================
        3. Back-End Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="back-end-terms">Back-End Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">

          <li><Link to="/back-end/what-is-a-back-end-developer?">Back-End Developer</Link></li>
          
          <li><Link to="/back-end/what-is-github?">GitHub</Link></li>

          <li><Link to="/back-end/what-is-sql?">SQL</Link></li>

          <li><Link to="/back-end/what-is-python?">Python</Link></li>

          <li><Link to="/back-end/what-is-java?">Java</Link></li>

          <li><Link to="/back-end/what-is-php?">PHP</Link></li>

          <li><Link to="/back-end/what-is-node.js?">Node.js</Link></li>

        </ul>

      </div>

    </div>
    
  </main>

  </>);
}