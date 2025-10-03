import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function BackendIndex() {
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

        <HashLink smooth to="/lap-trinh#lap-trinh-terms">
          <mark className="highlight-tertiary-padding-2-4">Lập Trình</mark>
        </HashLink>

      </div>

    </div>

    {/* =============================
        3. Back-End Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="back-end-terms">Back-End Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/back-end/what-is-a-back-end-developer?">Back-End Developer</Link></li>
      
      <li><Link to="/back-end/what-is-github?">GitHub</Link></li>

      <li><Link to="/back-end/what-is-sql?">SQL</Link></li>

      <li><Link to="/back-end/what-is-python?">Python</Link></li>

      <li><Link to="/back-end/what-is-java?">Java</Link></li>

      <li><Link to="/back-end/what-is-php?">PHP</Link></li>

      <li><Link to="/back-end/what-is-node.js?">Node.js</Link></li>

    </ul>
    
  </main>

  </>);
}