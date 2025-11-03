import React from 'react';
import { Link } from "react-router-dom";
import logo from '/public/assets/images/bee-purple2.png';
import SearchIcon from '@/components/SearchIcon';
import Branding from '@/components/Branding';

export default function Header(): React.JSX.Element {
  return (

    <header className="site-header">

      <nav>

        <div className="branding">
          <Link to="/"><Branding /></Link>
          <span className="logo-text">👋&nbsp;Hello!&nbsp;</span>
        </div>

        <div className="nav-bar">

          <Link to="/programming" className="nav-link">🅿rogramming</Link>
          <Link to="/spreadsheet" className="nav-link">Spreadsheet</Link>

          <Link to="/search" className="nav-link">

            <SearchIcon 
              size={24} 
              fill="var(--secondary-color)" 
              stroke="var(--tertiary-color)"
            />

          </Link>
              
        </div>

      </nav>

    </header>
    
  );
}