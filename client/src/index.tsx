import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
