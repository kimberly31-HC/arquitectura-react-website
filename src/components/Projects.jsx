import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaWhatsapp, FaSearchPlus } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';
import WhatsAppButton from './Whatsapp'; 
import Chatbot from "../components/Chatbot"; 

const Projects = () => {
  const [activeTab, setActiveTab] = useState('casas');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Datos de los proyectos
  const projectData = {
    casas: [
      { id: 'c1', image: '/src/assets/img/proyectos/c1.jpg', alt: 'Casa Render 1', category: '3D' },
      { id: 'c2', image: '/src/assets/img/proyectos/c2.png', alt: 'Casa Render 2', category: '3D' },
      { id: 'c3', image: '/src/assets/img/proyectos/c3.png', alt: 'Casa Render 3', category: '3D' },
      { id: 'c4', image: '/src/assets/img/proyectos/c4.png', alt: 'Casa Render 4', category: '3D' },
      { id: 'f2', image: '/src/assets/img/proyectos/f2.png', alt: 'Foto 1', category: 'Fotografía' },
      { id: 'f3', image: '/src/assets/img/proyectos/f3.png', alt: 'Foto 2', category: 'Fotografía' }
    ],
    planos: [
      { id: 'p7', image: '/src/assets/img/proyectos/p7.png', alt: 'Plano 7', tooltip: 'VIVIENDA COMERCIO 6 X 19 m', category: 'Residencial' },
      { id: 'p8', image: '/src/assets/img/proyectos/p8.png', alt: 'Plano 8', tooltip: 'VIVIENDA MULTIFAMILIAR 5.25 X 20 m', category: 'Multifamiliar' },
      { id: 'p9', image: '/src/assets/img/proyectos/p9.png', alt: 'Plano 9', tooltip: 'VIVIENDA BIFAMILIAR 6 x 20 m', category: 'Bifamiliar' },
      { id: 'p10', image: '/src/assets/img/proyectos/p10.png', alt: 'Plano 10', tooltip: 'VIVIENDA COMERCIO 8 x 21 m', category: 'Comercial' },
      { id: 'p11', image: '/src/assets/img/proyectos/p11.png', alt: 'Plano 11', tooltip: 'VIVIENDA COMERCIO 6.76 x 20 m', category: 'Comercial' },
      { id: 'p12', image: '/src/assets/img/proyectos/p12.png', alt: 'Plano 12', tooltip: 'VIVIENDA MULTIFAMILIAR 11.64 x 17.02 m', category: 'Multifamiliar' },
      { id: 'pp2', image: '/src/assets/img/proyectos/pp2.png', alt: 'Plano 2', tooltip: 'VIVIENDA MULTIFAMILIAR (1 de 2) 13.10 x 20.45 m', category: 'Multifamiliar' },
      { id: 'pp3', image: '/src/assets/img/proyectos/pp3.png', alt: 'Plano 3', tooltip: 'CASA DE PLAYA 10 x 20 m', category: 'Vacacional' },
      { id: 'pp4', image: '/src/assets/img/proyectos/pp4.png', alt: 'Plano 4', tooltip: 'VIVIENDA MULTIFAMILIAR 10 x 20 m', category: 'Multifamiliar' },
      { id: 'p5', image: '/src/assets/img/proyectos/p5.png', alt: 'Plano 5', tooltip: 'FACHADA', category: 'Fachada' },
      { id: 'p6', image: '/src/assets/img/proyectos/p6.png', alt: 'Plano 6', tooltip: 'PLANOS ELÉCTRICOS', category: 'Técnico' },
      { id: 'pp1', image: '/src/assets/img/proyectos/pp1.png', alt: 'Plano 1', tooltip: 'PLANOS DE CIMENTACIÓN', category: 'Estructural' }
    ],
    visitas: [
      { id: 'v1', image: '/src/assets/img/proyectos/v1.png', alt: 'Visita 1', wide: true, location: 'Lima' },
      { id: 'v2', image: '/src/assets/img/proyectos/v2.png', alt: 'Visita 2', wide: true, location: 'Arequipa' },
      { id: 'v3', image: '/src/assets/img/proyectos/v3.png', alt: 'Visita 3', wide: true, location: 'Trujillo' },
      { id: 'v4', image: '/src/assets/img/proyectos/v4.png', alt: 'Visita 4', wide: true, location: 'Cusco' },
      { id: 'v5', image: '/src/assets/img/proyectos/v5.png', alt: 'Visita 5', wide: true, location: 'Chiclayo' },
      { id: 'v6', image: '/src/assets/img/proyectos/v6.png', alt: 'Visita 6', wide: true, location: 'Piura' },
      { id: 'v7', image: '/src/assets/img/proyectos/v7.png', alt: 'Visita 7', wide: true, location: 'Ica' },
      { id: 'v8', image: '/src/assets/img/proyectos/v8.png', alt: 'Visita 8', wide: true, location: 'Huancayo' },
      { id: 'v9', image: '/src/assets/img/proyectos/v9.png', alt: 'Visita 9', wide: true, location: 'Tacna' },
      { id: 'v10', image: '/src/assets/img/proyectos/v10.png', alt: 'Visita 10', wide: true, location: 'Puno' }
    ]
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '51962303092';
    const message = 'Hola, quiero información sobre el servicio: ';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    const images = projectData[activeTab];
    if (direction === 'prev') {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
    setSelectedImage(images[currentIndex]);
  };

  return (
    <section 
      className="projects-section"
      id="proyectos"
    >
      {/* Fondo con efecto de partículas */}
      <div className="particles-background"></div>
      
      <div className="container">
        {/* Encabezado con animación */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span>PROYECTOS</span> REALIZADOS
          </h2>
          <p className="highlight-text">
            Explora una selección de nuestros proyectos, donde combinamos <span>innovación</span> y <span>sostenibilidad</span> en cada detalle. 
            Desde residencias hasta grandes desarrollos, garantizamos <span>calidad</span> y <span>funcionalidad</span>, 
            consolidándonos como referentes en arquitectura en el Perú.
          </p>
        </motion.div>

        {/* Pestañas con efecto de onda */}
        <div className="tabs-container">
          {['casas', 'planos', 'visitas'].map((tab) => (
            <motion.button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab === 'casas' && 'CASAS 3D'}
              {tab === 'planos' && 'PLANOS'}
              {tab === 'visitas' && 'VISITAS'}
              {activeTab === tab && (
                <motion.span 
                  className="underline" 
                  layoutId="underline"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Galería de proyectos */}
        <div className="projects-grid">
          <AnimatePresence>
            {projectData[activeTab]?.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.wide ? 'wide-card' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                onClick={() => openLightbox(project, index)}
              >
                <img 
                  src={project.image} 
                  alt={project.alt} 
                  className="project-image"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <FaSearchPlus className="zoom-icon" />
                    {project.tooltip && (
                      <div className="project-info">
                        <h4>{project.tooltip.split(' ')[0]}</h4>
                        <p>{project.tooltip.substring(project.tooltip.indexOf(' ') + 1)}</p>
                      </div>
                    )}
                    {project.category && !project.tooltip && (
                      <div className="project-info">
                        <h4>{project.category}</h4>
                      </div>
                    )}
                  </div>
                </div>
                {project.category && (
                  <div className="category-badge">
                    {project.category}
                  </div>
                )}
                {project.location && (
                  <div className="location-badge">
                    <span>{project.location}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
 <Chatbot />
        {/* Botón de WhatsApp con efecto flotante */}
              <WhatsAppButton onClick={handleWhatsAppClick} />

      </div>

      {/* Lightbox para vista detallada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button 
              className="close-btn"
              onClick={closeLightbox}
            >
              <RiCloseLine />
            </button>
            <button 
              className="nav-btn prev-btn"
              onClick={() => navigate('prev')}
            >
              <FiChevronLeft />
            </button>
            
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.alt}
              />
              {(selectedImage.tooltip || selectedImage.location) && (
                <div className="lightbox-info">
                  <h3>{selectedImage.tooltip || selectedImage.location}</h3>
                  {selectedImage.category && (
                    <p>{selectedImage.category}</p>
                  )}
                </div>
              )}
            </motion.div>
            
            <button 
              className="nav-btn next-btn"
              onClick={() => navigate('next')}
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;