import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Home_Programming() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        1. Programming Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="programming-terms">Programming Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/programming/what-is-programming?">Programming</Link></li>
      
      <li><Link to="/programming/what-is-a-programming-language?">Programming language</Link></li>
      
      <li><Link to="/programming/what-is-a-programmer?">Programmer</Link></li>

      <li><Link to="/programming/what-is-a-software-developer?">Software Developer</Link></li>

      <li><Link to="/programming/what-is-a-full-stack-developer?">Full-Stack Developer</Link></li>

      <li><Link to="/programming/what-is-a-mobile-developer?">Mobile Developer</Link></li>

      <li><Link to="/programming/what-are-good-habits?">Good habits</Link></li>

      <li><Link to="/programming/what-is-if-then-else?">If-Then-Else</Link></li>

      <li><Link to="/programming/what-is-Git?">Git</Link></li>

      <li><Link to="/programming/what-is-a-function?">Function</Link></li>

    </ul>

    {/* =============================
        2. Pront-End Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="pront-end-terms">Pront-End Terms</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/programming/frontend/what-is-a-front-end-developer?">Front-End Developer</Link></li>
      
      <li><Link to="/programming/frontend/what-is-html?">HTML</Link></li>

      <li><Link to="/programming/frontend/what-is-css?">CSS</Link></li>

      <li><Link to="/programming/frontend/what-is-javascript?">JavaScript</Link></li>

      <li><Link to="/programming/frontend/what-is-react?">React</Link></li>

    </ul>

    {/* =============================
        3. Back-End Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="back-end-terms">Back-End Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/programming/backend/what-is-a-back-end-developer?">Back-End Developer</Link></li>
      
      <li><Link to="/programming/backend/what-is-github?">GitHub</Link></li>

      <li><Link to="/programming/backend/what-is-sql?">SQL</Link></li>

      <li><Link to="/programming/backend/what-is-python?">Python</Link></li>

      <li><Link to="/programming/backend/what-is-java?">Java</Link></li>

      <li><Link to="/programming/backend/what-is-php?">PHP</Link></li>

      <li><Link to="/programming/backend/what-is-node.js?">Node.js</Link></li>

    </ul>

    {/* =============================
        4. Lập Trình Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="lap-trinh-terms">Lập Trình Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/laptrinh/lo-trinh-hoc-frontend-la-gi?">Lộ trình học Frontend</Link></li>
      
      <li><Link to="/laptrinh/lo-trinh-hoc-backend-la-gi?">Lộ trình học Backend</Link></li>

    </ul>
    
  </main>

  </>);
}