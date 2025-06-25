// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./locales/en.json";
import translationAr from "./locales/turk.json";

i18n
  .use(LanguageDetector) // يختار اللغة حسب المتصفح تلقائيًا
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEn,
      },
      turk: {
        translation: translationAr,
      },
    },
    fallbackLng: "en", // لو اللغة مش مدعومة، يستعمل انجليزي
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
