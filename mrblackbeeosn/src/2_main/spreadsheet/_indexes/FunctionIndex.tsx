import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SpreadsheetTopic from '@/components/topic/SpreadsheetTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

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
        
        <VideoSearch />
                          
      </div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/function/what-is-the-xlookup-function?">XLOOKUP</Link></li>
            
            <li><Link to="/function/what-is-the-vlookup-function?">VLOOKUP</Link></li>

            <li><Link to="/function/what-is-the-hlookup-function?">HLOOKUP</Link></li>

            <li><Link to="/function/what-is-the-date-function?">DATE</Link></li>

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}