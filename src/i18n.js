import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationEN from './lang/EnTranslation.json'; // English
import translationFR from './lang/FrTranslation.json'; // French (example)

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
  supportedLngs: ['en', 'fr'],
  resources,
  fallbackLng: 'en',
  keySeparator: false, // Allow for nested translations without using dots
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;