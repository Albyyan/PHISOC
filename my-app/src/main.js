import './style.css';
import backgroundImage from './asset/Background.png';

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
    nameBanner.innerHTML = 'UNSW<br>PHILOSOPHY<br>SOCIETY';
    document.body.appendChild(nameBanner);

    setTimeout(() => {
      nameBanner.classList.add('loaded');
    }, 10);

    // Create menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.textContent = 'MENU';
    document.body.appendChild(menuButton);

    // Create menu tab
    const menuTab = document.createElement('div');
    menuTab.className = 'menu-tab';
    menuTab.innerHTML = `
      <ul>
        <li>Home</li>
        <li>Events</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    `;
    document.body.appendChild(menuTab);

    // Toggle menu
    let isOpen = false;
    menuButton.addEventListener('click', () => {
      isOpen = !isOpen;
      menuTab.classList.toggle('open', isOpen);
    });

    // Add scroll effect for name banner
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const translateY = -50 - (scrollY * 0.2); // Move up as user scrolls
      nameBanner.style.transform = `translateY(${translateY}%) scale(1, 1)`;
    });
  }, 2000); // matches 2s spin time
});