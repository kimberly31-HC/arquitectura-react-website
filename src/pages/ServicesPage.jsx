import { motion } from 'framer-motion';
import { FaFileAlt, FaHome, FaBalanceScale, FaCity, FaHardHat, FaBuilding } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicesPage.scss';
import Chatbot from "../components/Chatbot"; 
import WhatsAppButton from '../components/Whatsapp'; 
import Cotizacion from '../components/ButtonCotizacion';
const Servicios = () => {
  const navigate = useNavigate();
  
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

  const areas = [
    {
      id: 1,
      title: "Registros Públicos",
      icon: <FaFileAlt className="area-icon" />,
      color: "bg-blue-600",
      path: "/registros-publicos"
    },
    {
      id: 2,
      title: "Diseño",
      icon: <FaHome className="area-icon" />,
      color: "bg-green-600",
      path: "/diseno"
    },
    {
      id: 3,
      title: "Municipalidad",
      icon: <FaCity className="area-icon" />,
      color: "bg-purple-600",
      path: "/municipalidad"
    },
    {
      id: 4,
      title: "Proyectos",
      icon: <FaHardHat className="area-icon" />,
      color: "bg-yellow-600",
      path: "/proyectos"
    }
  ];

  const handleAreaClick = (path) => {
    navigate(path);
  };
const handleWhatsAppClick = () => {
    const phoneNumber = '51962303092';
    const message = 'Hola, quiero información sobre el servicio: ';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="areas-page"
    >
      <div className="hero-banner">
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Construcción y arquitectura" 
          />
        </div>
        
        <div className="hero-overlay">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1>SERVICIOS</h1>
            <p>Expertos en cada fase de tu proyecto inmobiliario y legal</p>
          </motion.div>
        </div>
      </div>
      
      <section className="areas-section py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={area.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="area-card-container"
              >
                <div 
                  onClick={() => handleAreaClick(area.path)}
                  className={`area-card ${area.color}`}
                >
                  <div className="area-content">
                    {/* Flexbox wrapper for icon and title */}
                    <div className="flex items-center space-x-4">
                      <div className="area-icon-wrapper">
                        {area.icon}
                      </div>
                      <h3>{area.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       <Chatbot />
            {/* Botón de WhatsApp con efecto flotante */}
                    <WhatsAppButton onClick={handleWhatsAppClick} />
                          <Cotizacion />
    </motion.div>
  );
};

export default Servicios;
