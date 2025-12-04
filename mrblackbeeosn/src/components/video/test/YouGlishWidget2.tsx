import { useEffect, useRef } from 'react';

const YouGlishWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://youglish.com/public/emb/widget.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={widgetRef} style={{ 
      width: '100%', 
      maxWidth: '800px', 
      margin: '0 auto',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <a
        id="yg-widget-0"
        className="youglish-widget"
        data-query="programming"
        data-lang="english"
        data-accent="us"
        data-zones="all"
        data-components="19343"
        data-video-quality="highres"
        
        // Sử dụng format màu đúng cho YouGlish
        data-bkg-color="theme_light"  // hoặc "theme_dark"
        data-link-color="#16744782"    // Màu dạng decimal (#FF5732 = 16744782)
        data-ttl-color="#7971EA"       // Hex không có #
        data-cap-color="#7971EA"       // Hex không có #
        data-marker-color="#A8A4F2"    // Hex không có #
        data-panels-bkg-color="#F8F9FA" // Màu nền panel
        data-text-color="#2A1530"      // Màu chữ
        data-keyword-color="#2A1530"   // Màu keyword
        data-search-bkg-color="#FFFFFF" // Màu nền search
        data-search-text-color="#2A1530" // Màu chữ search
        
        rel="nofollow"
        href="https://youglish.com"
        style={{ display: 'block', width: '100%', height: '400px' }}
      >
        Visit YouGlish.com
      </a>
    </div>
  );
};

export default YouGlishWidget;