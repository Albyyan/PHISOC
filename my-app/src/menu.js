// menu.js
import './menu.css';
import instaIcon from './asset/insta.png';
import discordIcon from './asset/discord.png';
import arcIcon from './asset/arc.png';
import emailIcon from './asset/email.png';
import facebookIcon from './asset/facebook.png';

export function createMenu() {
  // Create menu button
  const menuButton = document.createElement('button');
  menuButton.className = 'menu-button';
  menuButton.textContent = 'MENU';
  document.body.appendChild(menuButton);

  // Create menu tab
  const menuTab = document.createElement('div');
  menuTab.className = 'menu-tab';
  
  // Create ul element
  const ul = document.createElement('ul');
  
  // Define menu items with their corresponding pages
  const menuItems = [
    { text: 'Home', page: 'index.html' },
    { text: 'Events', page: 'events.html' },
    { text: 'About', page: 'about.html' },
  ];
  
  // Create li elements with click handlers
  menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.text;
    
    // Add click handler for navigation
    li.addEventListener('click', () => {
      window.location.href = item.page;
    });
    
    ul.appendChild(li);
  });
  
  menuTab.appendChild(ul);
  
  // Create social icons container
  const socialContainer = document.createElement('div');
  socialContainer.className = 'social-icons';
  
  // Define social media icons with their corresponding links/actions
  const socialIcons = [
    { src: instaIcon, alt: 'Instagram', link: 'https://www.instagram.com/unswphisoc/'},
    { src: discordIcon, alt: 'Discord', link: 'https://discord.gg/8HWDGkwkfB' },
    { src: arcIcon, alt: 'Arc', link: 'https://www.arc.unsw.edu.au/get-involved/opportunity?name=Philosophy%20Society' },
    { src: emailIcon, alt: 'Email', action: 'mailto:unswphilosophysociety@gmail.com ' },
    { src: facebookIcon, alt: 'Facebook', link: 'https://www.facebook.com/unswphisoc' }
  ];
  
  // Create icon elements
  socialIcons.forEach(icon => {
    const iconElement = document.createElement('img');
    iconElement.src = icon.src;
    iconElement.alt = icon.alt;
    iconElement.className = 'social-icon';
    
    // Add click handler
    iconElement.addEventListener('click', () => {
      if (icon.action) {
        window.location.href = icon.action;
      } else if (icon.link) {
        window.open(icon.link, '_blank');
      }
    });
    
    socialContainer.appendChild(iconElement);
  });
  
  menuTab.appendChild(socialContainer);
  document.body.appendChild(menuTab);

  // Toggle menu functionality
  let isOpen = false;
  menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    isOpen = !isOpen;
    menuTab.classList.toggle('open', isOpen);
    console.log('Menu clicked, isOpen:', isOpen);
  });

  return { menuButton, menuTab };
}