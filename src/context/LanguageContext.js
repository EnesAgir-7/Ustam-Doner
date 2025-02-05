import React, { createContext, useState, useContext } from 'react';
import de from '../translations/de';
import tr from '../translations/tr';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('de');
  const translations = language === 'de' ? de : tr;

  const value = {
    language,
    setLanguage,
    t: translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 