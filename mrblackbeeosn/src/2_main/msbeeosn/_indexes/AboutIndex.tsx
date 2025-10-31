import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MrBeeOsnTopic from '@/components/MrBeeOsnTopic';
import ExternalLink from '@/components/ExternalLink';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function AboutIndex(): React.JSX.Element {

  const postId = "AboutIndex";

  return (<>
     
  <main className="image image4">

    <article>

      {/* =============================
          Mr.Bee Osn Topic
      ============================= */}
      
        <MrBeeOsnTopic />

      {/* =============================
          About
      ============================= */}

      <div className="container">

        <h1 className="margin-y-50 text-center">Programming Bee</h1>

        <div className="header">

        {/* <h1 className="margin-y-50 text-center">About</h1> */}
      
          <ul className="list-border">

            <li>Welcome everyone!</li>

            <li>Đây là website <mark className="highlight-255-padding-0-4">Programming + Spreadsheet</mark> nhiều trang nội bộ đầu tiên của mình!</li>
          
          <li>Trang web này được xây dựng để học <mark className="highlight-255-padding-0-4">Programming & Spreadsheet</mark> cơ bản.</li>

          </ul>

        </div>
        
        <div className="group-container">

          <h3 className="margin-top-50 text-center">Cộng đồng chính thức của Programming Bee</h3>
          <p className="margin-bottom-50 text-center">(Discord)</p>

          <div className="group-title">
            <h2>Group chính</h2>
          </div>
          
          <div className="group-card">
            <h3>🐝 
              <Link to="https://discord.gg/KS8KyYMa8S" target="_blank">
                Programming Bee📓 — Hub (thông báo chính)
              </Link>
            </h3>
            <p>Thông báo Lập trình chính thức, quy định!</p>
          </div>
          
          <div className="subgroups">
            <div className="group-title">
                <h2>Group con</h2>
            </div>
            
            <div className="subgroup-card">
              <div className="subgroup-icon">💬</div>
              <div className="subgroup-content">
                <h4>
                  <Link to="https://discord.gg/66ad6e6gSs" target="_blank">
                    Internal Chat — Kênh trao đổi nhanh!
                  </Link>
                </h4>
                <p>Kênh trao đổi nhanh chóng và tiện lợi!</p>
              </div>
            </div>
            
            <div className="subgroup-card">
              <div className="subgroup-icon">🌾</div>
              <div className="subgroup-content">
                <h4>
                  <Link to="https://discord.gg/Hv6SrBd8gv" target="_blank">
                    VN — Lập Trình
                  </Link>
                </h4>
                <p>Thảo luận Lập trình, hướng dẫn nội bộ!</p>
              </div>
            </div>
            
            <div className="subgroup-card">
              <div className="subgroup-icon">🌾</div>
              <div className="subgroup-content">
                <h4>
                  <Link to="https://discord.gg/r4DyMaBRUQ" target="_blank">
                    EN — Programming
                  </Link>
                </h4>
                <p>Thảo luận Programming, hướng dẫn quốc tế!</p>
              </div>
            </div>
            
            <div className="subgroup-card">
              <div className="subgroup-icon">📁</div>
              <div className="subgroup-content">
                <h4>
                  <Link to="https://discord.gg/GCM38dvFFT" target="_blank">
                    Files — Nơi lưu tài liệu
                  </Link>
                </h4>
                <p>Chia sẻ tài liệu!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="viewcounter">
          
        <div className="post-date no-margin">
          <span>by 🐝Mr. Bee Osn ·</span>
        </div>

        <div className="eye-icon no-margin">
          <EyeIcon />
        </div>

        <div className="post-date no-margin">
          <ViewCounter postId={postId} />
        </div>

        <div className="like-button no-margin">
          <LikeButton postId={postId} />
        </div>

      </div>

    </article>
    
  </main>

  </>);
}