import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SpreadsheetTopic from '@/components/topic/SpreadsheetTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/VideoSearch2';

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

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/spreadsheet/what-is-spreadsheet?">Spreadsheet</Link></li>
            
            <li><Link to="/spreadsheet/what-is-formula?">Formula</Link></li>

            <li><Link to="/spreadsheet/what-is-function?">Function</Link></li>

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}