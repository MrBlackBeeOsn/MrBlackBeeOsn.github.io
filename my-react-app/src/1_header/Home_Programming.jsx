import { Link } from "react-router-dom";

export default function Home_Programming() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Programming Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="programming-terms">Programming Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="what-is-programming?">Programming</Link></li>
      
      {/* <li><Link to="programming-language?">Programming language</Link></li>
      
      <li><Link to="programmer?">Programmer</Link></li>

      <li><Link to="software-developer?">Software Developer</Link></li>

      <li><Link to="full-stack-developer?">Full-Stack Developer</Link></li>

      <li><Link to="mobile-developer?">Mobile Developer</Link></li>

      <li><Link to="good-habits?">Good habits</Link></li>

      <li><Link to="if-then-else?">If-Then-Else</Link></li>

      <li><Link to="git?">Git</Link></li>

      <li><Link to="function?">Function</Link></li> */}

    </ul>

    {/* =============================
          Pront-End Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="pront-end-terms">Pront-End Terms</h3>
    
    {/* <ul className="list-border1">
      
      <li><Link to="front-end-developer?">Front-End Developer</Link></li>
      
      <li><Link to="html?">HTML</Link></li>

      <li><Link to="css?">CSS</Link></li>

      <li><Link to="javascript?">JavaScript</Link></li>

    </ul> */}

    {/* =============================
          Back-End Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="back-end-terms">Back-End Terms</h3>
    
    {/* <ul className="list-border1">

      <li><Link to="back-end-developer?">Back-End Developer</Link></li>
      
      <li><Link to="github?">GitHub</Link></li>

      <li><Link to="sql?">SQL</Link></li>

      <li><Link to="python?">Python</Link></li>

      <li><Link to="java?">Java</Link></li>

      <li><Link to="php?">PHP</Link></li>

      <li><Link to="node.js?">Node.js</Link></li>

    </ul> */}

    {/* =============================
          Mr. Bee's Articles
    ============================= */}

    <h3 className="margin-y-50 text-center" id="mr.bee-osn-programming-terms">Mr. Bee Osn Programming Terms</h3>
    
    {/* <ul className="list-border1">

      <li><Link to="lo-trinh-hoc-frontend-la-gi?">Lộ trình học Frontend</Link></li>
      
      <li><Link to="lo-trinh-hoc-backend-la-gi?">Lộ trình học Backend</Link></li>

    </ul> */}
    
  </main>

  </>);
}