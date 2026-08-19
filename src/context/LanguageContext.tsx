'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    academics: 'Academics',
    facilities: 'Facilities',
    notices: 'Notices',
    admissions: 'Admissions',
    contact: 'Contact',
    applyNow: 'Apply Now',
    schoolName: 'PM SHRI Middle School Hiranpur (Boys)',
    schoolTagline: 'Excellence in Education',
    location: 'Hiranpur, Pakur, Jharkhand',
    callUs: 'Call Us',
    emailUs: 'Email',
    hours: 'School Hours',
    switchLanguage: 'Language',
    blogs: 'News & Stories',
    admin: 'Admin',
  },
  hi: {
    home: 'होम',
    about: 'परिचय',
    academics: 'शिक्षा एवं पाठ्यक्रम',
    facilities: 'सुविधाएं',
    notices: 'सूचना पट्ट',
    admissions: 'नामांकन',
    contact: 'संपर्क',
    applyNow: 'आवेदन करें',
    schoolName: 'पीएम श्री मध्य विद्यालय हिरणपुर (बालक)',
    schoolTagline: 'शिक्षा में उत्कृष्टता',
    location: 'हिरणपुर, पाकुड़, झारखंड',
    callUs: 'फोन',
    emailUs: 'ईमेल',
    hours: 'संचालन समय',
    switchLanguage: 'भाषा',
    blogs: 'समाचार व ब्लॉग',
    admin: 'एडमिन',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('school_lang') as Language | null;
    if (saved && (saved === 'en' || saved === 'hi')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('school_lang', lang);
    }
  };

  const t = (key: string) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
