// src/components/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import "../styles/projects-page.scss"; // Archivo de estilos específico

const WhatsAppButton = ({ onClick }) => {
    
  return (
    <motion.button 
      className="whatsapp-btn"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <FaWhatsapp className="whatsapp-icon" />
      <div className="pulse-effect"></div>
    </motion.button>
  );
};

export default WhatsAppButton;
