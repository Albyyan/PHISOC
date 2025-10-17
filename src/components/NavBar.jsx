// src/components/NavBar.jsx
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../asset/logo.png';

const navItems = [
  { label: 'About Us', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Library', to: '/library' },
  { label: 'Get Involved', to: '/getinvolved' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const baseLinkClass = 'nav-link';
  const activeLinkClass = 'nav-link active'; // style `.active` in your CSS

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        {/* Logo: send folks to the welcome page ("/") by default.
           If you prefer the dashboard as home, change to "/main". */}
        <Link to="/main" className="logo" aria-label="UNSW Philosophy Society Home">
          <img src={logo} alt="UNSW Philosophy Society Logo" className="logo-img" />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
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

        {/* Right actions */}
        <div className="nav-actions">
          <Link to="/submit" className="btn-subscribe" aria-label="Submit to the Library">
            Submit
          </Link>
          {/* Optional: add a secondary action
          <a href="https://your-mailing-list-url" className="btn-secondary">Subscribe</a>
          */}
        </div>
      </div>
    </nav>
  );
}
