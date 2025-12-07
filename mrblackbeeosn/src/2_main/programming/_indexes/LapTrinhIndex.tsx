import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ProgrammingTopic from '@/components/topic/ProgrammingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

export default function LapTrinhIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Programming Topic
      ============================= */}
          
        <ProgrammingTopic/>

      {/* =============================
          4. Lập Trình Terms
      ============================= */}

      <h3 className="margin-y-50 text-center" id="lap-trinh-terms">Lập Trình Terms</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
        
        <VideoSearch />
                          
      </div>

      <div className="vocabulary-container">
      
        {/* =============================
              Lập trình Quiz
        ============================= */}

        <details className="sub-box-fix-2 margin-bottom-20">
      
          <summary id="lap-trinh-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/programming/react-js-practice"></Link>
              </div>
            </li>

            
            
          </ul>

        </details>

      </div>

      <div className="flex-container">

        <div className="sub-box">

          {/* =============================
              Cách học Lập trình
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/lap-trinh/lo-trinh-hoc-front-end-la-gi?">Lộ trình học Frontend</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/lap-trinh/lo-trinh-hoc-back-end-la-gi?">Lộ trình học Backend</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">

          {/* =============================
              Người lập trình
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/lap-trinh/lap-trinh-vien-la-gi?">Lập trình viên</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

      <div className="flex-container">

        <div className="sub-box">

          {/* =============================
              Cách học Lập trình
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/lap-trinh/bi-quyet-hoc-lap-trinh-hieu-qua">Bí Quyết Học Lập Trình Hiệu Quả</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/lap-trinh/nen-hoc-qua-tutorial-course-hay-question-based?">Nên học qua Tutorial, Course hay Question-based?</Link>
              </div>
            </li>
            
          </ul>

        </div>

        

      </div>

    </article>
    
  </main>

  </>);
}