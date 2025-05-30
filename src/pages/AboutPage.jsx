import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaUsers } from 'react-icons/fa';
import '../styles/AboutPage.scss';
import Chatbot from "../components/Chatbot"; 
import WhatsAppButton from '../components/Whatsapp'; 
import Cotizacion from '../components/ButtonCotizacion';
const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };
 const handleWhatsAppClick = () => {
    const phoneNumber = '51962303092';
    const message = 'Hola, quiero información sobre el servicio: ';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
  return (
    <div className="about-page">
      {/* Banner full-width con imagen de fondo y ondas */}
      <div className="hero-banner">
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
            alt="Equipo de arquitectura" 
          />
        </div>
        
        <div className="hero-overlay">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1>Conoce nuestra empresa</h1>
            <p>Innovación y excelencia en ingeniería y arquitectura</p>
          </motion.div>
        </div>
        
        <div className="wave-divider">
          <svg 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="shape-fill"></path>
          </svg>
        </div>
      </div>

      {/* Contenido existente */}
      <motion.div 
        className="about-container"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="about-hero">
          <motion.h1 variants={itemVariants}>¿QUIÉNES SOMOS?</motion.h1>
          <motion.p variants={itemVariants}>
            Somos una empresa especializada en Ingeniería y Arquitectura, conformada por un equipo de 
            profesionales altamente capacitados. Ofrecemos servicios de diseño y gestión de proyectos, 
            brindando soporte integral a medianas y grandes empresas, así como al público en general, 
            a nivel nacional.
          </motion.p>
        </div>

        <div className="about-sections">
          <motion.section 
            className="mission-section"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="icon-container">
              <FaBullseye className="about-icon" />
            </div>
            <h2>MISIÓN</h2>
            <p>
              Ser reconocidos como la empresa líder en el desarrollo integral de proyectos, 
              ofreciendo soluciones de calidad y adaptadas a las necesidades de nuestros clientes.
            </p>
          </motion.section>

          <motion.section 
            className="vision-section"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="icon-container">
              <FaEye className="about-icon" />
            </div>
            <h2>VISIÓN</h2>
            <p>
              Consolidarnos como líderes en asesoría y consultoría, ofreciendo servicios de alta 
              calidad y soluciones estratégicas, adaptándonos a las necesidades de cada mercado 
              y generando un impacto positivo en la industria de la ingeniería y arquitectura.
            </p>
          </motion.section>

          <motion.section 
            className="team-section"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="icon-container">
              <FaUsers className="about-icon" />
            </div>
            <h2>NUESTRO EQUIPO</h2>
            <p>
              Contamos con profesionales certificados en las últimas tecnologías de diseño y 
              construcción, comprometidos con la excelencia y la satisfacción del cliente.
            </p>
          </motion.section>
        </div>
      </motion.div>
            <Chatbot />
            {/* Botón de WhatsApp con efecto flotante */}
                    <WhatsAppButton onClick={handleWhatsAppClick} />
                          <Cotizacion />
    </div>
    
  );
};

export default About;