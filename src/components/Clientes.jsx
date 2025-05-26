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

  const carruselRef = useRef(null);
  const animationRef = useRef(null);
  const radius = 250; // Radio del círculo
  const rotationSpeed = 0.5; // Velocidad de rotación

  useEffect(() => {
    const carrusel = carruselRef.current;
    let angle = 0;

    const rotate = () => {
      angle += rotationSpeed;
      if (angle >= 360) angle = 0; // Reinicia el ángulo después de 360 grados
      carrusel.style.transform = `rotateY(${angle}deg)`; // Aplica la rotación al contenedor
      animationRef.current = requestAnimationFrame(rotate);
    };

    // Iniciar animación
    animationRef.current = requestAnimationFrame(rotate);

    // Limpieza al desmontar
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="clientes-trompo">
      <div className="clientes-trompo__container">
        <div className="clientes-trompo__header">
          <div className="clientes-trompo__text">
            <h2 className="clientes-trompo__title">Nuestros Clientes</h2>
            <p className="clientes-trompo__subtitle">Empresas que han confiado en nuestro trabajo</p>
          </div>
          <div className="clientes-trompo__carousel-container">
            <div className="clientes-trompo__stage">
              <div className="clientes-trompo__carousel" ref={carruselRef}>
                {clientes.map((cliente, index) => {
                  const angle = (360 / clientes.length) * index;
                  return (
                    <div
                      key={cliente.id}
                      className="clientes-trompo__item"
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      }}
                    >
                      <img 
                        src={cliente.logo} 
                        alt={cliente.alt} 
                        className="clientes-trompo__logo"
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesTrompo;
