import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './posts/Posts';

// 1_header import các chức năng và đường dẫn
import Home from "./1_header/Home";
import Home_Search from "./1_header/Home_Search";

// 2_main import các chức năng và đường dẫn
import Mr_Bee_Osn from "./2_main/msbeeosn/Mr_Bee_Osn";

// 2_main import các chức năng và đường dẫn Programming

  // 1. Programming
  import ProgrammingIndex from "./2_main/programming/_indexes/ProgrammingIndex";
  import Programming from "./2_main/programming/Programming";
  import Programming_Language from "./2_main/programming/Programming_Language";
  import Programmer from "./2_main/programming/Programmer";
  import Software_Developer from "./2_main/programming/Software_Developer";
  import Full_Stack_Developer from "./2_main/programming/Full_Stack_Developer";
  import Mobile_Developer from "./2_main/programming/Mobile_Developer";
  import Good_Habits from "./2_main/programming/Good_Habits";
  import If_Then_Else from "./2_main/programming/If_Then_Else";
  import Git from "./2_main/programming/Git";
  import Function from "./2_main/programming/Function";

  // 3. Frontend
  import FrontEndIndex from "./2_main/programming/_indexes/FrontEndIndex";
  import Front_End_Developer from "./2_main/programming/prontend/Front_End_Developer";
  import HTML from "./2_main/programming/prontend/HTML";
  import CSS from "./2_main/programming/prontend/CSS";
  import JavaScript from "./2_main/programming/prontend/JavaScript";
  import React from "./2_main/programming/prontend/React";

  // 3. Backend
  import BackendIndex from "./2_main/programming/_indexes/BackendIndex";
  import Back_End_Developer from "./2_main/programming/backend/Back_End_Developer";
  import GitHub from "./2_main/programming/backend/GitHub";
  import SQL from "./2_main/programming/backend/SQL";
  import Python from "./2_main/programming/backend/Python";
  import Java from "./2_main/programming/backend/Java";
  import PHP from "./2_main/programming/backend/PHP";
  import Node_JS from "./2_main/programming/backend/Node_JS";

  // 4. Lập Trình
  import LapTrinhIndex from "./2_main/programming/_indexes/LapTrinhIndex";
  import Lo_Trinh_Hoc_Frontend from "./2_main/programming/laptrinh/Lo_Trinh_Hoc_Frontend";
  import Lo_Trinh_Hoc_Backend from "./2_main/programming/laptrinh/Lo_Trinh_Hoc_Backend";


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
        <Route path="/search" element={<Home_Search />} />

        {/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
        <Route path="/mrbeeosn" element={<Mr_Bee_Osn />} />

        {/* 2_main Khai báo đường dẫn path cho Programming */}

        {/* 1. Programming */}
        <Route path="/programming" element={<ProgrammingIndex />} />
        <Route path="/programming/what-is-programming?" element={<Programming />} />
        <Route path="/programming/what-is-a-programming-language?" element={<Programming_Language />} />
        <Route path="/programming/what-is-a-programmer?" element={<Programmer />} />
        <Route path="/programming/what-is-a-software-developer?" element={<Software_Developer />} />
        <Route path="/programming/what-is-a-full-stack-developer?" element={<Full_Stack_Developer />} />
        <Route path="/programming/what-is-a-mobile-developer?" element={<Mobile_Developer />} />
        <Route path="/programming/what-are-good-habits?" element={<Good_Habits />} />
        <Route path="/programming/what-is-if-then-else?" element={<If_Then_Else />} />
        <Route path="/programming/what-is-Git?" element={<Git />} />
        <Route path="/programming/what-is-a-function?" element={<Function />} />

        {/* 2. Frontend */}
        <Route path="/front-end" element={<FrontEndIndex />} />
        <Route path="/front-end/what-is-a-front-end-developer?" element={<Front_End_Developer />} />
        <Route path="/front-end/what-is-html?" element={<HTML />} />
        <Route path="/front-end/what-is-css?" element={<CSS />} />
        <Route path="/front-end/what-is-javascript?" element={<JavaScript />} />
        <Route path="/front-end/what-is-react?" element={<React />} />
        
        {/* 3. Backend */}
        <Route path="/back-end" element={<BackendIndex />} />
        <Route path="/back-end/what-is-a-back-end-developer?" element={<Back_End_Developer />} />
        <Route path="/back-end/what-is-github?" element={<GitHub />} />
        <Route path="/back-end/what-is-sql?" element={<SQL />} />
        <Route path="/back-end/what-is-python?" element={<Python />} />
        <Route path="/back-end/what-is-java?" element={<Java />} />
        <Route path="/back-end/what-is-php?" element={<PHP />} />
        <Route path="/back-end/what-is-node.js?" element={<Node_JS />} />
        
        {/* 4. Lập Trình */}
        <Route path="/lap-trinh" element={<LapTrinhIndex />} />
        <Route path="/lap-trinh/lo-trinh-hoc-front-end-la-gi?" element={<Lo_Trinh_Hoc_Frontend />} />
        <Route path="/lap-trinh/lo-trinh-hoc-back-end-la-gi?" element={<Lo_Trinh_Hoc_Backend />} />


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