import { motion } from 'framer-motion';
import { FaFileAlt, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import imagen from '../../assets/img/banner/fachada.jpg'; // Puedes cambiarla si tienes otra imagen
import "../../styles/RegistroPage.scss"; // Usa el mismo estilo si no tienes uno específico para la municipalidad

// Componente ServiceCard
const ServiceCard = ({ service, itemVariants }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const serviceId = service
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
    navigate(`/municipalidad/${serviceId}`);
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="service-card"
      onClick={handleClick}
    >
      <div className="service-card-content">
        <FaFileAlt className="icon" />
        <h3 className="service-title">{service}</h3>
      </div>
    </motion.div>
  );
};

const MunicipalidadPage = () => {
  const navigate = useNavigate();

  const services = [
    "Licencia de funcionamiento",
    "Licencia para construir",
    "Subdivisión de lote",
    "Registro de planos",
    "Habilitaciones urbanas",
    "Declaración de fábrica",
    "Expedientes técnicos para defensa civil",
    "Conformidad de obra",
    "Servicios de topografía",
    "Tasaciones municipales"
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
      {/* Imagen lateral */}
      <div className="image-container">
        <img src={imagen} alt="Imagen de fachada municipal" className="image" />
      </div>

      {/* Contenido principal */}
      <div className="content-container">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft className="mr-2" /> Volver
        </button>
        <h1 className="title">SERVICIOS MUNICIPALES</h1>
        <p className="description">
          La Municipalidad ofrece una variedad de servicios relacionados con trámites urbanos, construcción y permisos, todos orientados a facilitar tu gestión ante la autoridad local.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} itemVariants={itemVariants} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MunicipalidadPage;
