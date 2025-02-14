import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Logo dosya uzantısını doğru şekilde belirtin (.png, .jpg vs)
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      {/* Telefon banner */}
      <div className="h-[0.7cm] bg-primary flex items-center justify-center">
        <a 
          href="tel:+496211815150" 
          className="text-white font-semibold text-lg hover:text-black transition-colors"
        >
          {t.contact.info.phone}
        </a>
      </div>

      <nav className={`transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Ustam Yaprak Döner Logo" className="h-16 w-auto" />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-primary transition-colors">{t.nav.home}</Link>
              <Link to="/menu" className="text-white hover:text-primary transition-colors">{t.nav.menu}</Link>
              <Link to="/about" className="text-white hover:text-primary transition-colors">{t.nav.about}</Link>
              <Link to="/contact" className="text-white hover:text-primary transition-colors">{t.nav.contact}</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-primary transition-colors"
            >
              {/* ... menu icon ... */}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar; 