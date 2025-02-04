import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import homeImage from '../assets/home.jpeg';

function Menu() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${homeImage})`
          }}
        />
        <div className="relative z-10 text-center px-4 space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl text-white">
              {t.menu.hero.mainTitle}
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-primary">
              {t.menu.hero.subTitle}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t.menu.hero.slogan}
          </p>
        </div>
      </div>

      {/* Discover Section */}
      <div className="text-center py-12 bg-black/50">
        <h3 className="text-4xl md:text-6xl text-white font-bold tracking-wider">
          {t.menu.hero.discover}
        </h3>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Et Döner */}
          <div className="bg-black/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4">{t.menu.beefDoner.title}</h2>
            <p className="mb-2 text-gray-300">{t.menu.beefDoner.description}</p>
            <p className="text-primary font-bold text-xl">{t.menu.beefDoner.price}</p>
          </div>

          {/* Tavuk Döner */}
          <div className="bg-black/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4">{t.menu.chickenDoner.title}</h2>
            <p className="mb-2 text-gray-300">{t.menu.chickenDoner.description}</p>
            <p className="text-primary font-bold text-xl">{t.menu.chickenDoner.price}</p>
          </div>

          {/* İskender */}
          <div className="bg-black/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4">{t.menu.iskender.title}</h2>
            <p className="mb-2 text-gray-300">{t.menu.iskender.description}</p>
            <p className="text-primary font-bold text-xl">{t.menu.iskender.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu; 