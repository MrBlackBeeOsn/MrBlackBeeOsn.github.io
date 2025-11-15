import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { useState } from "react";

export default function SpreadsheetTopic(): React.JSX.Element {
  const [selected, setSelected] = useState(false);
  return (

    <div className="topic-container">

      {/* =============================
        1. Spreadsheet Terms
      ============================= */}
			
      <div className="flex-topic">

        {/* Spreadsheet */}
        <NavLink to="/spreadsheet"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Spreadsheet</mark>
        </NavLink>

        {/* Function */}
        <NavLink to="/function"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Function</mark>
        </NavLink>
      
      </div>

		</div>
    
  );
}