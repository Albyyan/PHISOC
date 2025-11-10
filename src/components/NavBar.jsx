// src/components/NavBar.jsx
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../asset/logo.png';

const navItems = [
  { label: 'About Us', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Library', to: '/library' },
  { label: 'Get Involved', to: '/getinvolved' },
  { label: 'Submit', to: '/submit' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const baseLinkClass = 'nav-link';
  const activeLinkClass = 'nav-link active';

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo" aria-label="UNSW Philosophy Society Home">
          <img src={logo} alt="UNSW Philosophy Society Logo" className="logo-img" />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links desktop-only">
          {navItems.slice(0, 4).map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? activeLinkClass : baseLinkClass)}
                end
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Submit Button */}
        <div className="nav-actions desktop-only">
          <Link to="/submit" className="btn-subscribe" aria-label="Submit to the Library">
            Submit
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="hamburger mobile-only" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`hamburger-line ${open ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${open ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${open ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? activeLinkClass : baseLinkClass)}
                end
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}