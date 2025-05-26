import { useState } from 'react';
import '../styles/FaqSection.scss';
import faqImage from '../assets/img/inicio/preguntas.jpg'; // Asegúrate de tener esta imagen en tu carpeta assets

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo contactar al soporte?",
      answer: "Puedes contactarnos a través del formulario en la página de contacto o enviando un email a soporte@tudominio.com."
    },
    {
      question: "¿Cuáles son los métodos de pago aceptados?",
      answer: "Aceptamos tarjetas de crédito/débito, PayPal y transferencias bancarias."
    },
    {
      question: "¿Cuánto tiempo tardan en responder?",
      answer: "Nuestro tiempo de respuesta promedio es de 24 horas hábiles."
    },
    {
      question: "¿Ofrecen garantía en sus servicios?",
      answer: "Sí, todos nuestros servicios cuentan con garantía de 1 año."
    },
    {
      question: "¿Trabajan a nivel nacional?",
      answer: "Sí, cubrimos todo el territorio nacional con nuestros servicios."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-image">
        <img src={faqImage} alt="Persona revisando documentos" />
      </div>
      <div className="faq-content">
        <section className="faq">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2 className="faq__title">Preguntas Frecuentes</h2>
            <p className="faq__subtitle">Encuentra respuestas a las dudas más comunes</p>
          </div>
          <div className="faq__container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq__item ${activeIndex === index ? 'faq__item--active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq__question">
                  <h3>{faq.question}</h3>
                  <span className="faq__toggle">
                    {activeIndex === index ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </span>
                </div>
                <div className="faq__answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FaqSection;