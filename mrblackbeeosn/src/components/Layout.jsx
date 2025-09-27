import '/public/assets/css/style.css'

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from './BackToTop';
import Blog from './Blog';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Blog />
      <main>
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}