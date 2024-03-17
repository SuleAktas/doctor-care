import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import trTranslations from "./locales/tr.json";
import esTranslations from "./locales/es.json";

const userLanguage = navigator.language.split("-")[0];
let DEFAULT_LANGUAGE = "es";

if (userLanguage === "tr") {
  DEFAULT_LANGUAGE = "tr";
}

const resources = {
  tr: {
    translation: trTranslations,
  },
  es: {
    translation: esTranslations,
  },
};

i18n.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  resources,
});
