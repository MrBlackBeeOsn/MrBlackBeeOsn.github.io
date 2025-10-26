import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SpreadsheetTopic from '@/components/SpreadsheetTopic';

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