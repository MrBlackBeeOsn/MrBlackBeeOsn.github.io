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
    
    <ul className="list-border1">

      <li><Link to="/function/what-is-xlookup?">XLOOKUP</Link></li>
      
      <li><Link to=""></Link></li>

    </ul>
    
  </main>

  </>);
}