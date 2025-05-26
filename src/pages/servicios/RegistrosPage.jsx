import { motion } from 'framer-motion';
import { FaFileAlt, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import imagen from '../../assets/img/banner/fachada.jpg';
import "../../styles/RegistroPage.scss"; // Archivo de estilos específico

// Componente ServiceCard
const ServiceCard = ({ service, itemVariants }) => {
  const navigate = useNavigate();

  // Lógica para manejar el clic
  const handleClick = () => {
    const serviceId = service.toLowerCase().replace(/\s+/g, '-'); // Convertir el nombre del servicio en un ID para la URL
    navigate(`/registro/${serviceId}`);
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="service-card"
      onClick={handleClick} // Asignamos el evento de clic
    >
      <div className="service-card-content">
        <FaFileAlt className="icon" />
        <h3 className="service-title">{service}</h3>
      </div>
    </motion.div>
  );
};

const RegistrosPage = () => {
  const navigate = useNavigate();

  const services = [
    "Prescripción adquisitiva",
    "Saneamiento Catastral",
    "Búsqueda Catastral",
    "Declaración de Fábrica",
    "Acumulación de lote",
    "Reglamento interno y junta de propietarios",
    "Rectificación de Área y Linderos"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container2"
    >
      {/* Imagen con desvanecimiento */}
      <div className="image-container">
        <img
          src={imagen}
          alt="Imagen lateral"
          className="image"
        />
      </div>

      {/* Contenido derecho */}
      <div className="content-container">
        <button
          onClick={() => navigate(-1)}
          className="back-button"
        >
          <FaArrowLeft className="mr-2" /> Volver
        </button>
        <h1 className="title">REGISTROS PÚBLICOS</h1>
        <p className="description">Servicios especializados en trámites registrales</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} itemVariants={itemVariants} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RegistrosPage;
