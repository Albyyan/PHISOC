import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import Footer from '../components/Footer';
import backgroundImage from '../asset/Background.png';
import '../styles/welcome.css';

export default function WelcomePage() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setLoaded(true), 10);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const banner = document.querySelector('.name-banner');
      const textSection = document.querySelector('.text-section');
      
      // Only apply parallax to banner and text section, not navbar
      if (banner && textSection) {
        const bannerTranslateY = -50 - scrollY * 0.2;
        const textTranslateY = -50 - scrollY * 0.15;
        
        banner.style.transform = `translateY(${bannerTranslateY}%) scale(1, 1)`;
        textSection.style.transform = `translateY(${textTranslateY}%) scale(1, 1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLearnMore = () => {
    navigate('/about');
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="welcome-page">      
      <div 
        className="app-background zoom-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      <div className={`name-banner ${loaded ? 'loaded' : ''}`}>
        <div>UNSW</div>
        <div>PHILOSOPHY</div>
        <div>SOCIETY.</div>
      </div>

      <div className={`text-section ${loaded ? 'loaded' : ''}`}>
        <p>
          Welcome to the UNSW Philosophy Society, where curiosity meets 
          community and ideas come alive.
        </p>
        <p>
          Join us as we explore the fundamental questions that shape our 
          understanding of existence, knowledge, ethics, and reality itself.
        </p>
        <button className="learn-more-btn" onClick={handleLearnMore}>
          LEARN MORE
        </button>
      </div>

      <Footer />
    </div>
  );
}