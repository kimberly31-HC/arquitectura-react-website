import { useEffect, useRef } from "react";
import "../styles/HeroCarousel.scss";
import HeroCarousel from "../components/Carrusel";
import About from "./About";
import Services from "./Services";
import Chatbot from "../components/Chatbot";
import WhatsAppButton from "../components/Whatsapp";
import Cotizacion from "../components/ButtonCotizacion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Clientes from "../components/Clientes";
import Contacto from "../components/Contacto";
import TrabajaConNosotros from "../components/TrabajaConNosotros";
import FaqSection from "../components/FaqSection";
import MapaProyectos from "../components/MapaProyectos";
import SolicitudCotizaciones from "../components/SolicitudCotizaciones";
import SocialFloat from "../components/SocialFloat";
import NotificacionPromo from "../components/NotificacionPromo";
const BotonFormulario = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/formulario")}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
    >
      Ir al Formulario
    </button>
  );
};
const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  const handleWhatsAppClick = () => {
    const phoneNumber = "51962303092";
    const message = "Hola, quiero información sobre el servicio: ";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="home-container">
      <HeroCarousel />

      {/* Franja decorativa mejorada */}
      <div className="estadisticas-container" ref={ref}>
        <div className="estadistica-item">
          <span className="valor">
            + {inView && <CountUp end={5000000} duration={3} separator=" " />}
          </span>
          <span className="descripcion">m² de Área construida</span>
        </div>

        <div className="estadistica-item">
          <span className="valor">
            + {inView && <CountUp end={29} duration={3} />}
          </span>
          <span className="descripcion">Años de experiencia</span>
        </div>
      </div>
      <div className="bottom-text">
        <span>PLANOS</span>, <span>PROYECTOS</span> Y <span>EXPEDIENTES</span>
      </div>

      {/* Contenido adicional puede ir aquí */}
      <About />

      <Services />
      <Clientes />
      <Contacto />
      <FaqSection />
      <MapaProyectos />
      <TrabajaConNosotros />

      <SolicitudCotizaciones />
      <NotificacionPromo />

      <Chatbot />
      {/* Botón de WhatsApp con efecto flotante */}
      <WhatsAppButton onClick={handleWhatsAppClick} />
      <Cotizacion />
    </div>
  );
};

export default Home;
