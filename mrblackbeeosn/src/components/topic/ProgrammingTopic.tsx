import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { useState } from "react";

export default function ProgrammingTopic(): React.JSX.Element {
  const [selected, setSelected] = useState(false);
  return (

    <div className="topic-container">

      {/* =============================
        1. Programming Terms
      ============================= */}
			
      <div className="flex-topic">

        {/* Programming */}
        <NavLink to="/programming"
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
          <mark className="highlight-tertiary-padding-2-4">Programming</mark>
        </NavLink>

        {/* Front-end */}
        <NavLink to="/front-end"
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
          <mark className="highlight-tertiary-padding-2-4">Pront-End</mark>
        </NavLink>

        {/* Back-end */}
        <NavLink to="/back-end"
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
          <mark className="highlight-tertiary-padding-2-4">Back-End</mark>
        </NavLink>

        {/* Learning */}
        <NavLink to="/learning"
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
          <mark className="highlight-tertiary-padding-2-4">Learning</mark>
        </NavLink>

        {/* Lập trình */}
        <NavLink to="/lap-trinh"
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
          <mark className="highlight-tertiary-padding-2-4">Lập Trình</mark>
        </NavLink>

      </div>

    </div>
    
  );
}