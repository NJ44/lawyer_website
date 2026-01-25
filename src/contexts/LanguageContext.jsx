import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('he');

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    // Update HTML lang attribute
    document.documentElement.lang = language;
    // Set text direction based on language
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    // Cycle between he, en, es
    setLanguage(prev => {
      if (prev === 'he') return 'en';
      if (prev === 'en') return 'es';
      return 'he';
    });
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

