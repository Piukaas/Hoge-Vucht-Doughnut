import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "./translations.json";

const resources = Object.keys(translations).reduce((acc, key) => {
  Object.keys(translations[key]).forEach((lang) => {
    if (!acc[lang]) {
      acc[lang] = { translation: {} };
    }
    acc[lang].translation[key] = translations[key][lang];
  });
  return acc;
}, {});

const storedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
