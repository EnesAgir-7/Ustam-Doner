import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import DeveloperPopup from './DeveloperPopup';

function Footer() {
  const { t } = useLanguage();
  const [isDeveloperPopupOpen, setIsDeveloperPopupOpen] = useState(false);

  return (
    <footer className="bg-black/90 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ustam Yaprak <span className="text-primary">Döner</span></h3>
            <p className="text-gray-300">{t.footer.description}</p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-primary transition-colors">{t.nav.menu}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{t.contact.info.address}</li>
              <li>
                <a 
                  href="tel:+496211815150" 
                  className="hover:text-primary transition-colors"
                >
                  {t.contact.info.phone}
                </a>
              </li>
              <li>{t.contact.info.email}</li>
              <li className="mt-4">
                <div className="font-semibold">{t.contact.hours.title}</div>
                <div>{t.contact.hours.weekdays}</div>
                <div>{t.contact.hours.weekdaysTime}</div>
                <div className="mt-1">{t.contact.hours.sunday}</div>
                <div>{t.contact.hours.sundayTime}</div>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.followUs}</h4>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@uydbyismailusta" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ustamyaprakdoner?igsh=Nzc1MHE1NHVzcXU3" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com/@ustam-doner?si=K29AhiEydhyFapKg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Ustam Yaprak Döner. {t.footer.rights}
            <span 
              onClick={() => setIsDeveloperPopupOpen(true)}
              className="ml-2 text-primary hover:text-white cursor-pointer transition-colors"
            >
              Developed by Enes AGIR
            </span>
          </p>
        </div>
      </div>

      {/* Developer Popup */}
      <DeveloperPopup 
        isOpen={isDeveloperPopupOpen}
        onClose={() => setIsDeveloperPopupOpen(false)}
      />
    </footer>
  );
}

export default Footer; 