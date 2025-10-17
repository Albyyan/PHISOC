import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-meta">Latest — 11 Oct 2025</div>
        <h1>Editor's Foreword</h1>
        <p>
          Foreword by the Publications Director. On silence, solitude, and 
          the search for clarity amid the noise of the age.
        </p>
        <div className="read-time">1 min read</div>
      </div>
      
      <div className="hero-image">
        <div className="texture-overlay" />
      </div>
    </section>
  );
}