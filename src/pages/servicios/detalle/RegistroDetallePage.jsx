import { useParams } from 'react-router-dom';
import "../../../styles/RegistroDetallePage.scss"; // Archivo de estilos específico

const RegistroDetallePage = () => {
  const { serviceId } = useParams();
  let serviceDetails = {};

  // Lógica para determinar qué mostrar
  if (serviceId === 'prescripción-adquisitiva') {
    serviceDetails = {
      title: "Declaratoria de Fábrica",
      description: `La declaratoria de fábrica es la inscripción de una construcción en Registros Públicos donde se determinan las características y condiciones técnicas de una obra...`,
      steps: [
        "Informe técnico de verificación",
        "Plano de Ubicación",
        "Plano de Distribución"
      ],
      note: "Dicho expediente se legaliza y se presenta a Registros Públicos.",
      image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Declaratoria" // URL de imagen de ejemplo
    };
  }
  else if (serviceId === 'saneamiento-catastral') {
    serviceDetails = {
      title: "Declaratoria de Fábrica",
      description: `La declaratoria de fábrica es la inscripción de una construcción en Registros Públicos donde se determinan las características y condiciones técnicas de una obra...`,
      steps: [
        "Informe técnico de verificación",
        "Plano de Ubicación",
        "Documentación legal"
      ],
      note: "Dicho expediente se legaliza y se presenta a Registros Públicos.",
      image: "https://via.placeholder.com/300x200/3a7bd5/ffffff?text=Saneamiento" // URL de imagen de ejemplo
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