import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ProgrammingTopic from '@/components/topic/ProgrammingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

export default function ProgrammingIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Programming Topic
      ============================= */}
      
        <ProgrammingTopic/>

      {/* =============================
          1. Programming Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="programming-terms">Programming Terms</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
        
        <VideoSearch />
                          
      </div>

      <div className="vocabulary-container">

				{/* =============================
              Programming Quiz
        ============================= */}

				<details className="sub-box-fix-2 margin-bottom-20">
			
					<summary id="react-js-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

					<ul className="list-border1">

						<li>
              <div className="li-content">
                <Link to="/programming/react-js-practice">React JS Practice</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/programming/react-js-fundamentals">React JS Fundamentals</Link>
              </div>
            </li>
						
					</ul>

				</details>

        {/* =============================
              CSS Quiz
        ============================= */}

				<details className="sub-box-fix-2 margin-bottom-20">
			
					<summary id="css-basic-practice"><mark className="highlight-secondary-padding-2-4">CSS</mark></summary>

					<ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/programming/css-questions">CSS Multiple-Choice Questions</Link>
              </div>
            </li>
						
					</ul>

				</details>

      </div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              Programming Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/programming/what-is-programming?">Programming</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/programming/what-is-a-programming-language?">Programming language</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/programming/what-are-good-habits?">Good habits</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/programming/what-is-if-then-else?">If-Then-Else</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/programming/what-is-Git?">Git</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/programming/what-is-a-function?">Function</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">
        
          {/* =============================
              Programmer Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/programming/what-is-a-programmer?">Programmer</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/programming/what-is-a-software-developer?">Software Developer</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/programming/what-is-a-full-stack-developer?">Full-Stack Developer</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/programming/what-is-a-mobile-developer?">Mobile Developer</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}