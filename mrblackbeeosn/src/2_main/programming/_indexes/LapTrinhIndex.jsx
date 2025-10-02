import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function LapTrinhIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        1. Programming Terms
    ============================= */}

    <div className="topic-container">
			
      <div className="flex-topic">

        <HashLink smooth to="/programming">
          <mark className="highlight-tertiary-padding-2-4">Programming</mark>
        </HashLink>

        <HashLink smooth to="/front-end">
          <mark className="highlight-tertiary-padding-2-4">Pront-End</mark>
        </HashLink>

        <HashLink smooth to="/back-end">
          <mark className="highlight-tertiary-padding-2-4">Back-End</mark>
        </HashLink>

        <HashLink smooth to="/lap-trinh">
          <mark className="highlight-tertiary-padding-2-4">Lập Trình</mark>
        </HashLink>

      </div>

    </div>

    {/* =============================
        4. Lập Trình Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="lap-trinh-terms">Lập Trình Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/lap-trinh/lo-trinh-hoc-front-end-la-gi?">Lộ trình học Frontend</Link></li>
      
      <li><Link to="/lap-trinh/lo-trinh-hoc-back-end-la-gi?">Lộ trình học Backend</Link></li>

    </ul>
    
  </main>

  </>);
}