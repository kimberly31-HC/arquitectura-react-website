import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import Services from "./pages/Services";
import ServicesPage from "./pages/ServicesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import AboutPage from "./pages/AboutPage";
import RegistroPage from "./pages/servicios/RegistrosPage";
import RegistroDetallePage from './pages/servicios/detalle/RegistroDetallePage';
import { Link } from "react-router-dom";

// En App.jsx y otros componentes

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/registros" element={<RegistroPage />} />
        <Route path="/registro/:serviceId" element={<RegistroDetallePage />} /> {/* Ruta dinámica */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
