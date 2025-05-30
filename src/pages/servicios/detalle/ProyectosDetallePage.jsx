import { useParams } from 'react-router-dom';
import "../../../styles/RegistroDetallePage.scss"; // Archivo de estilos específico

const ProyectosDetallePage = () => {
  const { serviceId } = useParams();
  let serviceDetails = {};

 // Lógica para determinar qué mostrar
if (serviceId === 'condominios') {
  serviceDetails = {
    title: "Condominios",
    description: `Diseño integral de espacios compartidos y unidades independientes dentro de un mismo predio, cumpliendo normativas urbanísticas y de convivencia.`,
    steps: [
      "Elaboración de planos arquitectónicos",
      "Diseño estructural y de instalaciones",
      "Propuesta de Reglamento Interno"
    ],
    note: "Ideal para maximizar el uso del terreno respetando la privacidad y funcionalidad.",
    image: "https://via.placeholder.com/300x200/ffb703/ffffff?text=Condominios"
  };
}
else if (serviceId === 'viviendas') {
  serviceDetails = {
    title: "Viviendas",
    description: `Diseño arquitectónico personalizado de viviendas unifamiliares o multifamiliares, adaptadas al terreno y necesidades del cliente.`,
    steps: [
      "Análisis del terreno y necesidades",
      "Propuesta arquitectónica",
      "Diseño estructural y especialidades"
    ],
    note: "Proyectos pensados para brindar confort, seguridad y eficiencia.",
    image: "https://via.placeholder.com/300x200/e76f51/ffffff?text=Viviendas"
  };
}
else if (serviceId === 'plantas-comerciales') {
  serviceDetails = {
    title: "Plantas Comerciales",
    description: `Desarrollo de espacios comerciales como locales, tiendas o supermercados, optimizando la distribución para facilitar el flujo de personas y productos.`,
    steps: [
      "Levantamiento de requerimientos",
      "Diseño funcional y estructural",
      "Integración de normativas de seguridad"
    ],
    note: "Diseño orientado al negocio y experiencia del cliente.",
    image: "https://via.placeholder.com/300x200/2a9d8f/ffffff?text=Comercial"
  };
}
else if (serviceId === 'colegios') {
  serviceDetails = {
    title: "Colegios",
    description: `Diseño de instituciones educativas que promueven el aprendizaje, la seguridad y la accesibilidad, respetando normativas del sector.`,
    steps: [
      "Distribución de ambientes académicos y recreativos",
      "Diseño estructural y de instalaciones",
      "Cumplimiento de normativas educativas"
    ],
    note: "Espacios diseñados para inspirar y educar.",
    image: "https://via.placeholder.com/300x200/3a86ff/ffffff?text=Colegios"
  };
}
else if (serviceId === 'galerias') {
  serviceDetails = {
    title: "Galerías",
    description: `Diseño de espacios comerciales distribuidos por módulos o tiendas para múltiples negocios en un solo complejo.`,
    steps: [
      "Zonificación de áreas comerciales",
      "Diseño estructural y de accesos",
      "Propuesta de circulación y seguridad"
    ],
    note: "Ideal para mercados, galerías de ropa o centros artesanales.",
    image: "https://via.placeholder.com/300x200/b5838d/ffffff?text=Galerías"
  };
}
else if (serviceId === 'proyecto-de-planta-de-tratamiento-de-agua') {
  serviceDetails = {
    title: "Proyecto de Planta de Tratamiento de Agua",
    description: `Desarrollo técnico de plantas para el tratamiento de aguas residuales o potables, cumpliendo estándares ambientales.`,
    steps: [
      "Diagnóstico de la necesidad y afluentes",
      "Diseño hidráulico y estructural",
      "Integración de equipos de tratamiento"
    ],
    note: "Esencial para garantizar agua segura y proteger el medio ambiente.",
    image: "https://via.placeholder.com/300x200/00b4d8/ffffff?text=PTAR"
  };
}
else if (serviceId === 'casa-de-playa') {
  serviceDetails = {
    title: "Casa de Playa",
    description: `Diseño de viviendas para zonas costeras, optimizando la vista, la ventilación y la protección frente a condiciones salinas.`,
    steps: [
      "Estudio del terreno y clima",
      "Propuesta arquitectónica adaptada",
      "Diseño estructural resistente a la humedad"
    ],
    note: "Comodidad, estilo y resistencia frente al entorno marino.",
    image: "https://via.placeholder.com/300x200/ffd166/000000?text=Playa"
  };
}
else if (serviceId === 'proyecto-integral-de-irrigacion') {
  serviceDetails = {
    title: "Proyecto Integral de Irrigación",
    description: `Diseño técnico de sistemas de riego que aseguran el uso eficiente del agua para fines agrícolas.`,
    steps: [
      "Estudio hidrológico y topográfico",
      "Diseño del sistema de conducción y distribución",
      "Plan de operación y mantenimiento"
    ],
    note: "Contribuye al desarrollo agrícola sostenible.",
    image: "https://via.placeholder.com/300x200/06d6a0/ffffff?text=Irrigación"
  };
}
else if (serviceId === 'estudio-de-impacto-ambiental') {
  serviceDetails = {
    title: "Estudio de Impacto Ambiental",
    description: `Evaluación de los efectos ambientales que podría generar un proyecto, proponiendo medidas de mitigación.`,
    steps: [
      "Recopilación de datos del entorno",
      "Identificación de impactos potenciales",
      "Propuesta de medidas correctivas"
    ],
    note: "Paso clave para la aprobación de proyectos ante autoridades ambientales.",
    image: "https://via.placeholder.com/300x200/4caf50/ffffff?text=EIA"
  };
}
else if (serviceId === 'proyecto-en-general') {
  serviceDetails = {
    title: "Proyecto en General",
    description: `Desarrollo integral de proyectos adaptados a las necesidades del cliente, sin limitarse a una categoría específica.`,
    steps: [
      "Reunión inicial y levantamiento de información",
      "Diseño multidisciplinario",
      "Entrega de expediente técnico completo"
    ],
    note: "Soluciones personalizadas para cualquier tipo de proyecto.",
    image: "https://via.placeholder.com/300x200/adb5bd/000000?text=General"
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

export default ProyectosDetallePage;