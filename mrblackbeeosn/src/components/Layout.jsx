import React from 'react';
import '/public/assets/css/style.css'

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from './BackToTop';
import ViewCounter from './ViewCounter';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}