
import React, { useState, useEffect } from 'react';
import '../styles/pageFadeLoader.css';

// PageFadeLoader Component - keeps navbar visible while content fades in
export default function PageFadeLoader({ children, duration = 600 }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const fadeTimer = setTimeout(() => setFadeIn(true), 50);
    const loadTimer = setTimeout(() => setIsLoading(false), duration);
    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, [duration]);

  return (
    <>
      {isLoading && (
        <div className={`page-fade-overlay ${fadeIn ? 'fade-out' : ''}`} />
      )}
      <div className={`page-fade-content ${fadeIn ? 'fade-in' : ''}`}>
        {children}
      </div>
    </>
  );
}