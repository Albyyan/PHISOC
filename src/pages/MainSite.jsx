import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ArticlesGrid from '../components/ArticlesGrid';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import '../styles/mainsite.css';
import PageFadeLoader from '../components/PageFadeLoader';

export default function MainSite() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Always start at top on route enter
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Show loading screen briefly (adjust as you like)
    const t = setTimeout(() => setLoading(false), 2000);

    // Smooth scroll for in-page anchors
    const handleAnchorClick = (e) => {
      const el = e.target;
      if (el.tagName === 'A' && el.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(el.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      clearTimeout(t);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="main-site">
      <NavBar />
        <PageFadeLoader duration={600}>
      <HeroSection />
      <ArticlesGrid />
      <AboutSection />
        </PageFadeLoader>
      <Footer />
    </div>
  );
}
