import { Link } from "react-router-dom";
import logo from '/public/assets/images/bee-purple2.png';
import SearchIcon from './SearchIcon';

export default function Header() {
  return (

    <header>

      <nav>

        <div className="branding">
          <Link to="/"><img src={logo} className="logo" alt="Mr. Bee - Ong siêng năng"></img></Link>
          <span class="logo-text">👋&nbsp;Hello!&nbsp;</span>
        </div>

        <div className="nav-bar">

          <Link to="/programming" className="nav-link">🅿rogramming</Link>
          <Link to="/spreadsheet" className="nav-link">Spreadsheet</Link>

          <Link to="/search" className="nav-link">

            <SearchIcon 
              size={24} 
              fill="var(--secondary-color)" 
              stroke="var(--secondary-color)"
            />

          </Link>
              
        </div>

      </nav>

    </header>
    
  );
}