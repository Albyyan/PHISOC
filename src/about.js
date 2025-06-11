// src/about.js
import './content.css';
import aboutBackground from './asset/AboutBackground.png';
import { createMenu } from './menu.js';

export function renderAboutPage() {
  const app = document.querySelector('#app');
  app.style.backgroundImage = `url(${aboutBackground})`;
  app.style.backgroundSize = 'cover';
  app.style.backgroundPosition = 'center';
  app.style.minHeight = '100vh';
  app.classList.add('zoom-out');

  createMenu();

  // Create the page title
  const title = document.createElement('div');
  title.className = 'page-title';
  title.textContent = 'ABOUT US';
  document.body.appendChild(title);

  // Create the main content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'content-wrapper';
  
  // Create the main sections container
  const sectionsContainer = document.createElement('div');
  sectionsContainer.className = 'main-sections';
  
  // Create single content section
  const section1 = document.createElement('div');
  section1.className = 'content-section';
  
  const mainText = document.createElement('p');
  mainText.className = 'about-text';
  mainText.textContent = 'The UNSW Philosophy Society is a vibrant community of students passionate about exploring the deepest questions of human existence. We host regular discussions, debates, and social events where members can engage with philosophical ideas in a welcoming and intellectually stimulating environment. Whether you\'re a seasoned philosopher or just curious about life\'s big questions, you\'ll find a home with us. Our community spans all levels of philosophical experience, from first-year students discovering philosophy for the first time to seasoned scholars pursuing advanced degrees. Founded on the principle that philosophy belongs to everyone, our society creates spaces where ancient wisdom meets contemporary challenges. We explore everything from classical texts by Aristotle and Kant to cutting-edge discussions on artificial intelligence ethics and environmental philosophy. Our members come from diverse academic backgrounds - not just philosophy majors, but students from engineering, medicine, law, arts, and beyond, all united by curiosity and a love of meaningful conversation. Through our activities, we aim to develop critical thinking skills, foster intellectual humility, and build lasting friendships founded on shared wonder about the world. Join us in questioning assumptions, examining beliefs, and discovering new perspectives that will enrich your university experience and beyond.';
  
  section1.appendChild(mainText);
  sectionsContainer.appendChild(section1);

  contentWrapper.appendChild(sectionsContainer);
  document.body.appendChild(contentWrapper);

  setTimeout(() => {
    title.classList.add('loaded');
  }, 10);

  // Add scroll effect for title fade
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const fadeStart = windowHeight * 0.05; // Start fading at 20% of viewport height
    const fadeEnd = windowHeight * 0.1; // Complete fade at 30% of viewport height
    
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