import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function ProgrammingTopic(): React.JSX.Element {
  return (

    <div className="topic-container">

      {/* =============================
        1. Programming Terms
      ============================= */}
			
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

        <HashLink smooth to="/learning">
          <mark className="highlight-tertiary-padding-2-4">Learning</mark>
        </HashLink>

        <HashLink smooth to="/lap-trinh">
          <mark className="highlight-tertiary-padding-2-4">Lập Trình</mark>
        </HashLink>

      </div>

    </div>
    
  );
}