import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const DEFAULT_LANGUAGE = "tr";
const resources = {
  tr: {
    translation: require("./locales/tr.json"),
  },
  es: {
    translation: require("./locales/es.json"),
  },
};

i18n.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  resources,
});
