import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SpreadsheetTopic from '/src/components/SpreadsheetTopic';

export default function FunctionIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Spreadsheet Topic
    ============================= */}
    
      <SpreadsheetTopic/>

    {/* =============================
        1. Function Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="function-terms">Function Terms</h3>

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
    
  </main>

  </>);
}