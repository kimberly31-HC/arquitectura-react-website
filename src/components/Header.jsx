import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from '../assets/img/logo.png'; // ajusta la ruta según tu estructura

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
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
            <Link to="/contacto" className="nav-link">
              <span className="link-text">Contactanos</span>
              <span className="link-underline"></span>
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}