import { useEffect, useRef } from 'react';
import '../styles/HeroCarousel.scss'; // Importamos los estilos SCSS
import s from '../assets/img/inicio/s.jpeg';
import imagen2 from '../assets/img/inicio/imagen2.jpg';
import carrusel3 from '../assets/img/inicio/carrusel3.jpg';
export default function HeroCarousel() {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const currentIndexRef = useRef(0);

  const slides = [
    {
      img: s,
      title: "Asesoría Legal - Saneamiento de Propiedad",
      subtitle: "Soluciones legales integrales para tu propiedad"
    },

    {
      img: imagen2,
      title: "Trámites y Expedientes Sunarp - Registros Públicos",
      subtitle: "Gestión eficiente de todos tus trámites registrales"
    },
    {
      img: carrusel3,
      title: "Asesoría Profesional",
      subtitle: "Expertos a tu disposición para cualquier consulta legal"
    }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Función para cambiar al siguiente slide
    const nextSlide = () => {
      currentIndexRef.current = (currentIndexRef.current + 1) % totalSlides;
      updateCarousel();
    };

    // Actualiza el carrusel mostrando el slide actual
    const updateCarousel = () => {
      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'next');
        
        if (index === currentIndexRef.current) {
          slide.classList.add('active');
        } else if (index === (currentIndexRef.current - 1 + totalSlides) % totalSlides) {
          slide.classList.add('prev');
        } else if (index === (currentIndexRef.current + 1) % totalSlides) {
          slide.classList.add('next');
        }
      });
    };

    // Iniciar el carrusel automático
    intervalRef.current = setInterval(nextSlide, 5000);

    // Limpieza al desmontar el componente
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="hero-carousel" ref={carouselRef}>
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`carousel-slide ${index === 0 ? 'active' : ''}`}
        >
          <div className="slide-overlay"></div>
          <img 
            src={slide.img} 
            alt={slide.title} 
            className="slide-image"
          />
          <div className="slide-content">
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-subtitle">{slide.subtitle}</p>
            <button 
              className="cta-button"
              onClick={() => window.location.href = './cotizacion.php'}
            >
              ¡Cotiza Ahora!
            </button>
          </div>
        </div>
      ))}
      
      <div className="carousel-controls">
        <button className="control-btn prev-btn">‹</button>
        <div className="carousel-pagination"></div>
        <button className="control-btn next-btn">›</button>
      </div>
      
    </div>
  );
}