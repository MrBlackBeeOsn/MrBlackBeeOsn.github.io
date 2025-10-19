import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ProgrammingTopic from '@/components/ProgrammingTopic';

export default function ProgrammingIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Programming Topic
    ============================= */}
    
      <ProgrammingTopic/>

    {/* =============================
        1. Programming Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="learning-terms">Learning Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">

          <li><Link to="/learning/what-is-component-learning?">Component Learning</Link></li>

          <li><Link to="/learning/what-is-project-based-learning?">Project-based learning</Link> (LPB)</li>

          <li><Link to="/learning/what-is-micro-learning?">Micro-learning</Link></li>

        </ul>

      </div>

    </div>
    
  </main>

  </>);
}