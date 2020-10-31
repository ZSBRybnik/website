import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import initTranslations from "./other/i18next";

describe("App", () => {
  test("App renders", async () => {
    const i18next = await initTranslations();
    render(<App i18next={i18next} />);
    screen.debug();
  });
});
