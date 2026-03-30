import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Left Title */}
      <p className="navbar-title">
        FergusonSoftwareSolutions.com
      </p>

      {/* Hamburger (mobile only) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="navBarButton" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/projects" className="navBarButton" onClick={() => setMenuOpen(false)}>Our Projects</Link>
        <Link to="/about" className="navBarButton" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/contact" className="navBarButton" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/services" className="navBarButton" onClick={() => setMenuOpen(false)}>Services</Link>
      </div>

    </nav>
  );
}

export default NavBar;
