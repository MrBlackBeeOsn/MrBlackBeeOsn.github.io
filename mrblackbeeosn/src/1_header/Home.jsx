import { Link } from "react-router-dom";

export default function Home() {
  return (<>
     
      <main className="image">

        <h1 className="margin-y-50 text-center">🌾 Welcome!</h1>

        <p className="quote">

          🐝 <Link to="/programming/what-is-programming?">Programming</Link> is the process of creating a set of <mark className="highlight6">instructions</mark> that tells a computer how to <mark className="highlight6">perform a task.</mark>

        </p>
        
        <p className="quote">

          🐝 A <Link to="/spreadsheet/what-is-spreadsheet?">spreadsheet</Link> is a digital tool for <mark className="highlight6">organizing and working with information.</mark>
          
        </p>

        <div className="grid">
          <div className="card2">
            <p className="text-small">
          
              ☕ Happy <mark className="highlight">reading</mark> today!
        
            </p>
          </div>
        </div>

        <p className="margin-bottom-50 text-center text-small">
            
          __Summer, 2025 - by <Link to="/mrbeeosn">Mr. Bee Osn</Link>--
          
        </p>

      </main>

  </>);
}