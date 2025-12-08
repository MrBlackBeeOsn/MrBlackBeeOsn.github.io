// import  from "";
// const  = lazy(() => import(''))
// <Suspense fallback={<></>}></Suspense>

import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

	const Layout = lazy(() => import('@/components/body/Layout'));
	import Posts from '@/data/Posts';

// 1_header import các chức năng và đường dẫn
	const Home = lazy(() => import('@/1_header/Home'));
	const SearchIndex = lazy(() => import('@/1_header/SearchIndex'));

// 2_main import các chức năng và đường dẫn
	const MrBeeOsn = lazy(() => import('@/2_main/msbeeosn/MrBeeOsn'));
	const AboutIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/AboutIndex'));
	const ProjectIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/ProjectIndex'));
	const JourneyIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/JourneyIndex'));
	const ContactIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/ContactIndex'));

// 2_main import các chức năng và đường dẫn Programming

	// 1. Programming
	const ProgrammingIndex = lazy(() => import('@/2_main/programming/_indexes/ProgrammingIndex'));
	const Programming = lazy(() => import('@/2_main/programming/Programming'));
	const ProgrammingLanguage = lazy(() => import('@/2_main/programming/ProgrammingLanguage'));
	const Programmer = lazy(() => import('@/2_main/programming/Programmer'));
	const SoftwareDeveloper = lazy(() => import('@/2_main/programming/SoftwareDeveloper'));
	const FullStackDeveloper = lazy(() => import('@/2_main/programming/FullStackDeveloper'));
	const MobileDeveloper = lazy(() => import('@/2_main/programming/MobileDeveloper'));
	const GoodHabits = lazy(() => import('@/2_main/programming/GoodHabits'));
	const IfThenElse = lazy(() => import('@/2_main/programming/IfThenElse'));
	const Git = lazy(() => import('@/2_main/programming/Git'));
	const Function = lazy(() => import('@/2_main/programming/Function'));

	// Quiz
	const ReactJSPractice = lazy(() => import('@/2_main/programming/quiz/ReactJSPractice'));
	const ReactJSFundamentals = lazy(() => import('@/2_main/programming/quiz/ReactJSFundamentals'));

	// 3. Frontend
	const FrontEndIndex = lazy(() => import('@/2_main/programming/_indexes/FrontEndIndex'));
	const FrontEndDeveloper = lazy(() => import('@/2_main/programming/prontend/FrontEndDeveloper'));
	const HTML = lazy(() => import('@/2_main/programming/prontend/HTML'));
	const CSS = lazy(() => import('@/2_main/programming/prontend/CSS'));
	const JavaScript = lazy(() => import('@/2_main/programming/prontend/JavaScript'));
	const TypeScript = lazy(() => import('@/2_main/programming/prontend/TypeScript'));
	const ReactJS = lazy(() => import('@/2_main/programming/prontend/ReactJS'));
	const NextJS = lazy(() => import('@/2_main/programming/prontend/NextJS'));
	const TailwindCSS = lazy(() => import('@/2_main/programming/prontend/TailwindCSS'));

	// 3. Backend
	const BackendIndex = lazy(() => import('@/2_main/programming/_indexes/BackendIndex'));
	const BackEndDeveloper = lazy(() => import('@/2_main/programming/backend/BackEndDeveloper'));
	const GitHub = lazy(() => import('@/2_main/programming/backend/GitHub'));
	const SQL = lazy(() => import('@/2_main/programming/backend/SQL'));
	const Python = lazy(() => import('@/2_main/programming/backend/Python'));
	const Java = lazy(() => import('@/2_main/programming/backend/Java'));
	const PHP = lazy(() => import('@/2_main/programming/backend/PHP'));
	const NodeJS = lazy(() => import('@/2_main/programming/backend/NodeJS'));

	// 4. Learning
	const LearningIndex = lazy(() => import('@/2_main/learning/_indexes/LearningIndex'));
	const ComponentLearning = lazy(() => import('@/2_main/learning/ComponentLearning'));
	const ProjectBasedLearning = lazy(() => import('@/2_main/learning/ProjectBasedLearning'));
	const MicroLearning = lazy(() => import('@/2_main/learning/MicroLearning'));
	const ToxicDigitalHabitsToQuit = lazy(() => import('@/2_main/learning/ToxicDigitalHabitsToQuit'));

	// 5. Lập Trình
	const LapTrinhIndex = lazy(() => import('@/2_main/programming/_indexes/LapTrinhIndex'));
	const LapTrinhVien = lazy(() => import('@/2_main/programming/laptrinh/LapTrinhVien'));
	const LoTrinhHocFrontEnd = lazy(() => import('@/2_main/programming/laptrinh/LoTrinhHocFrontEnd'));
	const LoTrinhHocBackEnd = lazy(() => import('@/2_main/programming/laptrinh/LoTrinhHocBackEnd'));
	const BiQuyetHocLapTrinhHieuQua = lazy(() => import('@/2_main/programming/laptrinh/BiQuyetHocLapTrinhHieuQua'));
	const TutorialCourseQuestion = lazy(() => import('@/2_main/programming/laptrinh/TutorialCourseQuestion'));

	// Quiz
	const TracNghiemReactJS = lazy(() => import('@/2_main/programming/laptrinh/quiz/TracNghiemReactJS'));

// 2_main import các chức năng và đường dẫn Spreadsheet

	// 1. Spreadsheet
	const SpreadsheetIndex = lazy(() => import('@/2_main/spreadsheet/_indexes/SpreadsheetIndex'));
	const Spreadsheet = lazy(() => import('@/2_main/spreadsheet/Spreadsheet'));
	const Formula = lazy(() => import('@/2_main/spreadsheet/Formula'));
	const Function2 = lazy(() => import('@/2_main/spreadsheet/Function2'));

	// Quiz
	const ExcelMultipleChoiceQuestions = lazy(() => import('@/2_main/spreadsheet/quiz/ExcelMultipleChoiceQuestions'));

	// 2. Functions
	const FunctionIndex = lazy(() => import('@/2_main/spreadsheet/_indexes/FunctionIndex'));
	const XLOOKUP = lazy(() => import('@/2_main/spreadsheet/functions/XLOOKUP'));
	const VLOOKUP = lazy(() => import('@/2_main/spreadsheet/functions/VLOOKUP'));
	const HLOOKUP = lazy(() => import('@/2_main/spreadsheet/functions/HLOOKUP'));
	const DATE = lazy(() => import('@/2_main/spreadsheet/functions/DATE'));

// 3. Test Tailwind
	const TestTailwind = lazy(() => import('@/components/test/TestTailwind'));

// Xuất khẩu chức năng
export default function AppRoutes(): React.JSX.Element {
	return (

	<Suspense fallback={<></>}>

		<Routes>

			<Route path="/" element={<Layout />}>

				<Route path="/:slug" element={<Posts />} />
				<Route path="/:category" element={<Posts />} />

				{/* 1_header Khai báo đường dẫn path cho Home */}
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<SearchIndex />} />

				{/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
				<Route path="/mrbeeosn" element={<MrBeeOsn />} />
				<Route path="/about" element={<AboutIndex />} />
				<Route path="/project" element={<ProjectIndex />} />
				<Route path="/journey" element={<JourneyIndex />} />
				<Route path="/contact" element={<ContactIndex />} />

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

				{/* Quiz */}
				<Route path="/programming/react-js-practice" element={<ReactJSPractice />} />
				<Route path="/programming/react-js-fundamentals" element={<ReactJSFundamentals />} />

				{/* 2. Frontend */}
				<Route path="/front-end" element={<FrontEndIndex />} />
				<Route path="/front-end/what-is-a-front-end-developer?" element={<FrontEndDeveloper />} />
				<Route path="/front-end/what-is-html?" element={<HTML />} />
				<Route path="/front-end/what-is-css?" element={<CSS />} />
				<Route path="/front-end/what-is-javascript?" element={<JavaScript />} />
				<Route path="/front-end/what-is-typescript?" element={<TypeScript />} />
				<Route path="/front-end/what-is-react?" element={<ReactJS />} />
				<Route path="/front-end/what-is-nextjs?" element={<NextJS />} />
				<Route path="/front-end/what-is-tailwindcss?" element={<TailwindCSS />} />
				
				{/* 3. Backend */}
				<Route path="/back-end" element={<BackendIndex />} />
				<Route path="/back-end/what-is-a-back-end-developer?" element={<BackEndDeveloper />} />
				<Route path="/back-end/what-is-github?" element={<GitHub />} />
				<Route path="/back-end/what-is-sql?" element={<SQL />} />
				<Route path="/back-end/what-is-python?" element={<Python />} />
				<Route path="/back-end/what-is-java?" element={<Java />} />
				<Route path="/back-end/what-is-php?" element={<PHP />} />
				<Route path="/back-end/what-is-node.js?" element={<NodeJS />} />

				{/* 4. Learning */}
				<Route path="/learning" element={<LearningIndex />} />
				<Route path="/learning/what-is-component-learning?" element={<ComponentLearning />} />
				<Route path="/learning/what-is-project-based-learning?" element={<ProjectBasedLearning />} />
				<Route path="/learning/what-is-micro-learning?" element={<MicroLearning />} />
				<Route path="/learning/toxic-digital-habits-to-quit" element={<ToxicDigitalHabitsToQuit />} />
				
				{/* 5. Lập Trình */}
				<Route path="/lap-trinh" element={<LapTrinhIndex />} />
				<Route path="/lap-trinh/lap-trinh-vien-la-gi?" element={<LapTrinhVien />} />
				<Route path="/lap-trinh/lo-trinh-hoc-front-end-la-gi?" element={<LoTrinhHocFrontEnd />} />
				<Route path="/lap-trinh/lo-trinh-hoc-back-end-la-gi?" element={<LoTrinhHocBackEnd />} />
				<Route path="/lap-trinh/bi-quyet-hoc-lap-trinh-hieu-qua" element={<BiQuyetHocLapTrinhHieuQua />} />
				<Route path="/lap-trinh/nen-hoc-qua-tutorial-course-hay-question-based?" element={<TutorialCourseQuestion />} />

				{/* Quiz */}
				<Route path="/lap-trinh/trac-nghiem-react-js" element={<TracNghiemReactJS />} />

				{/* 2_main Khai báo đường dẫn path cho Spreadsheet */}

					{/* 1. Spreadsheet */}
					<Route path="/spreadsheet" element={<SpreadsheetIndex />} />
					<Route path="/spreadsheet/what-is-spreadsheet?" element={<Spreadsheet />} />
					<Route path="/spreadsheet/what-is-spreadsheet?" element={<Spreadsheet />} />
					<Route path="/spreadsheet/what-is-formula?" element={<Formula />} />
					<Route path="/spreadsheet/what-is-function?" element={<Function2 />} />

					{/* Quiz */}
					<Route path="/spreadsheet/excel-multiple-choice-questions" element={<ExcelMultipleChoiceQuestions />} />

					{/* 2. Function */}
					<Route path="/function" element={<FunctionIndex />} />
					<Route path="/function/what-is-the-xlookup-function?" element={<XLOOKUP />} />
					<Route path="/function/what-is-the-vlookup-function?" element={<VLOOKUP />} />
					<Route path="/function/what-is-the-hlookup-function?" element={<HLOOKUP />} />
					<Route path="/function/what-is-the-date-function?" element={<DATE />} />

					{/* 3. Test Tailwind */}
					<Route path="/tailwindcss/test-tailwind" element={<TestTailwind />} />

			</Route>

		</Routes>

	</Suspense>

	);
}