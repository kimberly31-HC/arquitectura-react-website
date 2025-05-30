import { useEffect, useRef } from 'react';
import '../styles/Clientes.scss'; // Archivo SCSS
import cliente1 from '../assets/img/clientes/cliente1.jpg';
import cliente2 from '../assets/img/clientes/cliente2.png';
import cliente3 from '../assets/img/clientes/cliente3.jpg';
import cliente4 from '../assets/img/clientes/cliente4.jpg';
import cliente5 from '../assets/img/clientes/cliente6.jpg';
import cliente6 from '../assets/img/clientes/cliente7.png';

const ClientesTrompo = () => {
  const clientes = [
    { id: 1, logo: cliente1, alt: 'Cliente 1' },
    { id: 2, logo: cliente2, alt: 'Cliente 2' },
    { id: 3, logo: cliente3, alt: 'Cliente 3' },
    { id: 4, logo: cliente4, alt: 'Cliente 4' },
    { id: 5, logo: cliente5, alt: 'Cliente 5' },
    { id: 6, logo: cliente6, alt: 'Cliente 6' },
  ];

  return (
    <section className="clientes-trompo">
      <div className="clientes-trompo__container">
        <div className="clientes-trompo__header">
          <div className="clientes-trompo__text">
            <h1 className="clientes-trompo__title">Nuestros Clientes</h1>
            <p className="clientes-trompo__subtitle">Una parte de clientes que confian en nuestro trabajo</p>
          </div>
          <div className="clientes-trompo__carousel-container">
            <div className="clientes-trompo__stage">
              <div className="clientes-trompo__carousel">
                {clientes.concat(clientes).map((cliente, index) => (
                  <div
                    key={cliente.id}
                    className="clientes-trompo__item"
                  >
                    <img
                      src={cliente.logo}
                      alt={cliente.alt}
                      className="clientes-trompo__logo"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesTrompo;