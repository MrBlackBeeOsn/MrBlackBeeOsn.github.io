import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Programming from "./Programming";
import Spreadsheet from "./Spreadsheet";
import MrBeeOsn from "./MrBeeOsn";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/spreadsheet" element={<Spreadsheet />} />
            <Route path="/mrbeeosn" element={<MrBeeOsn />} />
          </Routes>

        </main>

        <Footer />

      </div>
    </Router>
  );
}