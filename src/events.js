// src/events.js
import './events.css';
import eventBackground from './asset/EventBackground.png';
import { createMenu } from './menu.js';

export function renderEventsPage() {
  const app = document.querySelector('#app');
  app.style.backgroundImage = `url(${eventBackground})`;
  app.style.backgroundSize = 'cover';
  app.style.backgroundPosition = 'center';
  app.style.minHeight = '100vh';
  app.classList.add('zoom-out');

  createMenu();

  const content = document.createElement('div');
  content.className = 'events-text-section';
  content.innerHTML = `
    <h1 style="font-size: 3rem; color: #C9A78C;">Upcoming Events</h1>
    <p>Stay tuned for our exciting upcoming events, including philosophy talks, debates, and socials!</p>
  `;
  document.body.appendChild(content);

  setTimeout(() => {
    content.classList.add('loaded');
  }, 10);
}
