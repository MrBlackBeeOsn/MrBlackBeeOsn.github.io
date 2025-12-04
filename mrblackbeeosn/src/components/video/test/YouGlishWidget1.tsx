import { useEffect, useRef } from 'react';

const YouGlishWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Tạo script element
    const script = document.createElement('script');
    script.src = 'https://youglish.com/public/emb/widget.js';
    script.async = true;
    script.charset = 'utf-8';

    // Thêm script vào document
    document.body.appendChild(script);

    // Dọn dẹp khi component unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={widgetRef}>
      <a
        id="yg-widget-0"
        className="youglish-widget"
        data-query="programming"
        data-lang="english"
        data-accent="us"
        data-zones="us"
        data-components="8415"
        data-video-quality="highres"
        data-bkg-color="#ffffff80" 
        data-link-color="#7971EA" 
        data-ttl-color="#7971EA" 
        data-cap-color="#7971EA" 
        data-marker-color="#A8A4F2" 
        data-panels-bkg-color="#A8A4F2" 
        data-text-color="#2a1530" 
        data-keyword-color="#2a1530"
        rel="nofollow"
        href="https://youglish.com"
      >
        Visit YouGlish.com
      </a>
    </div>
  );
};

export default YouGlishWidget;