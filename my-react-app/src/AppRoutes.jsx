import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// 1_header import các chức năng và đường dẫn
import Home from "./1_header/Home";
import Home_Programming from "./1_header/Home_Programming";
import Home_Spreadsheet from "./1_header/Home_Spreadsheet";

// 2_main import các chức năng và đường dẫn
import MrBeeOsn from "./2_main/msbeeosn/MrBeeOsn";
import Programming from "./2_main/programming/Programming";
import Spreadsheet from "./2_main/spreadsheet/Spreadsheet";

// Xuất khẩu chức năng
export default function AppRoutes() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>

        {/* 1_header Khai báo đường dẫn path cho Home */}
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Home_Programming />} />
        <Route path="/spreadsheet" element={<Home_Spreadsheet />} />

        {/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />

        {/* 2_main Khai báo đường dẫn path cho Programming */}
        <Route path="/programming/what-is-programming?" element={<Programming />} />


        {/* 2_main Khai báo đường dẫn path cho Spreadsheet */}
        <Route path="/spreadsheet/what-is-spreadsheet?" element={<Spreadsheet />} />

      </Route>

    </Routes>

  );
}