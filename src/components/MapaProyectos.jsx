import { useState } from 'react';
import '../styles/MapaProyectos.scss';

const MapaProyectos = () => {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');

  const ciudades = [
    { nombre: "Lima", proyectos: 45 },
    { nombre: "Arequipa", proyectos: 18 },
    { nombre: "Trujillo", proyectos: 12 },
    { nombre: "Tacna", proyectos: 8 },
    { nombre: "Chiclayo", proyectos: 10 },
    { nombre: "Cusco", proyectos: 7 },
    { nombre: "Piura", proyectos: 9 }
  ];

  const handleCiudadChange = (e) => {
    setCiudadSeleccionada(e.target.value);
    // Aquí iría la lógica para actualizar el mapa
  };

  const resetMapa = () => {
    setCiudadSeleccionada('');
    // Aquí iría la lógica para resetear el mapa
  };

  return (
    <section className="mapa-proyectos">
      <div className="container">
        {/* Header */}
        <div className="mapa-header  mapa-titulo text-center">
          <h2 className="mapa-titulo">NUESTROS PROYECTOS HABLAN POR SÍ MISMOS A NIVEL NACIONAL</h2>
          <div className="mapa-divider"></div>
          <p className="mapa-subtitulo">
            Cada punto en este mapa representa un proyecto exitoso que hemos entregado, y seguimos expandiendo nuestra huella
          </p>
        </div>

        {/* Controles del mapa */}
        <div className="mapa-controles">
          <button 
            onClick={resetMapa}
            className="mapa-boton"
          >
            Ver Todo Perú
          </button>
          
          <select 
            value={ciudadSeleccionada}
            onChange={handleCiudadChange}
            className="mapa-select"
          >
            <option value="">Selecciona una ciudad</option>
            {ciudades.map((ciudad, index) => (
              <option key={index} value={ciudad.nombre}>
                {ciudad.nombre} ({ciudad.proyectos} proyectos)
              </option>
            ))}
          </select>
        </div>

        {/* Mapa */}
        <div className="mapa-container">
          <div className="mapa-imagen">
            {/* Reemplaza esto con tu implementación real del mapa */}
            <img 
              src="https://maps.googleapis.com/maps/api/staticmap?center=Peru&zoom=5&size=1200x500&scale=2&key=TU_API_KEY" 
              alt="Mapa de proyectos en Perú" 
              className="mapa-img"
            />
            {/* Marcadores simulados */}
            <div className="mapa-marcadores">
              {ciudades.map((ciudad, index) => (
                <div 
                  key={index} 
                  className={`marcador ${ciudadSeleccionada && ciudadSeleccionada !== ciudad.nombre ? 'marcador-inactivo' : ''}`}
                  style={{
                    left: `${10 + (index * 12)}%`,
                    top: `${30 + (index % 3 * 15)}%`
                  }}
                  data-proyectos={ciudad.proyectos}
                >
                  <div className="marcador-punto"></div>
                  <div className="marcador-tooltip">{ciudad.nombre}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mapa-estadisticas">
          <div className="estadistica-item1">
            <span className="estadistica-numero">100+</span>
            <p className="estadistica-texto">Proyectos Completados</p>
          </div>
          <div className="estadistica-item1">
            <span className="estadistica-numero">50+</span>
            <p className="estadistica-texto">Ciudades</p>
          </div>
          <div className="estadistica-item1">
            <span className="estadistica-numero">95%</span>
            <p className="estadistica-texto">Satisfacción</p>
          </div>
        </div>

        {/* Descripción final */}
        <div className="mapa-descripcion text-center">
          <p>
            Nos enorgullece tener proyectos en todo el país, desde las grandes ciudades hasta las regiones más remotas.
            <br />
            <button className="mapa-boton-cta">Ver todos nuestros proyectos</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapaProyectos;