import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Ajusta la ruta si es necesario

import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import Services from "./pages/Services";
import ServicesPage from "./pages/ServicesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Contact from "./components/Contact";
import Cotizacion from "./components/Cotizacion";
import AboutPage from "./pages/AboutPage";
import RegistroPage from "./pages/servicios/RegistrosPage";
import RegistroDetallePage from './pages/servicios/detalle/RegistroDetallePage';
import DisenioPage from "./pages/servicios/DisenioPage";
import DisenioDetallePage from './pages/servicios/detalle/DisenioDetallePage';
import MunicipalidadPage from "./pages/servicios/MunicipalidadPage";
import MunicipalidadDetallePage from './pages/servicios/detalle/MunicipalidadDetallePage';
import ProyectosPage from "./pages/servicios/ProyectosPage";
import ProyectosDetallePage from './pages/servicios/detalle/ProyectosDetallePage';
import Consulta from "./components/Consulta";

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* Aquí lo pones */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/contactanos" element={<Contact />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/registros-publicos" element={<RegistroPage />} />
        <Route path="/registros-publicos/:serviceId" element={<RegistroDetallePage />} />
        <Route path="/diseno" element={<DisenioPage />} />
        <Route path="/diseno/:serviceId" element={<DisenioDetallePage />} />
        <Route path="/municipalidad" element={<MunicipalidadPage />} />
        <Route path="/municipalidad/:serviceId" element={<MunicipalidadDetallePage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/proyectos/:serviceId" element={<ProyectosDetallePage />} />
        <Route path="/cotizacion" element={<Cotizacion />} />
        <Route path="/consulta" element={<Consulta />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
