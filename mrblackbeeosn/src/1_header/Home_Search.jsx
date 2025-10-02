import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchBar from "../components/SearchBar";
import Blog from '../components/Blog';

export default function Home_Search() {
	return (<>
		 
		<main className="image image3">
						
			<h3 className="margin-top-50 margin-bottom-20 text-center">Concept Hub</h3>

			{/* This is the content of Mr. Bee Osn English Term. */}

			<div className="table-container">

				<Blog />

				<div className="post-card">

					<div className="flex-container">

						<HashLink smooth to="/back-end#programming-terms">
							<mark className="highlight-tertiary-padding-2-4">Programming</mark>
						</HashLink>

						<HashLink smooth to="/front-end#pront-end-terms">
							<mark className="highlight-tertiary-padding-2-4">Pront-End</mark>
						</HashLink>

						<HashLink smooth to="/back-end#back-end-terms">
							<mark className="highlight-tertiary-padding-2-4">Back-End</mark>
						</HashLink>

					</div>

					<div className="flex-container">

						<HashLink smooth to="/back-end#lap-trinh-terms">
							<mark className="highlight-tertiary-padding-2-4">Lập Trình</mark>
						</HashLink>

					</div>
			
					<div className="flex-container">

						<HashLink smooth to="/spreadsheet#spreadsheet-terms">
							<mark className="highlight-tertiary-padding-2-4">Spreadsheet</mark>
						</HashLink>

						<HashLink smooth to="/spreadsheet#function-terms">
							<mark className="highlight-tertiary-padding-2-4">Functions</mark>
						</HashLink>
					
					</div>

				</div>
			
			</div>

		</main>

	</>);
}