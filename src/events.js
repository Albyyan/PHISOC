// src/events.js
import './content.css';
import eventBackground from './asset/EventBackground.png';
import rtPainting from './asset/RTPainting.png';
import socialPainting from './asset/SocialPainting.png';
import arcPainting from './asset/ARCPainting.png';
import { createMenu } from './menu.js';

export function renderEventsPage() {
  const app = document.querySelector('#app');
  app.style.backgroundImage = `url(${eventBackground})`;
  app.style.backgroundSize = 'cover';
  app.style.backgroundPosition = 'center';
  app.style.minHeight = '100vh';
  app.classList.add('zoom-out');

  createMenu();

  // Create the page title
  const title = document.createElement('div');
  title.className = 'page-title';
  title.textContent = 'OUR EVENTS';
  document.body.appendChild(title);

  // Create the main content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'content-wrapper';
  
  // Create the intro section
  const intro = document.createElement('div');
  intro.className = 'intro-section';
  
  contentWrapper.appendChild(intro);

  // Create the main sections container
  const sectionsContainer = document.createElement('div');
  sectionsContainer.className = 'main-sections';
  
  // Section data with images
  const sectionsData = [
    {
      title: 'Philosophical Roundtables',
      description: 'Join us for intimate discussions on classical and contemporary philosophical topics. Explore questions about ethics, metaphysics, and the nature of reality in a welcoming environment.',
      image: rtPainting,
      reverse: false
    },
    {
      title: 'Social Events',
      description: 'Connect with fellow philosophy enthusiasts at our regular social gatherings. From casual coffee chats to themed parties, build lasting friendships within our community.',
      image: socialPainting,
      reverse: true
    },
    {
      title: 'ARC O-Week',
      description: 'Meet us during O-Week at the ARC Festival! Discover what the Philosophy Society has to offer and sign up to join our vibrant community of thinkers and questioners.',
      image: arcPainting,
      reverse: false
    }
  ];

  // Create sections with alternating layout
  sectionsData.forEach((sectionData, index) => {
    const section = document.createElement('div');
    section.className = 'content-section';
    if (sectionData.reverse) {
      section.classList.add('reverse');
    }
    
    // Create content div
    const content = document.createElement('div');
    content.className = 'section-content';
    
    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = sectionData.title;
    
    const description = document.createElement('p');
    description.className = 'section-description';
    description.textContent = sectionData.description;
    
    content.appendChild(title);
    content.appendChild(description);
    
    // Create image div
    const imageDiv = document.createElement('div');
    imageDiv.className = 'section-image';
    
    const img = document.createElement('img');
    img.src = sectionData.image;
    img.alt = sectionData.title;
    
    imageDiv.appendChild(img);
    
    // Add to section
    section.appendChild(content);
    section.appendChild(imageDiv);
    
    sectionsContainer.appendChild(section);
  });

  contentWrapper.appendChild(sectionsContainer);
  document.body.appendChild(contentWrapper);

  setTimeout(() => {
    title.classList.add('loaded');
  }, 10);

  // Add scroll effect for title fade
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const fadeStart = windowHeight * 0.2; // Start fading at 20% of viewport height
    const fadeEnd = windowHeight * 0.3; // Complete fade at 30% of viewport height
    
    let opacity = 1;
    
    if (scrollY > fadeStart) {
      const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
      opacity = Math.max(0, 1 - fadeProgress);
    }
    
    title.style.opacity = opacity;
  };

  window.addEventListener('scroll', handleScroll);

  // Add scroll animation for sections
  const observeSections = () => {
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
  };

  setTimeout(observeSections, 100);
}