import './style.css';
import backgroundImage from './asset/Background.png';
import { createMenu } from './menu.js';
import { renderEventsPage } from './events.js';

const app = document.querySelector('#app');

// Loading screen
const loadingScreen = document.createElement('div');
loadingScreen.id = 'loading-screen';

const loader = document.createElement('div');
loader.className = 'loader';
loadingScreen.appendChild(loader);
document.body.appendChild(loadingScreen);

window.addEventListener('load', () => {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');

  setTimeout(() => {
    loadingScreen.remove();

    // === EVENTS PAGE ===
    if (page === 'events') {
      renderEventsPage();
      return;
    }

    // === HOMEPAGE ===
    app.style.backgroundImage = `url(${backgroundImage})`;
    app.style.backgroundSize = 'cover';
    app.style.backgroundPosition = 'center';
    app.style.minHeight = '100vh';
    app.classList.add('zoom-out');

    const nameBanner = document.createElement('div');
    nameBanner.className = 'name-banner';
    nameBanner.innerHTML = 'UNSW<br>PHILOSOPHY<br>SOCIETY.';
    document.body.appendChild(nameBanner);

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

    createMenu();

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const bannerTranslateY = -50 - scrollY * 0.2;
      const textTranslateY = -50 - scrollY * 0.15;

      nameBanner.style.transform = `translateY(${bannerTranslateY}%) scale(1, 1)`;
      textSection.style.transform = `translateY(${textTranslateY}%) scale(1, 1)`;
    });
  }, 2000);
});
