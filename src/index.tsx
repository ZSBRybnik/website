import React, { StrictMode, Suspense } from "react";
import { render } from "react-dom";
import App from "./App";
import initTranslations from "./other/i18next";
import * as serviceWorker from "./serviceWorker";
import consoleGreeting from "./other/consoleGreeting";
import Loader from "./components/Loader/Loader";
import { I18nextProvider } from "react-i18next";

type RootElement = HTMLElement | null;

export const rootElement: RootElement = document.getElementById("root");

const initApp = async () => {
  const i18next = await initTranslations();
  consoleGreeting();
  render(
    <StrictMode>
      <Suspense fallback={<Loader width="100vw" height="100vh" />}>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </Suspense>
    </StrictMode>,
    rootElement
  );

  serviceWorker.register();
}

initApp();