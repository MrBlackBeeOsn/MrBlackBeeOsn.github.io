import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SpreadsheetTopic from '@/components/topic/SpreadsheetTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

export default function FunctionIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Spreadsheet Topic
      ============================= */}
      
        <SpreadsheetTopic/>

      {/* =============================
          1. Function Terms
      ============================= */}

      <h3 className="margin-y-50 text-center" id="function-terms">Function Terms</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
        
        <VideoSearch2 />
                          
      </div>

      <div className="vocabulary-container">
            
        {/* =============================
              Function Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="function-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/function/excel-functions">Excel Functions</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

      </div>

      <div className="flex-container margin-top-20">

        <div className="sub-box">
        
          {/* =============================
              Function Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/function/what-is-the-xlookup-function?">XLOOKUP</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/function/what-is-the-vlookup-function?">VLOOKUP</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/function/what-is-the-hlookup-function?">HLOOKUP</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/function/what-is-the-date-function?">DATE</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}