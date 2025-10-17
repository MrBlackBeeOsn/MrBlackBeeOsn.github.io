import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ProgrammingTopic from '@/components/ProgrammingTopic';

export default function LapTrinhIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Programming Topic
    ============================= */}
        
      <ProgrammingTopic/>

    {/* =============================
        4. Lập Trình Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="lap-trinh-terms">Lập Trình Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">

          <li><Link to="/lap-trinh/lo-trinh-hoc-front-end-la-gi?">Lộ trình học Frontend</Link></li>
          
          <li><Link to="/lap-trinh/lo-trinh-hoc-back-end-la-gi?">Lộ trình học Backend</Link></li>

        </ul>

      </div>

    </div>
    
  </main>

  </>);
}