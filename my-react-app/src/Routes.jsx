import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Spreadsheet from "./pages/Spreadsheet";
import MrBeeOsn from "./pages/MrBeeOsn";

export default function AppRoutes() {
  return (

    <Routes>

        <Header />

        <main>

            <Route path="/" element={<Home />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/spreadsheet" element={<Spreadsheet />} />
            <Route path="/mrbeeosn" element={<MrBeeOsn />} />

        </main>

        <Footer />

    </Routes>

  );
}