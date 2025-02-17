import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';
import slider4 from '../assets/slider-4.jpg';

function Menu() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('doner');

  // Slider görselleri için array
  const slides = useMemo(() => [slider1, slider2, slider3, slider4], []);
  
  // Random slide seçimi (component mount edildiğinde bir kere çalışacak)
  const randomSlide = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * slides.length);
    return slides[randomIndex];
  }, [slides]);

  const categories = [
    { id: 'soups', name: t.menu.categories.soups },
    { id: 'doner', name: t.menu.categories.doner },
    { id: 'grills', name: t.menu.categories.grills },
    { id: 'pide', name: t.menu.categories.pide },
    { id: 'pizza', name: t.menu.categories.pizza },
    { id: 'mezeler', name: t.menu.categories.mezeler },
    { id: 'hotAppetizers', name: t.menu.categories.hotAppetizers },
    { id: 'rice', name: t.menu.categories.rice },
    { id: 'salads', name: t.menu.categories.salads },
    { id: 'desserts', name: t.menu.categories.desserts },
    { id: 'beverages', name: t.menu.categories.beverages },
  ];

  const renderMenuItems = () => {
    const items = t.menu.items[activeCategory];
    if (!items) return null;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(items).map(([key, item]) => (
          <div 
            key={key}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 border border-primary/20"
          >
            <h2 className="text-2xl font-semibold mb-2 text-primary">{item.title}</h2>
            <p className="mb-4 text-gray-300">{item.description}</p>
            <p className="text-xl font-semibold text-primary">{item.price}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-64 md:h-96 bg-cover bg-center mt-16"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${randomSlide})`
        }}
      >
        <div className="relative z-20 text-center px-4 space-y-6">
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
        <h3 className="text-4xl md:text-6xl text-white font-bold tracking-wider mb-8">
          {t.menu.hero.discover}
        </h3>
        
        {/* Kategori Butonları */}
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-3 
                  rounded-full 
                  text-lg 
                  border 
                  transition-all 
                  duration-300 
                  ${
                    activeCategory === category.id
                      ? 'bg-primary border-primary text-white'
                      : 'bg-white border-primary text-primary hover:bg-primary hover:text-white'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-12">
        {renderMenuItems()}
      </div>
    </div>
  );
}

export default Menu; 