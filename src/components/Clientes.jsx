import { useEffect, useRef } from 'react';
import '../styles/Clientes.scss'; // Archivo SCSS

const ClientesTrompo = () => {
  const clientes = [
    { id: 1, logo: '/src/assets/img/clientes/cliente1.jpg', alt: 'Cliente 1' },
    { id: 2, logo: '/src/assets/img/clientes/cliente2.png', alt: 'Cliente 2' },
    { id: 3, logo: '/src/assets/img/clientes/cliente3.jpg', alt: 'Cliente 3' },
    { id: 4, logo: '/src/assets/img/clientes/cliente4.jpg', alt: 'Cliente 4' },
    { id: 5, logo: '/src/assets/img/clientes/cliente6.jpg', alt: 'Cliente 5' },
    { id: 6, logo: '/src/assets/img/clientes/cliente7.png', alt: 'Cliente 6' },
  ];

  const carruselRef = useRef(null);
  const animationRef = useRef(null);
  const radius = 250; // Radio del círculo
  const rotationSpeed = 0.5; // Grados por frame (ajustable)

   useEffect(() => {
    const carrusel = carruselRef.current;
    let angle = 0;

    const rotate = () => {
      angle += rotationSpeed;
      carrusel.style.transform = `rotateY(${angle}deg)`;
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
        <h2 className="clientes-trompo__title">Nuestros Clientes</h2>
        <p className="clientes-trompo__subtitle">Empresas que han confiado en nuestro trabajo</p>
        
        <div className="clientes-trompo__stage">
          <div className="clientes-trompo__carousel" ref={carruselRef}>
            {clientes.map((cliente, index) => {
              const angle = (360 / clientes.length) * index;
              return (
                <div 
                  key={cliente.id}
                  className="clientes-trompo__item"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`
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
    </section>
  );
};

export default ClientesTrompo;