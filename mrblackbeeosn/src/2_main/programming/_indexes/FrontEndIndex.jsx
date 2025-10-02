import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function FrontEndIndex() {
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
        2. Pront-End Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="pront-end-terms">Pront-End Terms</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/front-end/what-is-a-front-end-developer?">Front-End Developer</Link></li>
      
      <li><Link to="/front-end/what-is-html?">HTML</Link></li>

      <li><Link to="/front-end/what-is-css?">CSS</Link></li>

      <li><Link to="/front-end/what-is-javascript?">JavaScript</Link></li>

      <li><Link to="/front-end/what-is-react?">React</Link></li>

    </ul>
    
  </main>

  </>);
}