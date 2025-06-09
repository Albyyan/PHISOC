import './style.css';
import backgroundImage from './asset/Background.png';
import { createMenu } from './menu.js';

const app = document.querySelector('#app');

// Create loading screen
const loadingScreen = document.createElement('div');
loadingScreen.id = 'loading-screen';

const loader = document.createElement('div');
loader.className = 'loader';
loadingScreen.appendChild(loader);
document.body.appendChild(loadingScreen);

// Wait for everything to load
window.addEventListener('load', () => {
  setTimeout(() => {
    // Remove loading screen
    loadingScreen.remove();

    // Set background
    app.style.backgroundImage = `url(${backgroundImage})`;
    app.style.backgroundSize = 'cover';
    app.style.backgroundPosition = 'center';
    app.style.minHeight = '100vh';

    // Trigger zoom-out animation
    app.classList.add('zoom-out');

    // Create name banner
    const nameBanner = document.createElement('div');
    nameBanner.className = 'name-banner';
    nameBanner.innerHTML = 'UNSW<br>PHILOSOPHY<br>SOCIETY.';
    document.body.appendChild(nameBanner);

    // Create text section
    const textSection = document.createElement('div');
    textSection.className = 'text-section';
    textSection.innerHTML = `
      <p>Welcome to the UNSW Philosophy Society, where curiosity meets community and ideas come alive.</p>
      <p>Join us as we explore the fundamental questions that shape our understanding of existence, knowledge, ethics, and reality itself.</p>
      <button class="learn-more-btn">LEARN MORE</button>
    `;
    document.body.appendChild(textSection);

    setTimeout(() => {
      nameBanner.classList.add('loaded');
      textSection.classList.add('loaded');
    }, 10);

    // Create menu using the imported function
    createMenu();

    // Add scroll effect for name banner and text section
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const bannerTranslateY = -50 - (scrollY * 0.2); // Move up as user scrolls
      const textTranslateY = -50 - (scrollY * 0.15); // Move up slightly slower than banner
      
      nameBanner.style.transform = `translateY(${bannerTranslateY}%) scale(1, 1)`;
      textSection.style.transform = `translateY(${textTranslateY}%) scale(1, 1)`;
    });
  }, 2000); // matches 2s spin time
});