import { useEffect, useRef } from 'react';
import '../styles/HeroCarousel.scss';
import s from '../assets/img/banner/imagen1.jpg';
import imagen2 from '../assets/img/banner/imagen4.avif';
import carrusel3 from '../assets/img/banner/imagen7.jpg';
import imagen8 from '../assets/img/banner/imagen8.png';
import asesoria from '../assets/img/banner/asesoria.png';
import sunat from '../assets/img/banner/sunarp.jpg';
import fachada from '../assets/img/banner/fachada4.jpg';

export default function HeroCarousel() {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const currentIndexRef = useRef(0);

  const slides = [
    { img: s, title: "Asesoría Legal - Saneamiento de Propiedad"},
    { img: imagen2, title: "Trámites y Expedientes Sunarp - Registros Públicos" },
    { img: carrusel3, title: "Asesoría Profesional" },
    { img: imagen8, title: "Asesoría Profesional"},
    { img: sunat, title: "Trámites y Gestión - Registros Públicos" },
    { img: fachada, title: "Fachada en 3D y Diseño de Interiores"},
    { img: asesoria, title: "Fachada en 3D y Diseño de Interiores"}
  ];

  const updateCarousel = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const slideElements = carousel.querySelectorAll('.carousel-slide');
    const totalSlides = slideElements.length;

    slideElements.forEach((slide, index) => {
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

  const nextSlide = () => {
    currentIndexRef.current = (currentIndexRef.current + 1) % slides.length;
    updateCarousel();
  };

  const prevSlide = () => {
    currentIndexRef.current = (currentIndexRef.current - 1 + slides.length) % slides.length;
    updateCarousel();
  };

  useEffect(() => {
    updateCarousel(); // inicializa correctamente

    intervalRef.current = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="hero-carousel" ref={carouselRef}>
      {slides.map((slide, index) => (
        <div key={index} className={`carousel-slide ${index === 0 ? 'active' : ''}`}>
          <div className="slide-overlay"></div>
          <img src={slide.img} alt={slide.title} className="slide-image" />
          <div className="slide-content">
            <h2 className="slide-title">{slide.title}</h2>
          </div>
        </div>
      ))}

      <div className="carousel-controls">
        <button className="control-btn prev-btn" onClick={prevSlide}>‹</button>
        <div className="carousel-pagination"></div>
        <button className="control-btn next-btn" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
}
