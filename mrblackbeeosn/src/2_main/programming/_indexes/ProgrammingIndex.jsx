import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function ProgrammingIndex() {
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
    
  </main>

  </>);
}