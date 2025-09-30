import { Link } from "react-router-dom";
import logo from '/public/assets/images/bee-purple2.png';
import Blog from './Blog';

export default function Header() {
  return (

    <header>

      <nav>

        <div className="branding">
          <Link to="/"><img src={logo} className="logo" alt="Mr. Bee - Ong siêng năng"></img></Link>
          <span class="logo-text">👋&nbsp;Hello!&nbsp;</span>
        </div>

        <div className="nav-bar">
   
          <Link to="/search" className="nav-link">

            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" fill="currentColor" stroke="var(--secondary-color)" strokeWidth="2" viewBox="0 0 24 24">

              <circle cx="11" cy="11" r="8" />
              
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
          
            </svg>

          </Link>

          <Link to="/programming" className="nav-link">🅿rogramming</Link>
          <Link to="/spreadsheet" className="nav-link">Spreadsheet</Link>
              
        </div>

      </nav>

    </header>
    
  );
}