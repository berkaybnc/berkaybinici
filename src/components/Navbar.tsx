import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">BB</a>
      <ul className="nav-links">
        <li><a href="#about">Hakkımda</a></li>
        <li><a href="#skills">Yetenekler</a></li>
        <li><a href="#experience">Deneyim</a></li>
        <li><a href="#certifications">Sertifikalar</a></li>
        <li><a href="#education">Eğitim</a></li>
        <li><a href="#contact" className="nav-cta">İletişim</a></li>
      </ul>
    </nav>
  );
}
