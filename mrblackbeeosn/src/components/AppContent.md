// App.tsx
import React from 'react';
import { ThemeProvider, useTheme } from '@/components/ThemeContext';
import PatternBackground from '@/components/PatternBackground';
import ThemeControls from '@/components/ThemeControls';

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent: React.FC = () => {
  const { themeConfig } = useTheme();

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: themeConfig.backgroundColor,
      transition: 'background-color 0.5s ease-in-out'
    }}>
      <PatternBackground />
      <ThemeControls />
      
      <main style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '100px 20px 50px'
      }}>
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            color: '#2d3748',
            marginBottom: '20px'
          }}>
            🌿 Blog Thiên Nhiên Diệu Kỳ 🦋
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#718096',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Khám phá vẻ đẹp của thiên nhiên
          </p>
        </header>

        <section style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.6)'
        }}>
          {/* Nội dung blog */}
        </section>
      </main>
    </div>
  );
};