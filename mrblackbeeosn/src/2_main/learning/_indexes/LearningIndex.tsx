import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ProgrammingTopic from '@/components/topic/ProgrammingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

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
      
      <h3 className="margin-y-50 text-center" id="learning-terms">Learning Search</h3>

      <div className="table-search margin-bottom-50">
                              
        <SearchComponent />
        
        <VideoSearch />
                          
      </div>

      
      <div className="vocabulary-container">
      
        {/* =============================
              Windows Shortcuts Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="windows-shortcuts-quiz"><mark className="highlight-secondary-padding-2-4">Windows Shortcuts Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/learning/windows-shortcuts-01-10">Windows Shortcuts 01-10</Link>
              </div>
            </li>
            
          </ul>

        </details>

        {/* =============================
            WhatsApp Web Shortcuts Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="whatsapp-web-shortcuts-quiz"><mark className="highlight-secondary-padding-2-4">WhatsApp Web Shortcuts Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/learning/whatsapp-web-shortcuts-01-10">WhatsApp Web Shortcuts 01-10</Link>
              </div>
            </li>
            
          </ul>

        </details>

        {/* =============================
            Facebook Shortcuts Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="facebook-shortcuts-quiz"><mark className="highlight-secondary-padding-2-4">Facebook Shortcuts Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/learning/facebook-shortcuts-01-10">Facebook Shortcuts 01-10</Link>
              </div>
            </li>
            
          </ul>

        </details>



      </div>

      <div className="flex-container margin-top-20">

        <div className="sub-box">
        
          {/* =============================
              Learning Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/learning/what-is-component-learning?">Component Learning</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/learning/what-is-project-based-learning?">Project-based learning</Link>&nbsp;(LPB)
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/learning/what-is-micro-learning?">Micro-learning</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">
        
          {/* =============================
              Learning
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/learning/toxic-digital-habits-to-quit?">Toxic Digital Habits To Quit</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}