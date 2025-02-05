import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import donerImage from '../assets/Doner.jpeg';
import homepageBg2 from '../assets/homepage_bg2.png';
import gif1 from '../assets/gif/gif1.gif';
import gif2 from '../assets/gif/gif2.gif';
import gif3 from '../assets/gif/gif3.gif';
import SocialMediaPopup from '../components/SocialMediaPopup';

function Home() {
  const { t } = useLanguage();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Rastgele ürünleri seç
  const randomProducts = useMemo(() => {
    const allProducts = [];
    const categories = ['soups', 'doner', 'mainCourses', 'salads', 'desserts'];
    
    // Tüm ürünleri düz bir diziye topla (içecekler hariç)
    categories.forEach(category => {
      if (t.menu.items[category]) {
        Object.values(t.menu.items[category]).forEach(item => {
          allProducts.push({
            ...item,
            category
          });
        });
      }
    });
    
    // Rastgele 4 ürün seç
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [t.menu.items]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Yükseklik ve padding değişiklikleri */}
      <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center -mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 mx-4 md:mx-0 rounded-2xl md:rounded-none"
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

      {/* Öne Çıkan Ürünler Bölümü */}
      <div className="bg-black/90 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-12">
            {t.home.featuredProducts}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {randomProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 border border-primary/20"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {product.title}
                </h3>
                <p className="text-gray-300">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* İkramlıklar Slider Section'ı */}
      <div className="bg-black/90 py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16">
          <h3 className="text-primary text-2xl md:text-3xl font-semibold mb-4">
            {t.home.complimentaryTitle}
          </h3>
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-8">
            {t.home.complimentaryHeading}
          </h2>
          
          <div className="relative">
            <div className="flex animate-scroll">
              {t.home.complimentary.map((item, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-64 mx-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-primary/20
                           transform hover:scale-105 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {item.subtitle}
                  </p>
                </div>
              ))}
              {/* Sonsuz döngü için itemları tekrarla */}
              {t.home.complimentary.map((item, index) => (
                <div 
                  key={`repeat-${index}`}
                  className="flex-shrink-0 w-64 mx-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-primary/20
                           transform hover:scale-105 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sosyal Medya Section'ı */}
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-primary text-2xl md:text-3xl font-semibold mb-4">
          {t.home.socialTitle}
        </h3>
        <h2 className="text-4xl md:text-6xl text-white font-bold mb-6">
          {t.home.socialHeading}
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {t.home.socialDescription}
        </p>
        <button 
          onClick={() => setIsPopupOpen(true)}
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white border border-white rounded-lg 
                    hover:bg-white hover:text-primary hover:border-primary transition-all duration-300
                    text-xl font-bold mb-12"
        >
          {t.home.followButton}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </button>

        {/* Popup */}
        <SocialMediaPopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
        />

        {/* GIF'ler */}
        <div className="flex justify-center gap-8">
          <div className="relative group">
            <img 
              src={gif1} 
              alt="Döner Animation 1" 
              className="w-[300px] h-[200px] rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 rounded-lg"></div>
          </div>
          <div className="relative group">
            <img 
              src={gif2} 
              alt="Döner Animation 2" 
              className="w-[300px] h-[200px] rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 rounded-lg"></div>
          </div>
          <div className="relative group">
            <img 
              src={gif3} 
              alt="Döner Animation 3" 
              className="w-[300px] h-[200px] rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Paralaks Efektli Section */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        {/* Arka plan resmi - Paralaks efekti için fixed pozisyon */}
        <div 
          className="absolute inset-0 w-full h-[120%] -top-10"
          style={{
            backgroundImage: `url(${homepageBg2})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Karartma katmanı */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* İçerik */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              {t.home.forYou || 'Herşey Sizin İçin'}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {t.home.forYouDescription || 'En kaliteli malzemeler, geleneksel tarifler ve özenli servis ile sizlere unutulmaz bir lezzet deneyimi sunuyoruz.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 