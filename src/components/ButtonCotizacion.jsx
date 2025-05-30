import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate
import { FaClipboardList } from 'react-icons/fa';  // Usando un icono de React Icons
import '../styles/Chatbot.scss';

const BotonFlotante = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cotizacion'); // Redirige a la página de cotización
  };

  return (
    <div className="boton-flotante-container">
      {/* Tooltip siempre visible */}
      <div className="tooltip">
        ¡COTIZA AHORA!
      </div>

      {/* Botón flotante con icono */}
      <button
        onClick={handleClick}
        className="boton-flotante"
      >
        <FaClipboardList size={24} /> {/* Icono de cotización */}
        <div className="pulse-effect"></div>
      </button>
    </div>
  );
};

export default BotonFlotante;
