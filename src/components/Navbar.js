import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Logo dosya uzantısını doğru şekilde belirtin (.png, .jpg vs)
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="bg-black/90 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Ustam Döner Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition-colors">{t.nav.home}</Link>
            <Link to="/menu" className="hover:text-primary transition-colors">{t.nav.menu}</Link>
            <Link to="/about" className="hover:text-primary transition-colors">{t.nav.about}</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">{t.nav.contact}</Link>
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link 
                to="/menu" 
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.menu}
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 