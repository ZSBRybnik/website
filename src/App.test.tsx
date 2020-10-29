import React, { StrictMode, Suspense } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Loader from "./components/Loader/Loader";

describe("App", () => {
  test("App renders", async () => {
    render(
      <StrictMode>
        <Suspense fallback={<Loader width="100vw" height="100vh" />}>
            <App />
        </Suspense>
      </StrictMode>
    );
    screen.debug();
  });
});