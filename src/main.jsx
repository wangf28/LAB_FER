import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ThemProvider } from "./contexts/ThemContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemProvider>
        <App />
      </ThemProvider>
    </BrowserRouter>
  </StrictMode>
);
