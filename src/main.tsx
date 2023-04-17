import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeHandler from "./components/theme/ThemeHandler";




ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeHandler>
      <App />
    </ThemeHandler>
  </React.StrictMode>
);
