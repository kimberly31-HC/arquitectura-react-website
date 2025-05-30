import { useParams } from 'react-router-dom';
import "../../../styles/RegistroDetallePage.scss"; // Archivo de estilos específico

const RegistroDetallePage = () => {
  const { serviceId } = useParams();
  let serviceDetails = {};

 // Lógica para determinar qué mostrar
if (serviceId === 'prescripcion-adquisitiva') {
  serviceDetails = {
    title: "Prescripción Adquisitiva",
    description: `Es el procedimiento legal mediante el cual una persona puede adquirir un inmueble por haberlo poseído de manera continua, pacífica y pública durante un periodo determinado.`,
    steps: [
      "Recopilación de pruebas de posesión",
      "Informe técnico legal",
      "Presentación de demanda judicial"
    ],
    note: "Este proceso debe realizarse ante un juez con la asesoría de un abogado especializado.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Prescripción"
  };
}
else if (serviceId === 'saneamiento-catastral') {
  serviceDetails = {
    title: "Saneamiento Catastral",
    description: `Consiste en actualizar y regularizar la información física, legal y registral de un predio, para que coincida con la realidad.`,
    steps: [
      "Levantamiento topográfico",
      "Informe técnico",
      "Coordinación con la municipalidad o SUNARP"
    ],
    note: "Permite evitar futuros problemas legales o técnicos.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Saneamiento"
  };
}
else if (serviceId === 'busqueda-catastral') {
  serviceDetails = {
    title: "Búsqueda Catastral",
    description: `Es una verificación oficial en la base catastral nacional o municipal para conocer si un predio está inscrito y sus características.`,
    steps: [
      "Consulta en registros públicos",
      "Informe de coincidencia predial",
      "Evaluación de colindancias y medidas"
    ],
    note: "Es un paso previo esencial para la regularización de propiedades.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Búsqueda"
  };
}
else if (serviceId === 'declaracion-de-fabrica') {
  serviceDetails = {
    title: "Declaración de Fábrica",
    description: `Consiste en inscribir en registros públicos una construcción ya existente, declarando sus características físicas y técnicas.`,
    steps: [
      "Levantamiento arquitectónico",
      "Memoria descriptiva",
      "Plano de distribución y ubicación"
    ],
    note: "Permite formalizar construcciones ante la SUNARP.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Fábrica"
  };
}
else if (serviceId === 'acumulacion-de-lote') {
  serviceDetails = {
    title: "Acumulación de Lote",
    description: `Es la unificación de dos o más predios colindantes en un solo lote con una nueva partida registral.`,
    steps: [
      "Plano de acumulación",
      "Informe técnico legal",
      "Solicitud de inscripción en Registros Públicos"
    ],
    note: "Es útil para proyectos inmobiliarios o venta conjunta de terrenos.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Acumulación"
  };
}
else if (serviceId === 'reglamento-interno-y-junta-de-propietarios') {
  serviceDetails = {
    title: "Reglamento Interno y Junta de Propietarios",
    description: `Se refiere a la elaboración del reglamento que regula la convivencia en una propiedad horizontal y la constitución formal de su junta.`,
    steps: [
      "Redacción del reglamento",
      "Convocatoria a los propietarios",
      "Inscripción del reglamento en registros públicos"
    ],
    note: "Es indispensable para edificios multifamiliares o condominios.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Reglamento"
  };
}
else if (serviceId === 'rectificacion-de-area-y-linderos') {
  serviceDetails = {
    title: "Rectificación de Área y Linderos",
    description: `Procedimiento técnico y legal que busca corregir discrepancias entre el área física del predio y la registrada.`,
    steps: [
      "Medición topográfica actualizada",
      "Informe técnico con sustento legal",
      "Trámite ante Registros Públicos"
    ],
    note: "Corrige errores en el título de propiedad que pueden impedir una venta o herencia.",
    image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Rectificación"
  };
}
else if (serviceId === 'independizacion') {
  serviceDetails = {
    title: "Independización",
    description: `Proceso legal para dividir y registrar una propiedad que antes formaba parte de un predio mayor, otorgando individualidad jurídica a cada parte.`,
    steps: [
      "Levantamiento topográfico de la propiedad",
      "Elaboración de planos parcelarios",
      "Trámite de inscripción en Registros Públicos"
    ],
    note: "Permite a cada nuevo propietario tener un título independiente y reconocido legalmente.",
    image: "https://via.placeholder.com/300x200/ff6f61/ffffff?text=Independización"
  };
} 
else if (serviceId === 'soluciones-a-observaciones-registrales') {
  serviceDetails = {
    title: "Soluciones a Observaciones Registrales",
    description: `Atención y subsanación de observaciones o requisitos emitidos por Registros Públicos para completar o corregir documentos.`,
    steps: [
      "Análisis de la observación recibida",
      "Corrección o complementación de documentos",
      "Presentación y seguimiento del trámite"
    ],
    note: "Es fundamental para evitar retrasos en la inscripción o modificación registral.",
    image: "https://via.placeholder.com/300x200/f4a261/ffffff?text=Observaciones"
  };
} 
else if (serviceId === 'inmatriculacion') {
  serviceDetails = {
    title: "Inmatriculación",
    description: `Procedimiento para inscribir por primera vez un inmueble en los Registros Públicos, acreditando su existencia y titularidad.`,
    steps: [
      "Recolección de documentos legales y planos",
      "Presentación de la solicitud ante Registros Públicos",
      "Inscripción y obtención del título registral"
    ],
    note: "Clave para formalizar propiedades que nunca fueron registradas.",
    image: "https://via.placeholder.com/300x200/2a9d8f/ffffff?text=Inmatriculación"
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

export default RegistroDetallePage;