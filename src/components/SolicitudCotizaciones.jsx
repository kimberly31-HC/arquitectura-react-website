import { FaEnvelope, FaPhoneAlt, FaMoneyBillWave } from 'react-icons/fa';
import '../styles/SolicitudCotizaciones.scss';

// Importa las imágenes de las tarjetas (asegúrate de tenerlas en tu proyecto)
import tarjeta1 from '../assets/img/pagos/pago1.png';
import tarjeta2 from '../assets/img/pagos/pago2.png';
import tarjeta3 from '../assets/img/pagos/pago3.png';
import tarjeta4 from '../assets/img/pagos/pago4.png';
import tarjeta5 from '../assets/img/pagos/pago5.png';
import tarjeta6 from '../assets/img/pagos/pago6.png';
import tarjeta7 from '../assets/img/pagos/pago7.png';

const SolicitudCotizaciones = () => {
  const tarjetas = [
    { id: 1, img: tarjeta1, alt: "Visa" },
    { id: 2, img: tarjeta2, alt: "Mastercard" },
    { id: 3, img: tarjeta3, alt: "American Express" },
    { id: 4, img: tarjeta4, alt: "Diners Club" },
    { id: 5, img: tarjeta5, alt: "Discover" },
    { id: 6, img: tarjeta6, alt: "JCB" },
    { id: 7, img: tarjeta7, alt: "Tarjeta Local" }
  ];

  return (
    <section className="cotizaciones-section">
      <div className="container">
        <div className="cotizaciones-content">
          <div className="cotizaciones-header">
            <h2 className="cotizaciones-title">SOLICITA TUS COTIZACIONES</h2>
            <div className="divider"></div>
          </div>
          
          <div className="contacto-info">
            <div className="contacto-item">
              <FaEnvelope className="contacto-icon" />
              <a href="mailto:gestion@hotmail.com" className="contacto-text">gestion@hotmail.com</a>
            </div>
            
            <div className="contacto-item">
              <FaPhoneAlt className="contacto-icon" />
              <a href="tel:+51962303092" className="contacto-text">+51 962 303 092</a>
            </div>
          </div>
          
          <div className="metodos-pago">
            <h3 className="metodos-title">Se aceptan todas las tarjetas de crédito</h3>
            
            <div className="tarjetas-container">
              {tarjetas.map((tarjeta) => (
                <div key={tarjeta.id} className="tarjeta-item">
                  <img 
                    src={tarjeta.img} 
                    alt={tarjeta.alt} 
                    className="tarjeta-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            <div className="transferencias">
              <div className="transferencia-item">
                <FaMoneyBillWave className="transferencia-icon" />
                <div>
                  <p>Cuenta Corriente BCP</p>
                  <p className="cuenta-numero">191-7674171-0-77</p>
                </div>
              </div>
              
              <div className="transferencia-item">
                <FaMoneyBillWave className="transferencia-icon" />
                <div>
                  <p>Cuenta CCI BCP</p>
                  <p className="cuenta-numero">00219100767417107756</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolicitudCotizaciones;