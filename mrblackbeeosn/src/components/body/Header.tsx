import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import logo from '/public/assets/images/bee-purple2.png';
import SearchIcon from '@/components/search/SearchIcon';
import Branding from '@/components/logo/Branding';
import ToggleButton from '@/components/color/ToggleButton';

interface HeaderProps {
  showControls: boolean;
  onToggleControls: () => void;
}

export default function Header({ showControls, onToggleControls }: HeaderProps): React.JSX.Element {
  const [selected, setSelected] = useState(false);
  return (

    <header className="site-header">

      <nav>

        <div className="branding">
          <NavLink to="/"><Branding /></NavLink>
          <span className="logo-text">👋&nbsp;Hello!&nbsp;</span>
        </div>

        <div className="nav-bar">

          <NavLink to="/programming"
            className={`link-rounded ${selected ? 'selected' : 'var(--accent-color-50)'}`}
            style={({ isActive }) => ({
              background: isActive ? 'var(--accent-color-50)' : '',
            })}
          >
            🅿rogramming
          </NavLink>

          <NavLink to="/spreadsheet"
            className={`link-rounded ${selected ? 'selected' : 'var(--accent-color-50)'}`}
            style={({ isActive }) => ({
              background: isActive ? 'var(--accent-color-50)' : '',
            })}
          >
            Spreadsheet
          </NavLink>

          <NavLink to="/search" className="nav-link">

            <SearchIcon 
              size={24} 
              fill="var(--secondary-color)" 
              stroke="var(--tertiary-color)"
            />

          </NavLink>

          <ToggleButton 
            isVisible={showControls} 
            onToggle={onToggleControls}
            variant="header" // Quan trọng: thêm variant="header"
          />
              
        </div>

      </nav>

    </header>
    
  );
}