import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
const createRootApp = createRoot(document.getElementById("root")!);
createRootApp.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
