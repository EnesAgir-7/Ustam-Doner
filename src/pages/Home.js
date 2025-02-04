import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import donerImage from '../assets/Doner.jpeg';

function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <div className="relative h-[90vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${donerImage})`
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-4">{t.home.title}</h1>
          <p className="flex items-center justify-center gap-2 text-xl md:text-2xl text-white mb-8">
            <span className="font-['Dancing_Script'] text-2xl md:text-3xl">by</span>
            <span className="font-['Great_Vibes'] text-3xl md:text-4xl text-primary">İsmail Usta</span>
          </p>
          <p className="text-xl md:text-2xl text-white mb-8">{t.home.menuQuestion}</p>
          <Link 
            to="/menu" 
            className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg text-lg transition-colors inline-block"
          >
            {t.home.viewMenu}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 