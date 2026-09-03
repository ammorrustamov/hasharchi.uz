/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import translations from '../i18n/translations';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'hasharchi-lang';

const DEFAULT_LANGUAGE = 'ru';

const SUPPORTED_LANGUAGES = ['uz_lat', 'uz_cyr', 'ru'];

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const storedLanguage = localStorage.getItem(STORAGE_KEY);

      if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
        return storedLanguage;
      }

      return DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  });

  const setLanguage = useCallback((lang) => {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
      return;
    }

    setLanguageState(lang);

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage mavjud bo'lmasa ham sayt ishlashda davom etadi
    }
  }, []);

  const t = useCallback(
    (key) => {
      // Avval tanlangan tildan qidiramiz
      const currentTranslation = translations[language]?.[key];

      if (currentTranslation !== undefined) {
        return currentTranslation;
      }

      // Agar tanlangan tilda yo'q bo'lsa, rus tilidan fallback
      const fallbackTranslation = translations[DEFAULT_LANGUAGE]?.[key];

      if (fallbackTranslation !== undefined) {
        return fallbackTranslation;
      }

      // Key umuman mavjud bo'lmasa
      return key;
    },
    [language]
  );

  useEffect(() => {
    // HTML lang atributini to'g'ri o'rnatish
    if (language === 'ru') {
      document.documentElement.lang = 'ru';
    } else if (language === 'uz_cyr') {
      document.documentElement.lang = 'uz-Cyrl';
    } else {
      document.documentElement.lang = 'uz';
    }

    // Boshqa CSS/JS qismlar uchun ham tilni belgilab qo'yamiz
    document.documentElement.setAttribute('data-lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        supportedLanguages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    );
  }

  return context;
}