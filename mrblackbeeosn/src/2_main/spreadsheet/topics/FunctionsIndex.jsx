import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function FunctionsIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        1. Spreadsheet Terms
    ============================= */}

    <div className="topic-container">
			
      <div className="flex-topic">

        <Link to="/spreadsheet">
          <mark className="highlight-tertiary-padding-2-4">Spreadsheet</mark>
        </Link>

        <Link to="/functions">
          <mark className="highlight-tertiary-padding-2-4">Functions</mark>
        </Link>
      
      </div>

		</div>

    {/* =============================
        1. Function Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="function-terms">Function Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/functions/what-is-XLOOKUP?">XLOOKUP</Link></li>
      
      <li><Link to=""></Link></li>

    </ul>
    
  </main>

  </>);
}