import React from 'react';
import deFlagIcon from '../assets/de-flag.png';
import trFlagIcon from '../assets/tr-flag.png';
import { useLanguage } from '../context/LanguageContext';

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
        <ul className="flex flex-col gap-2">
          <li>
            <button 
              onClick={() => setLanguage('de')}
              className={`flex items-center gap-2 px-3 py-2 rounded transition-colors
                ${language === 'de' ? 'bg-primary text-white' : 'hover:bg-white/10 text-white'}`}
            >
              <img 
                src={deFlagIcon}
                alt="Deutsch" 
                className="w-6 h-4 object-cover"
              />
              <span className="text-sm font-medium">DE</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => setLanguage('tr')}
              className={`flex items-center gap-2 px-3 py-2 rounded transition-colors
                ${language === 'tr' ? 'bg-primary text-white' : 'hover:bg-white/10 text-white'}`}
            >
              <img 
                src={trFlagIcon}
                alt="Türkçe" 
                className="w-6 h-4 object-cover"
              />
              <span className="text-sm font-medium">TR</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LanguageSelector; 