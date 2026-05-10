import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Idioma por defecto

  const translations = {
    es: {
      nav_projects: "Proyectos",
      nav_skills: "Habilidades",
      hero_title: "Hola, soy Antonio",
      download_cv: "Descargar CV",
      // Agrega aquí todas tus etiquetas
    },
    en: {
      nav_projects: "Projects",
      nav_skills: "Skills",
      hero_title: "Hi, I'm Antonio",
      download_cv: "Download CV",
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);