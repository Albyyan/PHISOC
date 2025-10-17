import React from 'react';

const footerSections = [
  {
    title: 'Navigate',
    links: [
      { label: 'Issues', href: '#issues' },
      { label: 'Competitions', href: '#competitions' },
      { label: 'Culture & Identity', href: '#culture' },
      { label: 'Literature & Poetry', href: '#literature' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { label: 'Facebook', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Discord', href: '#' },
      { label: 'Email', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Library', href: '#library' },
      { label: 'Academia', href: '#academia' },
      { label: 'Events', href: '#' },
      { label: 'Membership', href: '#' }
    ]
  },
  {
    title: 'About',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Executive Team', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Join Us', href: '#' }
    ]
  }
];

function FooterSection({ section }) {
  return (
    <div className="footer-section">
      <h4>{section.title}</h4>
      <ul>
        {section.links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {footerSections.map((section) => (
          <FooterSection key={section.title} section={section} />
        ))}
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 UNSW Philosophy Society. All rights reserved.</p>
      </div>
    </footer>
  );
}