import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import AppRouter from "./routes/AppRouter.jsx";
import { ThemeContext } from "./contexts/ThemContext.jsx";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`bg-${theme}`}>
      <Header />
      <div className="container mt-5 pt-5">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}
