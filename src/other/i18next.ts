import i18next, { i18n, Module, ThirdPartyModule } from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextDetector from "i18next-browser-languagedetector";
import i18nextBackend from "i18next-xhr-backend";
import { rootElement } from "../index";

type InitTranslations = () => Promise<i18n>;
type RemoveLoader = (loader: Loader) => void;
type SetupTranslation = <T extends Module>(i18next: i18n, ...modules: T[]) => Promise<i18n>;
type Loader = HTMLElement | null;

const fixedI18NextDetector: ThirdPartyModule = i18nextDetector as unknown as ThirdPartyModule;
const fixedI18NextBackend: ThirdPartyModule = i18nextBackend as unknown as ThirdPartyModule;

const initTranslations: InitTranslations = async (): Promise<i18n> => {
  const loader: Loader = document.querySelector("#loader");
  const i18nextWithModules = await setupTranslation(i18next, initReactI18next, fixedI18NextDetector, fixedI18NextBackend);
  removeLoader(loader);
  return i18nextWithModules;
};

const removeLoader: RemoveLoader = (loader: Loader): void => {
  loader!.remove();
  document.body.style.overflow = "auto";
  rootElement!.style.display = "block";
}

export const setupTranslation: SetupTranslation = async <T extends Module>(i18next: i18n, ...modules: T[]): Promise<i18n> => {
  modules.forEach((module: T) => {
    i18next = i18next.use(module);
  });
  await i18next.init(
      ({
        load: "languageOnly",
        backend: {
          loadPath: "/locales/{{lng}}.json",
        },
        fallbackLng: "pl",
        interpolation: {
          escapeValue: false,
        },
      }),
    );
  return i18next;
} 

export default initTranslations;
