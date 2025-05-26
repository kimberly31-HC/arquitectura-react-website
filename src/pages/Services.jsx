import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Services.scss';

// Importa tus imágenes
import imagen2 from '../assets/img/inicio/imagen2.jpg';
import nosotros from '../assets/img/inicio/nosotros.jpg';
import nosotros2 from '../assets/img/inicio/nosotros2.jpg';
import imagen5 from '../assets/img/inicio/imagen5.jpg';

const Servicios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const allServices = [
    {
      id: 1,
      title: "Registros Públicos",
      description: "Asesoramos y brindamos el soporte para una adecuada inscripción de todas las propiedades de las personas naturales y jurídicas con sus respectivos expedientes.",
      image: imagen2,
      badgeColor: "bg-planos",
      items: [
        "Prescripción adquisitiva",
        "Saneamiento Catastral",
        "Búsqueda Catastral",
        "Declaración de Fábrica",
        "Acumulación de lote",
        "Reglamento interno y junta de propietarios",
        "Rectificación de Área y Linderos",
        "Independización",
        "Soluciones a observaciones registrales",
        "Inmatriculación"
      ]
    },
    {
      id: 2,
      title: "Diseño",
      description: "Ofrecemos servicios de diseño para diversos tipos de proyectos, asegurando calidad y eficiencia.",
      image: nosotros,
      badgeColor: "bg-red-500",
      items: [
        "Planos de Arquitectura",
        "Instalaciones Sanitarias",
        "Instalaciones Eléctricas",
        "Estructura de Cimientos",
        "Estructura de Techo",
        "Instalaciones de Gas Natural",
        "Recorrido Virtual 3D",
        "Cortes y Fachadas"
      ]
    },
    {
      id: 3,
      title: "Municipalidad",
      description: "Realizamos el armado de expedientes para ingreso en trámite a las distintas municipalidades de Lima y de todo el Perú.",
      image: nosotros2,
      badgeColor: "bg-planos",
      items: [
        "Licencia de funcionamiento",
        "Licencia para construir",
        "Sub-División de lote",
        "Planos en general",
        "Habilidades urbanas",
        "Declaración de fábrica",
        "Expedientes técnicos para defensa civil",
        "Conformidad de obra",
        "Topografía",
        "Tasaciones"
      ]
    },
    {
      id: 4,
      title: "Proyectos",
      description: "Realizamos proyectos de diversa índole, adaptándonos a las necesidades específicas de cada cliente.",
      image: imagen5,
      badgeColor: "bg-red-500",
      items: [
        "Condominios",
        "Viviendas",
        "Plantas Comerciales",
        "Colegios",
        "Galerías",
        "Proyecto de Planta de Tratamiento de Agua",
        "Casa de Playa",
        "Proyecto Integral de Irrigación",
        "Estudio de Impacto Ambiental",
        "Proyecto en general"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === allServices.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? allServices.length - 1 : prev - 1));
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="serviciosPage"
    >
      {/* Hero Banner (se mantiene igual) */}
      <div className="hero-banner1">
        <div className="hero-image">
          
        </div>
        
        <div className="hero-overlay">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1>SERVICIOS</h1>
            <p>Innovación y excelencia en ingeniería y arquitectura</p>
          </motion.div>
        </div>
      </div>
      
      {/* Carrusel de Servicios */}
      <section className="carousel-container">
        <motion.div 
          className="carousel-slide"
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="servicio-destacado">
            <div className="servicio-info">
              <h2>{allServices[currentSlide].title}</h2>
              <p>{allServices[currentSlide].description}</p>
              <ul className="benefits-list">
                {allServices[currentSlide].items.map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaCheckCircle className="check-icon" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div 
              className="servicio-imagen"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <img 
                src={allServices[currentSlide].image} 
                alt={`Servicio ${allServices[currentSlide].title}`}
              />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Controles del carrusel */}
        <button className="carousel-control prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
        
        {/* Indicadores de paginación */}
        <div className="carousel-indicators">
          {allServices.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Servicios;