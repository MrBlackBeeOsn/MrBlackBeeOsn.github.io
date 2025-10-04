// import  from "";
// const  = lazy(() => import(''))

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './posts/Posts';

// 1_header import các chức năng và đường dẫn
  import Home from "./1_header/Home";
  import SearchIndex from "./1_header/SearchIndex";

// 2_main import các chức năng và đường dẫn
  import MrBeeOsn from "./2_main/msbeeosn/MrBeeOsn";

// 2_main import các chức năng và đường dẫn Programming

  // 1. Programming
  import ProgrammingIndex from "./2_main/programming/_indexes/ProgrammingIndex";
  import Programming from "./2_main/programming/Programming";
  import ProgrammingLanguage from "./2_main/programming/ProgrammingLanguage";
  import Programmer from "./2_main/programming/Programmer";
  import SoftwareDeveloper from "./2_main/programming/SoftwareDeveloper";
  import FullStackDeveloper from "./2_main/programming/FullStackDeveloper";
  import MobileDeveloper from "./2_main/programming/MobileDeveloper";
  import GoodHabits from "./2_main/programming/GoodHabits";
  import IfThenElse from "./2_main/programming/IfThenElse";
  import Git from "./2_main/programming/Git";
  import Function from "./2_main/programming/Function";

  // 3. Frontend
  import FrontEndIndex from "./2_main/programming/_indexes/FrontEndIndex";
  import FrontEndDeveloper from "./2_main/programming/prontend/FrontEndDeveloper";
  import HTML from "./2_main/programming/prontend/HTML";
  import CSS from "./2_main/programming/prontend/CSS";
  import JavaScript from "./2_main/programming/prontend/JavaScript";
  import React from "./2_main/programming/prontend/React";

  // 3. Backend
  import BackendIndex from "./2_main/programming/_indexes/BackendIndex";
  import BackEndDeveloper from "./2_main/programming/backend/BackEndDeveloper";
  import GitHub from "./2_main/programming/backend/GitHub";
  import SQL from "./2_main/programming/backend/SQL";
  import Python from "./2_main/programming/backend/Python";
  import Java from "./2_main/programming/backend/Java";
  import PHP from "./2_main/programming/backend/PHP";
  import NodeJS from "./2_main/programming/backend/NodeJS";

  // 4. Lập Trình
  import LapTrinhIndex from "./2_main/programming/_indexes/LapTrinhIndex";
  import LoTrinhHocFrontEnd from "./2_main/programming/laptrinh/LoTrinhHocFrontEnd";
  import LoTrinhHocBackEnd from "./2_main/programming/laptrinh/LoTrinhHocBackEnd";


// 2_main import các chức năng và đường dẫn Spreadsheet

  // 1. Spreadsheet
  import SpreadsheetIndex from "./2_main/spreadsheet/_indexes/SpreadsheetIndex";
  import Spreadsheet from "./2_main/spreadsheet/Spreadsheet";
  import Formula from "./2_main/spreadsheet/Formula";
  import Function_2 from "./2_main/spreadsheet/Function";

  // 2. Functions
  import FunctionIndex from "./2_main/spreadsheet/_indexes/FunctionIndex";
  import XLOOKUP from "./2_main/spreadsheet/functions/XLOOKUP";

// Xuất khẩu chức năng
export default function AppRoutes() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>
      <Route path="/:slug" element={<Posts />} />
      <Route path="/:category" element={<Posts />} />

        {/* 1_header Khai báo đường dẫn path cho Home */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchIndex />} />

        {/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />

        {/* 2_main Khai báo đường dẫn path cho Programming */}

        {/* 1. Programming */}
        <Route path="/programming" element={<ProgrammingIndex />} />
        <Route path="/programming/what-is-programming?" element={<Programming />} />
        <Route path="/programming/what-is-a-programming-language?" element={<ProgrammingLanguage />} />
        <Route path="/programming/what-is-a-programmer?" element={<Programmer />} />
        <Route path="/programming/what-is-a-software-developer?" element={<SoftwareDeveloper />} />
        <Route path="/programming/what-is-a-full-stack-developer?" element={<FullStackDeveloper />} />
        <Route path="/programming/what-is-a-mobile-developer?" element={<MobileDeveloper />} />
        <Route path="/programming/what-are-good-habits?" element={<GoodHabits />} />
        <Route path="/programming/what-is-if-then-else?" element={<IfThenElse />} />
        <Route path="/programming/what-is-Git?" element={<Git />} />
        <Route path="/programming/what-is-a-function?" element={<Function />} />

        {/* 2. Frontend */}
        <Route path="/front-end" element={<FrontEndIndex />} />
        <Route path="/front-end/what-is-a-front-end-developer?" element={<FrontEndDeveloper />} />
        <Route path="/front-end/what-is-html?" element={<HTML />} />
        <Route path="/front-end/what-is-css?" element={<CSS />} />
        <Route path="/front-end/what-is-javascript?" element={<JavaScript />} />
        <Route path="/front-end/what-is-react?" element={<React />} />
        
        {/* 3. Backend */}
        <Route path="/back-end" element={<BackendIndex />} />
        <Route path="/back-end/what-is-a-back-end-developer?" element={<BackEndDeveloper />} />
        <Route path="/back-end/what-is-github?" element={<GitHub />} />
        <Route path="/back-end/what-is-sql?" element={<SQL />} />
        <Route path="/back-end/what-is-python?" element={<Python />} />
        <Route path="/back-end/what-is-java?" element={<Java />} />
        <Route path="/back-end/what-is-php?" element={<PHP />} />
        <Route path="/back-end/what-is-node.js?" element={<NodeJS />} />
        
        {/* 4. Lập Trình */}
        <Route path="/lap-trinh" element={<LapTrinhIndex />} />
        <Route path="/lap-trinh/lo-trinh-hoc-front-end-la-gi?" element={<LoTrinhHocFrontEnd />} />
        <Route path="/lap-trinh/lo-trinh-hoc-back-end-la-gi?" element={<LoTrinhHocBackEnd />} />


        {/* 2_main Khai báo đường dẫn path cho Spreadsheet */}

          {/* 1. Spreadsheet */}
          <Route path="/spreadsheet" element={<SpreadsheetIndex />} />
          <Route path="/spreadsheet/what-is-spreadsheet?" element={<Spreadsheet />} />
          <Route path="/spreadsheet/what-is-spreadsheet?" element={<Spreadsheet />} />
          <Route path="/spreadsheet/what-is-formula?" element={<Formula />} />
          <Route path="/spreadsheet/what-is-function?" element={<Function_2 />} />

          {/* 2. Function */}
          <Route path="/function" element={<FunctionIndex />} />
          <Route path="/function/what-is-xlookup?" element={<XLOOKUP />} />


      </Route>

    </Routes>

  );
}