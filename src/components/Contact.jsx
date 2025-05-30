import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Chatbot from "../components/Chatbot"; 
import WhatsAppButton from '../components/Whatsapp'; 
import Cotizacion from '../components/ButtonCotizacion';
import '../styles/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [ref, inView] = useInView({ threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      console.log('Formulario enviado:', formData);
      setIsSubmitting(false);
      setSubmitMessage('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', message: '' });
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '51962303092';
    const message = 'Hola, quiero información sobre el servicio: ';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contacto" ref={ref} className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="contact-content"
        >
          <div className="contact-info">
            <h2 className="section-title">¡Contáctanos!</h2>
            <p className="contact-description">
              ¿Listo para comenzar tu próximo proyecto? Contáctanos y hagámoslo realidad.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3 className="contact-title">Dirección</h3>
                  <p>Av. Arquitectura 1234, Ciudad Moderna</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3 className="contact-title">Teléfono</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3 className="contact-title">Email</h3>
                  <p>info@arquitech.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="contact-form-container"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-btn"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="submit-message"
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>

        <div className="contact-actions">
          <Chatbot />
          <WhatsAppButton onClick={handleWhatsAppClick} />
        </div>

        <div className="cotizacion-button">
          <Cotizacion />
        </div>
      </div>
    </section>
  );
};

export default Contact;
