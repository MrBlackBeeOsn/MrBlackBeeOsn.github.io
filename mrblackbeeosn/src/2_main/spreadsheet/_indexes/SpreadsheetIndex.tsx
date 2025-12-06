import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SpreadsheetTopic from '@/components/topic/SpreadsheetTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

export default function SpreadsheetIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Spreadsheet Topic
      ============================= */}

        <SpreadsheetTopic/>

      {/* =============================
          2. Spreadsheet Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="spreadsheet-terms">Spreadsheet Terms</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
        
        <VideoSearch2 />
                          
      </div>

      <div className="vocabulary-container">
      
        {/* =============================
              Spreadsheet Quiz
        ============================= */}

        <details className="sub-box-fix-2 margin-bottom-20">
      
          <summary id="spreadsheet-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/spreadsheet/excel-multiple-choice-questions">Excel Multiple Choice Questions</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

      </div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              Spreadsheet Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/spreadsheet/what-is-spreadsheet?">Spreadsheet</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/spreadsheet/what-is-formula?">Formula</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/spreadsheet/what-is-function?">Function</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}