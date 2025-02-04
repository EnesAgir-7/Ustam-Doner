import React from 'react';
import deFlagIcon from '../assets/de-flag.png';
import trFlagIcon from '../assets/tr-flag.png';

function LanguageSelector({ currentLanguage, onLanguageChange }) {
  return (
    <button 
      onClick={() => onLanguageChange(currentLanguage === 'de' ? 'tr' : 'de')}
      className="flex items-center p-2 rounded-full hover:bg-black/20 transition-colors"
    >
      <img 
        src={currentLanguage === 'de' ? trFlagIcon : deFlagIcon} 
        alt={currentLanguage === 'de' ? 'Türkçe' : 'Deutsch'} 
        className="w-6 h-6 rounded-full"
      />
    </button>
  );
}

export default LanguageSelector; 