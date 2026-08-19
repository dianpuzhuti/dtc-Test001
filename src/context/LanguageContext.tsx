import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage, LanguageOption } from '../types';
import { SUPPORTED_LANGUAGES, TRANSLATIONS } from '../i18n/translations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  currentLanguage: LanguageOption;
  languages: LanguageOption[];
  t: typeof TRANSLATIONS.en;
  formatPrice: (priceInUSD: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem('peptiderm_lang') as SupportedLanguage;
      if (saved && ['en', 'fr', 'ru', 'es'].includes(saved)) {
        return saved;
      }
      const browserLang = navigator.language.slice(0, 2).toLowerCase();
      if (browserLang === 'fr') return 'fr';
      if (browserLang === 'ru') return 'ru';
      if (browserLang === 'es') return 'es';
    } catch {
      // Fallback
    }
    return 'en';
  });

  const setLanguage = (newLang: SupportedLanguage) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('peptiderm_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const currentLanguage =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const formatPrice = (priceInUSD: number) => {
    switch (language) {
      case 'fr':
        return `${priceInUSD}€`;
      case 'ru':
        return `${Math.round(priceInUSD * 92)}₽`;
      case 'es':
        return `$${priceInUSD}`;
      case 'en':
      default:
        return `$${priceInUSD}`;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentLanguage,
        languages: SUPPORTED_LANGUAGES,
        t,
        formatPrice
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
