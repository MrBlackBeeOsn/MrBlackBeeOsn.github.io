import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function SpreadsheetIndex() {
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
    
    <h3 className="margin-y-50 text-center" id="spreadsheet-terms">Spreadsheet Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/spreadsheet/what-is-spreadsheet?">Spreadsheet</Link></li>
      
      <li><Link to="/spreadsheet/what-is-formula?">Formula</Link></li>

      <li><Link to="/spreadsheet/what-is-function?">Function</Link></li>

    </ul>
    
  </main>

  </>);
}