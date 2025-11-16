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

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/lap-trinh/lo-trinh-hoc-front-end-la-gi?">Lộ trình học Frontend</Link></li>
            
            <li><Link to="/lap-trinh/lo-trinh-hoc-back-end-la-gi?">Lộ trình học Backend</Link></li>

            <li><Link to="/lap-trinh/bi-quyet-hoc-lap-trinh-hieu-qua">Bí Quyết Học Lập Trình Hiệu Quả</Link></li>

          </ul>

        </div>

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/lap-trinh/lap-trinh-vien-la-gi?">Lập trình viên</Link></li>
          

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}