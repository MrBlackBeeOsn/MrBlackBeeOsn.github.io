import { useEffect, useRef, useState } from 'react';

interface YouGlishWidgetProps {
  query?: string;
  lang?: string;
  accent?: string;
  className?: string;
}

const YouGlishWidget: React.FC<YouGlishWidgetProps> = ({
  query = "programming",
  lang = "english",
  accent = "us",
  className = ""
}) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://youglish.com/public/emb/widget.js';
    script.async = true;
    script.charset = 'utf-8';
    
    script.onload = () => {
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={widgetRef} 
      className={`youglish-container ${className} ${isLoading ? 'loading' : ''}`}
    >
      <a
        id="yg-widget-0"
        className="youglish-widget youglish-widget-element"
        data-query={query}
        data-lang={lang}
        data-accent={accent}
        data-zones="all"
        data-components="19343"
        data-video-quality="highres"
        data-bkg-color="theme_light"
        data-link-color="7971EA"
        data-ttl-color="7971EA"
        data-cap-color="4A5568"
        data-marker-color="A8A4F2"
        data-panels-bkg-color="FFFFFF"
        data-text-color="2D3748"
        data-keyword-color="7971EA"
        data-search-bkg-color="FFFFFF"
        data-search-text-color="2D3748"
        data-btn-color="7971EA"
        data-btn-text-color="FFFFFF"
        rel="nofollow"
        href="https://youglish.com"
      >
        Visit YouGlish.com
      </a>
    </div>
  );
};

export default YouGlishWidget;