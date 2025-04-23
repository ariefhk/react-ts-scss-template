import "./styles/global.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutePages from "./routes";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RoutePages />
    </BrowserRouter>
  </StrictMode>
);
