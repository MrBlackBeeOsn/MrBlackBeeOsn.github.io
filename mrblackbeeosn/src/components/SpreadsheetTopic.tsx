import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function SpreadsheetTopic(): React.JSX.Element {
  return (

    <div className="topic-container">

      {/* =============================
        1. Spreadsheet Terms
      ============================= */}
			
      <div className="flex-topic">

        <Link to="/spreadsheet">
          <mark className="highlight-tertiary-padding-2-4">Spreadsheet</mark>
        </Link>

        <Link to="/function">
          <mark className="highlight-tertiary-padding-2-4">Function</mark>
        </Link>
      
      </div>

		</div>
    
  );
}