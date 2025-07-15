import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import MyCard from "./components/MyCard.jsx";

import { ThemProvider } from "./contexts/ThemContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppRouter from "./routes/AppRouter.jsx";

export default function App() {
  return (
    <>
      <ThemProvider>
        <Header />
        <div className="container mt-5 pt-5">
          <AppRouter />
        </div>
        <Footer />
      </ThemProvider>
    </>
  );
}
