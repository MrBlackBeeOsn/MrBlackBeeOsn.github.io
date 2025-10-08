import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchBar from "../components/SearchBar";
import SearchComponent from '../components/SearchComponent';

export default function SearchIndex() {
	return (<>
		 
		<main className="image image3">
						
			{/* <h3 className="margin-top-50 margin-bottom-20 text-center">Concept Hub</h3> */}

			{/* This is the content of Mr. Bee Osn English Term. */}

			{/* <div className="topic-container">

        <div  className="flex-topic">

					<div className="flex-container">

						<HashLink smooth to="/programming#programming-terms">
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

						<HashLink smooth to="/lap-trinh#lap-trinh-terms">
							<mark className="highlight-tertiary-padding-2-4">Lập Trình</mark>
						</HashLink>

					</div>
			
					<div className="flex-container">

						<HashLink smooth to="/spreadsheet#spreadsheet-terms">
							<mark className="highlight-tertiary-padding-2-4">Spreadsheet</mark>
						</HashLink>

						<HashLink smooth to="/function#function-terms">
							<mark className="highlight-tertiary-padding-2-4">Function</mark>
						</HashLink>
					
					</div>

				</div>

			</div> */}

			<div className="table-search">

				<SearchComponent />
			
			</div>

		</main>

	</>);
}