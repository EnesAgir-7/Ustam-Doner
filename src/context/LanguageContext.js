import React, { createContext, useState, useContext } from 'react';
import de from '../translations/de';
import tr from '../translations/tr';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('de');
  const translations = language === 'de' ? de : tr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
} 