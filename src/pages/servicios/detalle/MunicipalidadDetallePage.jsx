import { useParams } from 'react-router-dom';
import "../../../styles/RegistroDetallePage.scss"; // Archivo de estilos específico

const MunicipalidadDetallePage = () => {
  const { serviceId } = useParams();
  let serviceDetails = {};

 if (serviceId === 'licencia-de-funcionamiento') {
  serviceDetails = {
    title: "Licencia de Funcionamiento",
    description: `Trámite necesario para poder operar un negocio de manera legal en el municipio, asegurando que cumpla con las normativas locales.`,
    steps: [
      "Revisión de requisitos del local y actividad comercial",
      "Presentación de documentación solicitada",
      "Inspección por parte de la municipalidad",
      "Emisión de licencia"
    ],
    note: "La licencia debe renovarse periódicamente según las normativas locales.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Licencia+de+Funcionamiento"
  };
} 
else if (serviceId === 'licencia-para-construir') {
  serviceDetails = {
    title: "Licencia para Construir",
    description: `Permiso otorgado por la municipalidad para iniciar la construcción de un proyecto, cumpliendo con todas las normativas urbanísticas y de seguridad.`,
    steps: [
      "Presentación del proyecto arquitectónico y planos",
      "Revisión de los planos por parte del área técnica de la municipalidad",
      "Aprobación del proyecto y emisión de la licencia"
    ],
    note: "Es obligatorio contar con la licencia antes de comenzar cualquier tipo de obra.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Licencia+para+Construir"
  };
}
else if (serviceId === 'subdivision-de-lote') {
  serviceDetails = {
    title: "Subdivisión de Lote",
    description: `Trámite que permite dividir un terreno en varias parcelas para la venta o edificación, cumpliendo con la normativa de uso del suelo.`,
    steps: [
      "Revisión de la normativa de zonificación",
      "Elaboración de planos de subdivisión",
      "Aprobación de la subdivisión por la municipalidad"
    ],
    note: "Este trámite es indispensable para realizar la venta o desarrollo de nuevas parcelas.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Subdivisi%C3%B3n+de+Lote"
  };
}
else if (serviceId === 'registro-de-planos') {
  serviceDetails = {
    title: "Registro de Planos",
    description: `Proceso para registrar oficialmente los planos de construcción ante la municipalidad, asegurando que cumplen con las normativas vigentes.`,
    steps: [
      "Elaboración de planos arquitectónicos y estructurales",
      "Presentación de los planos para revisión",
      "Aprobación y registro en el sistema municipal"
    ],
    note: "El registro de planos es obligatorio para la legalización de cualquier obra.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Registro+de+Planos"
  };
}
else if (serviceId === 'habilitaciones-urbanas') {
  serviceDetails = {
    title: "Habilitaciones Urbanas",
    description: `Proceso para la creación de nuevos espacios urbanos, garantizando la infraestructura básica (agua, luz, desagüe) y el cumplimiento de normativas de urbanismo.`,
    steps: [
      "Estudio de factibilidad urbana",
      "Elaboración de proyecto de habilitación urbana",
      "Aprobación del proyecto y ejecución de la obra"
    ],
    note: "Las habilitaciones urbanas son necesarias para nuevos desarrollos habitacionales y comerciales.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Habilitaciones+Urbanas"
  };
}
else if (serviceId === 'declaracion-de-fabrica') {
  serviceDetails = {
    title: "Declaración de Fábrica",
    description: `Es el trámite necesario para declarar la existencia de una construcción o edificación, garantizando su regularización ante la municipalidad.`,
    steps: [
      "Inspección del inmueble por parte de la municipalidad",
      "Presentación de documentos y planos de la edificación",
      "Emisión de la declaración y regularización de la propiedad"
    ],
    note: "Es esencial para cualquier obra construida sin licencia previa.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Declaraci%C3%B3n+de+F%C3%A1brica"
  };
}
else if (serviceId === 'expedientes-tecnicos-para-defensa-civil') {
  serviceDetails = {
    title: "Expedientes Técnicos para Defensa Civil",
    description: `Trámite que asegura que la construcción cumpla con las normativas de seguridad para prevenir riesgos ante desastres naturales.`,
    steps: [
      "Elaboración del expediente técnico con los planos de seguridad",
      "Revisión de la documentación por parte de Defensa Civil",
      "Emisión de la conformidad y aprobación"
    ],
    note: "Es obligatorio en ciertas áreas y tipos de edificaciones.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Expedientes+para+Defensa+Civil"
  };
}
else if (serviceId === 'conformidad-de-obra') {
  serviceDetails = {
    title: "Conformidad de Obra",
    description: `Es el trámite que valida que una obra se ha realizado de acuerdo con los planos aprobados y las normativas vigentes.`,
    steps: [
      "Inspección final de la obra",
      "Revisión de planos y documentación relacionada",
      "Emisión de conformidad por parte de la municipalidad"
    ],
    note: "Este trámite es esencial para obtener la legalización final de la obra.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Conformidad+de+Obra"
  };
}
else if (serviceId === 'servicios-de-topografia') {
  serviceDetails = {
    title: "Servicios de Topografía",
    description: `Estudio técnico del terreno para determinar sus características y viabilidad para la construcción, así como para definir límites y áreas.`,
    steps: [
      "Levantamiento topográfico del terreno",
      "Análisis de datos y generación de planos",
      "Entrega del informe y planos definitivos"
    ],
    note: "Los servicios topográficos son esenciales para cualquier proyecto de construcción.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Servicios+de+Topograf%C3%ADa"
  };
}
else if (serviceId === 'tasaciones-municipales') {
  serviceDetails = {
    title: "Tasaciones Municipales",
    description: `Valoración oficial de propiedades o terrenos, realizada por la municipalidad para determinar su valor catastral o comercial.`,
    steps: [
      "Solicitud de tasación ante la municipalidad",
      "Inspección del inmueble y análisis de mercado",
      "Entrega del informe de tasación"
    ],
    note: "Las tasaciones municipales son necesarias para trámites fiscales y legales.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Tasaciones+Municipales"
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

export default MunicipalidadDetallePage;