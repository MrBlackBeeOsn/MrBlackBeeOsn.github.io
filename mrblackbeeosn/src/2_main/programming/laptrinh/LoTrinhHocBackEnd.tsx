import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function LoTrinhHocBackEnd(): React.JSX.Element {

  const postId = "LoTrinhHocBackEnd";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/lap-trinh#lap-trinh-terms"><mark className="highlight-tertiary-padding-4-8">Lập Trình</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center" id="programming-terms">Lộ trình học Backend là gì?</h1>

      {/* This is the content of Programming Term. */}

      <p>Tuyệt vời! Nếu bạn đã sẵn sàng bước vào thế giới <strong>backend</strong>, thì mình sẽ giúp bạn vẽ ra một lộ trình học rõ ràng, từ cơ bản đến nâng cao, để bạn có thể xây dựng những hệ thống mạnh mẽ, bảo mật và chuyên nghiệp 💻🔐</p>  
      
      <h3 className="margin-y-50 text-center">🧭 Lộ trình học Backend Developer từ A-Z</h3>

      {/* =============================
          🧱 Giai đoạn 1: Nền tảng cơ bản
      ============================= */}

      <div className="margin-bottom-50 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container2">

        <h3 className="margin-y-50 text-center">🧱 Giai đoạn 1: Nền tảng cơ bản</h3>

        <p>1. <strong>Hiểu về Internet</strong> & <strong>Web</strong>: HTTP, DNS, domain, hosting, client-server</p>

        <p>2. <strong>Lập trình cơ bản</strong>: Biến, hàm, vòng lặp, điều kiện, cấu trúc dữ liệu</p>

        <p>3. <strong>Chọn ngôn ngữ backend</strong>:</p>
        
          <ul className="list-none">

            <li>🐍 Python – dễ học, phổ biến</li>

            <li>🟢 Node.js (JavaScript) – nếu bạn đã biết JS</li>

            <li>☕ Java – mạnh mẽ, dùng nhiều trong doanh nghiệp</li>

            <li>🐘 PHP – vẫn phổ biến với WordPress, Laravel</li>

          </ul>

        <p className="margin-y-20">📌 <strong>Mục tiêu</strong>: Viết được chương trình <strong>backend</strong> đơn giản (in ra dữ liệu, xử lý form...)</p>

      </div>

      {/* =============================
          🗃️ Giai đoạn 2: Làm việc với cơ sở dữ liệu 
      ============================= */}

      <div className="margin-bottom-50 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container2">

        <h3 className="margin-y-50 text-center">🗃️ Giai đoạn 2: Làm việc với cơ sở dữ liệu</h3>
      
          <ul className="list-square">

            <li><strong>SQL</strong> & <strong>NoSQL</strong>: MySQL, PostgreSQL, MongoDB</li>

            <li><strong>CRUD operations</strong>: Create, Read, Update, Delete</li>

            <li><strong>ORM</strong>: Sử dụng thư viện như Sequelize (Node.js), SQLAlchemy (Python)</li>

          </ul>

        <p className="margin-y-20">📌 <strong>Mục tiêu</strong>: Kết nối <strong>backend</strong> với database, lưu và truy xuất dữ liệu.</p>

      </div>

      {/* =============================
          🔌 Giai đoạn 3: Xây dựng API
      ============================= */}

      <div className="margin-bottom-50 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container2">

        <h3 className="margin-y-50 text-center">🔌 Giai đoạn 3: Xây dựng API</h3>
      
          <ul className="list-square">

            <li><strong>RESTful API</strong>: Thiết kế endpoint, xử lý request/response</li>

            <li><strong>GraphQL</strong>: Nếu muốn học cách truy vấn dữ liệu linh hoạt hơn</li>

            <li><strong>Authentication</strong>: Đăng nhập, JWT, OAuth2</li>

          </ul>
        
        <p className="margin-y-20">📌 <strong>Mục tiêu</strong>: Tạo API cho ứng dụng frontend hoặc mobile sử dụng.</p>

      </div>

      {/* =============================
          🛠️ Giai đoạn 4: Framework & thực hành 
      ============================= */}

      <div className="margin-bottom-50 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container2">

        <h3 className="margin-y-50 text-center">🛠️ Giai đoạn 4: Framework & thực hành</h3>
      
        <p>1. <strong>Chọn framework phù hợp</strong>:</p>
        
          <ul className="list-square">

            <li>Flask / Django (Python)</li>

            <li>Express.js (Node.js)</li>

            <li>Spring Boot (Java)</li>

            <li>Laravel (PHP)</li>

          </ul>

        <p>2. <strong>Xây dựng dự án thực tế</strong>: Blog, hệ thống quản lý người dùng, API cho app</p>
        
          <p className="margin-y-20">📌 <strong>Mục tiêu</strong>: Làm được một ứng dụng <strong>backend</strong> hoàn chỉnh.</p>

      </div>

      {/* =============================
          🚀 Giai đoạn 5: DevOps & triển khai 
      ============================= */}

      <div className="margin-bottom-50 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container2">

        <h3 className="margin-y-50 text-center">🚀 Giai đoạn 5: DevOps & triển khai</h3>
      
          <ul className="list-square">

            <li><strong>Git</strong> & <strong>GitHub</strong>: Quản lý mã nguồn</li>

            <li><strong>Docker</strong>: Đóng gói ứng dụng</li>

            <li><strong>CI/CD</strong>: Tự động hóa triển khai</li>

            <li><strong>Deploy lên server</strong>: Heroku, Vercel, VPS, AWS</li>

          </ul>

        <p className="margin-y-20">📌 <strong>Mục tiêu</strong>: Đưa ứng dụng lên internet, chạy ổn định và bảo mật.</p>

      </div>

      {/* =============================
          🧠 Giai đoạn 6: Nâng cao & tối ưu
      ============================= */}

      <div className="padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container2">

        <h3 className="margin-y-50 text-center">🧠 Giai đoạn 6: Nâng cao & tối ưu</h3>
      
          <ul className="list-square">

            <li><strong>Caching</strong>: Redis, Memcached</li>

            <li><strong>Message Queue</strong>: RabbitMQ, Kafka</li>

            <li><strong>Testing</strong>: Unit test, integration test</li>

            <li><strong>Security</strong>: XSS, CSRF, SQL Injection</li>

          </ul>
        
        <p className="margin-y-20">📌 <strong>Mục tiêu</strong>: Viết <strong>backend</strong> chuyên nghiệp, tối ưu hiệu suất và bảo mật.</p>

      </div>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>sepTEMber 11, 2025 · by Copilot ·</span>
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