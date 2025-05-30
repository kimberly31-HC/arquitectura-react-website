import { useParams } from 'react-router-dom';
import "../../../styles/RegistroDetallePage.scss"; // Archivo de estilos específico

const DisenioDetallePage = () => {
  const { serviceId } = useParams();
  let serviceDetails = {};

 if (serviceId === 'planos-de-arquitectura') {
  serviceDetails = {
    title: "Planos de Arquitectura",
    description: `Diseño detallado y profesional de planos arquitectónicos para diversos proyectos, garantizando funcionalidad y estética.`,
    steps: [
      "Levantamiento de medidas y análisis del terreno",
      "Diseño preliminar y bocetos",
      "Elaboración de planos técnicos finales"
    ],
    note: "Elaboramos planos que cumplen con normativas vigentes y necesidades del cliente.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Planos+Arquitectura"
  };
}
else if (serviceId === 'instalaciones-sanitarias') {
  serviceDetails = {
    title: "Instalaciones Sanitarias",
    description: `Diseño y planificación de sistemas sanitarios eficientes y seguros para edificios y viviendas.`,
    steps: [
      "Diseño de red sanitaria y desagüe",
      "Selección de materiales y tuberías",
      "Planos de instalación y mantenimiento"
    ],
    note: "Optimizamos el uso del agua y garantizamos durabilidad.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Instalaciones+Sanitarias"
  };
}
else if (serviceId === 'instalaciones-electricas') {
  serviceDetails = {
    title: "Instalaciones Eléctricas",
    description: `Planificación y diseño de sistemas eléctricos seguros, eficientes y normados para todo tipo de construcciones.`,
    steps: [
      "Cálculo de cargas eléctricas",
      "Distribución de circuitos y tableros",
      "Planos detallados y especificaciones técnicas"
    ],
    note: "Cumplimos con las normativas eléctricas para garantizar seguridad.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Instalaciones+Eléctricas"
  };
}
else if (serviceId === 'estructura-de-cimientos') {
  serviceDetails = {
    title: "Estructura de Cimientos",
    description: `Diseño estructural especializado para cimientos sólidos y duraderos, base fundamental de cualquier construcción.`,
    steps: [
      "Análisis del suelo y cargas",
      "Diseño de cimentación adecuada",
      "Planos estructurales y recomendaciones"
    ],
    note: "Garantizamos estabilidad y seguridad estructural.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Estructura+Cimientos"
  };
}
else if (serviceId === 'estructura-de-techo') {
  serviceDetails = {
    title: "Estructura de Techo",
    description: `Diseño de estructuras para techos resistentes y estéticos, adaptados a las necesidades del proyecto.`,
    steps: [
      "Selección de materiales y sistema estructural",
      "Diseño de armaduras o cerchas",
      "Elaboración de planos técnicos"
    ],
    note: "Optimizamos peso y resistencia para máxima durabilidad.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Estructura+Techo"
  };
}
else if (serviceId === 'instalaciones-de-gas-natural') {
  serviceDetails = {
    title: "Instalaciones de Gas Natural",
    description: `Diseño seguro y eficiente de redes para suministro de gas natural en edificaciones residenciales y comerciales.`,
    steps: [
      "Planificación de la red de gas",
      "Cálculo de demanda y presión",
      "Planos y normas de seguridad"
    ],
    note: "Cumplimos con todas las normas para garantizar seguridad total.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Gas+Natural"
  };
}
else if (serviceId === 'recorrido-virtual-3d') {
  serviceDetails = {
    title: "Recorrido Virtual 3D",
    description: `Creación de modelos tridimensionales interactivos para visualizar proyectos antes de su construcción.`,
    steps: [
      "Modelado 3D detallado",
      "Configuración de recorrido y puntos de vista",
      "Optimización para visualización en múltiples dispositivos"
    ],
    note: "Permite al cliente explorar el proyecto virtualmente y tomar decisiones informadas.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Recorrido+3D"
  };
}
else if (serviceId === 'cortes-y-fachadas') {
  serviceDetails = {
    title: "Cortes y Fachadas",
    description: `Elaboración de planos técnicos de cortes y fachadas que muestran detalles constructivos y estéticos del proyecto.`,
    steps: [
      "Dibujo detallado de secciones transversales",
      "Representación gráfica de fachadas exteriores",
      "Incorporación de materiales y acabados"
    ],
    note: "Facilitamos la comprensión técnica y visual del diseño arquitectónico.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Cortes+y+Fachadas"
  };
}


  return (
    <div className="service-detail-container">
      <div className="service-card">
        <div className="service-content">
          <h1>{serviceDetails.title}</h1>
          <p className="description">{serviceDetails.description}</p>

          <h3>Elaboración:</h3>
          <ul className="steps-list">
            {serviceDetails.steps && serviceDetails.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>

          <p className="note"><strong>Nota:</strong> {serviceDetails.note}</p>
        </div>
        
        <div className="service-image">
          <img src={serviceDetails.image || "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Servicio"} alt={serviceDetails.title} />
        </div>
      </div>
    </div>
  );
};

export default DisenioDetallePage;