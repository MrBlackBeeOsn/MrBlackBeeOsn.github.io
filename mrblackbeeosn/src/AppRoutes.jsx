import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './posts/Posts';

// 1_header import các chức năng và đường dẫn
import Home from "./1_header/Home";
import Home_Programming from "./1_header/Home_Programming";
import Home_Spreadsheet from "./1_header/Home_Spreadsheet";
import Home_Search from "./1_header/Home_Search";

// 2_main import các chức năng và đường dẫn
import Mr_Bee_Osn from "./2_main/msbeeosn/Mr_Bee_Osn";

// 2_main import các chức năng và đường dẫn Programming

  // 1. Programming
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
  import Front_End_Developer from "./2_main/programming/prontend/Front_End_Developer";
  import HTML from "./2_main/programming/prontend/HTML";
  import CSS from "./2_main/programming/prontend/CSS";
  import JavaScript from "./2_main/programming/prontend/JavaScript";
  import React from "./2_main/programming/prontend/React";

  // 3. Backend
  import Back_End_Developer from "./2_main/programming/backend/Back_End_Developer";
  import GitHub from "./2_main/programming/backend/GitHub";
  import SQL from "./2_main/programming/backend/SQL";
  import Python from "./2_main/programming/backend/Python";
  import Java from "./2_main/programming/backend/Java";
  import PHP from "./2_main/programming/backend/PHP";
  import Node_JS from "./2_main/programming/backend/Node_JS";

  // 4. Lập Trình
  import Lo_Trinh_Hoc_Frontend from "./2_main/programming/laptrinh/Lo_Trinh_Hoc_Frontend";
  import Lo_Trinh_Hoc_Backend from "./2_main/programming/laptrinh/Lo_Trinh_Hoc_Backend";


// 2_main import các chức năng và đường dẫn Spreadsheet

  // 1. Spreadsheet
  import Spreadsheet from "./2_main/spreadsheet/Spreadsheet";
  import Formula from "./2_main/spreadsheet/Formula";
  import Function_2 from "./2_main/spreadsheet/Function";

  // 2. Functions
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
        <Route path="/programming" element={<Home_Programming />} />
        <Route path="/spreadsheet" element={<Home_Spreadsheet />} />
        <Route path="/search" element={<Home_Search />} />

        {/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
        <Route path="/mrbeeosn" element={<Mr_Bee_Osn />} />

        {/* 2_main Khai báo đường dẫn path cho Programming */}

        {/* 1. Programming */}
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
        <Route path="/programming/frontend/what-is-a-front-end-developer?" element={<Front_End_Developer />} />
        <Route path="/programming/frontend/what-is-html?" element={<HTML />} />
        <Route path="/programming/frontend/what-is-css?" element={<CSS />} />
        <Route path="/programming/frontend/what-is-javascript?" element={<JavaScript />} />
        <Route path="/programming/frontend/what-is-react?" element={<React />} />
        
        {/* 3. Backend */}
        <Route path="/programming/backend/what-is-a-back-end-developer?" element={<Back_End_Developer />} />
        <Route path="/programming/backend/what-is-github?" element={<GitHub />} />
        <Route path="/programming/backend/what-is-sql?" element={<SQL />} />
        <Route path="/programming/backend/what-is-python?" element={<Python />} />
        <Route path="/programming/backend/what-is-java?" element={<Java />} />
        <Route path="/programming/backend/what-is-php?" element={<PHP />} />
        <Route path="/programming/backend/what-is-node.js?" element={<Node_JS />} />
        
        {/* 4. Lập Trình */}
        <Route path="/laptrinh/lo-trinh-hoc-frontend-la-gi?" element={<Lo_Trinh_Hoc_Frontend />} />
        <Route path="/laptrinh/lo-trinh-hoc-backend-la-gi?" element={<Lo_Trinh_Hoc_Backend />} />


        {/* 2_main Khai báo đường dẫn path cho Spreadsheet */}

          {/* 1. Spreadsheet */}
          <Route path="/spreadsheet/what-is-spreadsheet?" element={<Spreadsheet />} />
          <Route path="/spreadsheet/what-is-formula?" element={<Formula />} />
          <Route path="/spreadsheet/what-is-function?" element={<Function_2 />} />

          {/* 2. Function */}
          <Route path="/spreadsheet/functions/what-is-XLOOKUP?" element={<XLOOKUP />} />


      </Route>

    </Routes>

  );
}