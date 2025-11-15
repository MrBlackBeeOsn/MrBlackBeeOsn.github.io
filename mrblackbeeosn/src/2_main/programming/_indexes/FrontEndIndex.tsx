import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ProgrammingTopic from '@/components/topic/ProgrammingTopic';
import SearchComponent from '@/components/search/SearchComponent';

export default function FrontEndIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Programming Topic
      ============================= */}
              
        <ProgrammingTopic/>

      {/* =============================
          2. Pront-End Terms
      ============================= */}

      <h3 className="margin-y-50 text-center" id="pront-end-terms">Pront-End Terms</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
                          
      </div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">
            
            <li><Link to="/front-end/what-is-html?">HTML</Link></li>

            <li><Link to="/front-end/what-is-css?">CSS</Link></li>

            <li><Link to="/front-end/what-is-javascript?">JavaScript</Link></li>

            <li><Link to="/front-end/what-is-typescript?">TypeScript</Link></li>

            <li><Link to="/front-end/what-is-react?">React</Link></li>

            <li><Link to="/front-end/what-is-nextjs?">Next.js</Link></li>

            <li><Link to="/front-end/what-is-tailwindcss?">Tailwind CSS</Link></li>

          </ul>

        </div>

        <div className="sub-box">

          <ul className="list-border1">
        
            <li><Link to="/front-end/what-is-a-front-end-developer?">Front-End Developer</Link></li>

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}