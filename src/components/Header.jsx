import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from '../assets/img/logo.png'; // ajusta la ruta según tu estructura
import '../styles/Header.scss';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaBars, FaTimes,FaTiktok,FaArrowRight  } from "react-icons/fa";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const socialIcons = [
    { icon: <FaFacebook />, color: "white", name: "Facebook", url: "https://www.facebook.com/planosymaquetasperu" },
    { icon: <FaInstagram />, color: "white", name: "Instagram", url: "https://www.instagram.com/planos_peru_" },
    { icon: <FaTiktok />, color: "white", name: "Tiktok", url: "https://www.tiktok.com/@planos.peru?is_from_webapp=1&sender_device=pc" },
    { icon: <FaYoutube />, color: "white", name: "Youtube", url: "https://www.youtube.com/channel/UC_VdShJOHnMBTusdFtWM8Cw" }
  ];

  // Detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <>
      {/* Franja de anuncios */}
      <div className="top-banner">
        <div className="banner-content">
          <div className="contact-info">
            <small><FaPhoneAlt className="icon" /> +51 962 303 092</small>
            <small><FaEnvelope className="icon" /> gesstion@hotmail.com</small>
          </div>

          <div className="social-icons">
            {socialIcons.map((item, index) => (
              <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" title={item.name} style={{ color: item.color }}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className={`header ${scrolling ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logo} width="60" alt="Logo Planos Perú" />
            <div className="logo-text">
              <span className="logo-title">Planos Perú</span>
              <span className="logo-subtitle">Ingenieros y Arquitectos</span>
            </div>
          </Link>
        </div>

        {/* Menú desktop */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link to="/" className="nav-link">
                <span className="link-text">Inicio</span>
                <span className="link-underline"></span>
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link to="/nosotros" className="nav-link">
                <span className="link-text">Nosotros</span>
                <span className="link-underline"></span>
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link to="/servicios" className="nav-link">
                <span className="link-text">Servicios</span>
                <span className="link-underline"></span>
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link to="/projects" className="nav-link">
                <span className="link-text">Proyectos</span>
                <span className="link-underline"></span>
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link to="/contactanos" className="nav-link">
                <span className="link-text">Contactanos</span>
                <span className="link-underline"></span>
              </Link>
            </motion.li>
      <div className="btn-seguimiento-container">
        <Link to="/consulta" className="btn-seguimiento">
          Seguimiento de trámite <FaArrowRight style={{ marginLeft: '8px' }} />
        </Link>
      </div>
          </ul>
          
        </nav>

        {/* Menú móvil */}
       <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
  <FaBars size={20} />
</div>

        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link to="/" className="nav-link" onClick={toggleMobileMenu}>
                <span className="link-text">Inicio</span>
                <span className="link-underline"></span>
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link to="/nosotros" className="nav-link" onClick={toggleMobileMenu}>
                <span className="link-text">Nosotros</span>
                <span className="link-underline"></span>
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link to="/servicios" className="nav-link" onClick={toggleMobileMenu}>
                <span className="link-text">Servicios</span>
                <span className="link-underline"></span>
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link to="/projects" className="nav-link" onClick={toggleMobileMenu}>
                <span className="link-text">Proyectos</span>
                <span className="link-underline"></span>
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link to="/contacto" className="nav-link" onClick={toggleMobileMenu}>
                <span className="link-text">Contactanos</span>
                <span className="link-underline"></span>
              </Link>
            </motion.li>
   <div className="btn-seguimiento-container">
        <Link to="/consulta" className="btn-seguimiento">
          Seguimiento de trámite <FaArrowRight style={{ marginLeft: '8px' }} />
        </Link>
      </div>

          </ul>
        </nav>
      </header>
    </>
  );
}
