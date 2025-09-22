import { Link } from "react-router-dom";

export default function Home_Spreadsheet() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Spreadsheet Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="spreadsheet-terms">Spreadsheet Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="what-is-spreadsheet?">Spreadsheet</Link></li>
      
      {/* <li><Link to="formula?">Formula</Link></li>

      <li><Link to="function?">Function</Link></li> */}

    </ul>

    {/* =============================
          Function Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="function-terms">Function Terms</h3>
    
    {/* <ul className="list-border1">

      <li><Link to="xlookup?">XLOOKUP</Link></li>
      
      <li><Link to=""></Link></li>

    </ul> */}
    
  </main>

  </>);
}