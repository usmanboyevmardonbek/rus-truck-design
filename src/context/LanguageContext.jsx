import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, languages } from "../translations/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("app_lang") || "ru";
  });

  const setLanguage = (langId) => {
    if (translations[langId]) {
      setCurrentLang(langId);
      localStorage.setItem("app_lang", langId);
    }
  };

  const t = (key, fallback = "") => {
    return translations[currentLang]?.[key] ?? fallback ?? key;
  };

  const currentLanguageObject =
    languages.find((l) => l.id === currentLang) || languages[1]; // default to RU

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        lang: currentLang,
        setLanguage,
        t,
        languages,
        currentLanguageObject,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
