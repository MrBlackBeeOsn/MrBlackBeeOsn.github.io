import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ProgrammingTopic from '@/components/topic/ProgrammingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

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
        
        <VideoSearch />
                          
      </div>

      <div className="vocabulary-container">
            
        {/* =============================
              Front-End Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="front-end-basic-practice"><mark className="highlight-secondary-padding-2-4">Front-End</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/front-end/front-end-quiz">Front-End Development</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

      </div>

      <div className="flex-container margin-top-20">

        <div className="sub-box">
        
          {/* =============================
              Front-End Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/front-end/what-is-html?">HTML</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/front-end/what-is-css?">CSS</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/front-end/what-is-javascript?">JavaScript</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/front-end/what-is-typescript?">TypeScript</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/front-end/what-is-react?">React</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/front-end/what-is-nextjs?">Next.js</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/front-end/what-is-tailwindcss?">Tailwind CSS</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">
        
          {/* =============================
              Front-End Developer
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/front-end/what-is-a-front-end-developer?">Front-End Developer</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}