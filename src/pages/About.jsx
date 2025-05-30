import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaUsers } from 'react-icons/fa';
import '../styles/About.scss'; // Archivo de estilos que crearemos después

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

  return (
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
    
  );
};

export default About;