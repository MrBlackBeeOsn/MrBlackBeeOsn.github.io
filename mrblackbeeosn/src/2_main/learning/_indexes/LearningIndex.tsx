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
      
      <h3 className="margin-y-50 text-center" id="learning-terms">Learning Terms</h3>

      <div className="table-search margin-bottom-50">
                              
        <SearchComponent />
        
        <VideoSearch />
                          
      </div>

      <div className="flex-container">

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