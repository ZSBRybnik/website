import { render } from "react-dom";
import App from "./App";
import initTranslations from "./other/i18next";
import * as serviceWorker from "./serviceWorker";
import consoleGreeting from "./other/consoleGreeting";

type RootElement = HTMLElement | null;

export const rootElement: RootElement = document.getElementById("root");

const initApp = async (useServiceWorker?: boolean) => {
  const i18next = await initTranslations();
  consoleGreeting();
  render(<App i18next={i18next} />, rootElement);
  useServiceWorker ? serviceWorker.register() : serviceWorker.unregister();
};

initApp(true);

export default initApp;
