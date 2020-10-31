import { InitOptions } from "i18next";

const i18nextOptions: InitOptions = {
  load: "languageOnly",
  backend: {
    loadPath: "/locales/{{lng}}.json",
  },
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
};

export default i18nextOptions;
