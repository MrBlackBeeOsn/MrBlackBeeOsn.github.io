import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Spreadsheet from "./pages/Spreadsheet";
import MrBeeOsn from "./pages/MrBeeOsn";

export default function AppRoutes() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/spreadsheet" element={<Spreadsheet />} />
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />

      </Route>

    </Routes>

  );
}