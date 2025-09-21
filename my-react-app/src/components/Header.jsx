import { Link } from "react-router-dom";
import logo from '/public/assets/images/bee-purple2.png';

export default function Header() {
  return (

    <header>

      <nav>

        <div className="branding">
          <Link to="/"><img src={logo} alt="Mr. Bee - Ong siêng năng"></img></Link>
        </div>

        <div>
          <ul>
            <li><Link to="/programming" className="nav-link">🅿rogramming</Link></li>
            <li><Link to="/spreadsheet" className="nav-link">Spreadsheet</Link></li>
          </ul>
        </div>

      </nav>

    </header>
    
  );
}