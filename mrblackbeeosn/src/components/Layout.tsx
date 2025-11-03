import React from 'react';
import '/public/assets/css/style.css'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from '@/components/BackToTop';
import ViewCounter from '@/components/ViewCounter';
import { ThemeProvider, useTheme } from '@/components/ThemeContext';
import PatternBackground from '@/components/PatternBackground';
import ThemeControls from '@/components/ThemeControls';

export default function Layout() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

const MainLayout: React.FC = () => {
  // Nếu bạn không cần sử dụng theme data ở đây, có thể xóa hoàn toàn
  return (
    <div>
      <PatternBackground />
      <ThemeControls />

      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <BackToTop />
        <Footer />
      </div>
    </div>
  );
};