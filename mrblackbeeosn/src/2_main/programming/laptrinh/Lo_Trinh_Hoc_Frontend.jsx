import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Lo_Trinh_Hoc_Frontend() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/programming#lap-trinh-terms"><mark className="highlight-tertiary-padding-4-8">Lập Trình</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center" id="programming-terms">Lộ trình học Frontend là gì?</h2>

    {/* This is the content of Programming Term. */}

    <p>Tuyệt vời! 😎 Vậy mình cùng bắt đầu với <strong>lộ trình học frontend</strong> từ CSS lên JavaScript nhé. Mình sẽ chia thành các giai đoạn để bạn dễ theo dõi và thực hành.</p>

    <h4 className="margin-y-50 text-center">🚀 Giai đoạn 1: Củng cố nền tảng HTML & CSS</h4>

    <p>Nếu bạn đã biết CSS rồi thì phần này là để làm chắc thêm.</p>
    
      <ul className="list-none">

        <li>✅ <strong>Hiểu cấu trúc <Link to="/programming/frontend/what-is-html?">HTML</Link></strong>: thẻ div, section, header, footer, form, v.v.</li>

        <li>✅ <strong>Nắm vững <Link to="/programming/frontend/what-is-css?">CSS</Link></strong>: Flexbox, Grid, Responsive, Animation</li>

        <li>✅ <strong>Thực hành</strong>: Tạo một trang portfolio cá nhân đơn giản</li>

      </ul>

    <p>📌 <strong>Mục tiêu</strong>: Tự tay dựng được giao diện một trang web tĩnh.</p>

    <h4 className="margin-y-50 text-center">⚙️ Giai đoạn 2: Bắt đầu với JavaScript cơ bản</h4>

      <ul className="list-none">

        <li>🔤 Biến, kiểu dữ liệu, toán tử</li>

        <li>🔁 Vòng lặp, điều kiện, hàm</li>

        <li>🧠 <strong>DOM Manipulation</strong>: thay đổi nội dung HTML bằng JS</li>

        <li>🖱️ <strong>Xử lý sự kiện</strong>: click, hover, submit</li>

        <li>📦 <strong>Thực hành</strong>: Làm một ứng dụng To-Do List đơn giản</li>

      </ul>

    <p>📌 <strong>Mục tiêu</strong>: Hiểu cách <Link to="/programming/frontend/what-is-javascript?">JavaScript</Link> điều khiển giao diện và tương tác người dùng.</p>

    <h4 className="margin-y-50 text-center">🌐 Giai đoạn 3: Làm việc với dữ liệu và API</h4>
    
      <ul className="list-none">

        <li>📡 Gọi API bằng fetch()</li>

        <li>📄 Xử lý JSON</li>

        <li>🔄 Hiển thị dữ liệu động lên giao diện</li>

        <li>🧪 <strong>Thực hành</strong>: Làm ứng dụng xem thời tiết hoặc tin tức</li>

      </ul>

    <p>📌 <strong>Mục tiêu</strong>: Biết cách lấy dữ liệu từ server và hiển thị lên web.</p>

    <h4 className="margin-y-50 text-center">⚛️ Giai đoạn 4: Học React (hoặc Vue nếu thích)</h4>
    
      <ul className="list-none">

        <li>🧩 Component, Props, State</li>

        <li>🔄 Lifecycle, Hooks</li>

        <li>🧠 Quản lý trạng thái với Context hoặc Redux</li>

        <li>🛠️ <strong>Thực hành</strong>: Làm ứng dụng blog hoặc Messenger mini</li>

      </ul>

    <p>📌 <strong>Mục tiêu</strong>: Xây dựng ứng dụng web hiện đại, có logic phức tạp.</p>

    <h4 className="margin-y-50 text-center">🧪 Giai đoạn 5: Dự án thực tế & Git</h4>
    
      <ul className="list-none">

        <li>🧠 <strong>Dự án cuối</strong>: Portfolio, Landing Page, App nhỏ</li>

        <li>🔗 <strong>Học Git</strong>: commit, push, pull, branch</li>

        <li>🚀 Deploy lên GitHub Pages hoặc Vercel</li>

      </ul>

    <p>📌 <strong>Mục tiêu</strong>: Có sản phẩm thật để khoe và dùng khi xin việc hoặc freelance.</p>

    <p className="margin-top-50 text-small">September 11, 2025 - by Copilot</p>
    
  </main>

  </>);
}