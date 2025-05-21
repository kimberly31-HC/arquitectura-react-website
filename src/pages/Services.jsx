import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/Services.scss';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Registros Públicos",
      description: "Asesoramos y brindamos el soporte para una adecuada inscripción de todas las propiedades de las personas naturales y jurídicas con sus respectivos expedientes.",
      image: "/src/assets/img/inicio/imagen2.jpg",
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
      image: "/src/assets/img/inicio/nosotros.jpg",
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
      image: "/src/assets/img/inicio/nosotros2.jpg",
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
      image: "/src/assets/img/inicio/imagen5.jpg",
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

  return (
    <section className="bg-gray-50 py-16" id="servicios">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">NUESTROS SERVICIOS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded-full"></div>
        </motion.div>

                {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
  key={service.id}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
  className="service-card bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform"
>
  <div className="relative">
    <img 
      src={service.image} 
      alt={service.title} 
      className="service-card-img"  // Aseguramos que se le asigna la clase correcta
    />

  </div>
<div className=" top-4 left-4 z-10">
      <span className={`badge ${service.badgeColor}`}>
        {service.title}
      </span>
    </div>
  <div className="p-6 space-y-4">
    
    <p className="text-gray-600">{service.description}</p>

    <ul className="space-y-3">
      {service.items.map((item, idx) => (
        <li key={idx} className="flex items-start text-gray-700">
          <FaCheckCircle className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
