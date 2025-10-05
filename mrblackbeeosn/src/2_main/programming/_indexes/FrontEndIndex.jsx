import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ProgrammingTopic from '/src/components/ProgrammingTopic';

export default function FrontEndIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Programming Topic
    ============================= */}
            
      <ProgrammingTopic/>

    {/* =============================
        2. Pront-End Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="pront-end-terms">Pront-End Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">
      
          <li><Link to="/front-end/what-is-a-front-end-developer?">Front-End Developer</Link></li>
          
          <li><Link to="/front-end/what-is-html?">HTML</Link></li>

          <li><Link to="/front-end/what-is-css?">CSS</Link></li>

          <li><Link to="/front-end/what-is-javascript?">JavaScript</Link></li>

          <li><Link to="/front-end/what-is-react?">React</Link></li>

        </ul>

      </div>

    </div>
    
  </main>

  </>);
}