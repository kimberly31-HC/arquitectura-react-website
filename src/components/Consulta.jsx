import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Consulta.scss';
import banner from '../assets/img/backgrounds/miraflores.jpg';

const estadosColores = {
  "Presentado": "#00a7a4",
  "Reingresado": "#1d58b4",
  "Apelado": "#ef8e00",
  "En proceso": "#b4b4b4",
  "En calificación": "#5a2071",
  "Inscrito": "#89be21",
  "Reservado": "#575756",
  "Distribuido": "#f31c53",
  "Liquidado": "#006633",
  "Prorrogado": "#80d0ff",
  "Observado": "red",
  "Suspendido": "#981622",
  "Tachado": "black",
  "Anotado": "#7eb3d5",
  "Res. Tribunal": "black",
  "Res. Procedente": "#006633",
  "Res. Improcedente": "black",
  "Finalizado": "#89be21",
  "Desactivado": "#eb3219"
};

function Consulta() {
  const [idOt, setIdOt] = useState('');
  const [anio, setAnio] = useState('2025');
  const [resultados, setResultados] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const buscarOT = async (e) => {
    e.preventDefault();
    try {
      const url = `https://planosperu.com.pe/intranet/api/consulta/?id_ot=${idOt}&nac_ot_year=${anio}`;
      const res = await axios.get(url);

      if (res.data && Object.keys(res.data).length > 0) {
        setResultados(res.data);
        setError(null);
        setCurrentPage(1); // Reset to first page on new search
      } else {
        setResultados(null);
        setError('No se encontró ningún resultado.');
      }
    } catch (err) {
      console.error(err);
      setError('Hubo un problema al consultar la API.');
      setResultados(null);
    }
  };
// Primero, filtras por término de búsqueda
const filteredActivities = resultados?.data?.[0]?.actividades?.filter(act => 
  act.des_act.toLowerCase().includes(searchTerm.toLowerCase()) ||
  act.nom_col.toLowerCase().includes(searchTerm.toLowerCase()) ||
  act.nom_are.toLowerCase().includes(searchTerm.toLowerCase())
) || [];
// Obtener la actividad más reciente
const latestActivity = filteredActivities.reduce((latest, current) => {
  return new Date(current.hor_fin) > new Date(latest.hor_fin) ? current : latest;
}, filteredActivities[0]);

// Luego, agrupas por día y te quedas con la actividad con hor_fin más reciente
const activitiesByDay = {};

filteredActivities.forEach(act => {
  const dateKey = new Date(act.hor_fin).toLocaleDateString(); // agrupar por fecha (sin hora)
  if (!activitiesByDay[dateKey] || new Date(act.hor_fin) > new Date(activitiesByDay[dateKey].hor_fin)) {
    activitiesByDay[dateKey] = act;
  }
});

const latestActivitiesPerDay = Object.values(activitiesByDay);

// Ordenar por fecha hor_fin descendente (más reciente primero)
latestActivitiesPerDay.sort((a, b) => new Date(b.hor_fin) - new Date(a.hor_fin));

// Pagination logic
const totalPages = Math.ceil(latestActivitiesPerDay.length / rowsPerPage);
const paginatedActivities = latestActivitiesPerDay.slice(
  (currentPage - 1) * rowsPerPage,
  currentPage * rowsPerPage
);



  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [rowsPerPage, currentPage, totalPages]);

  return (
    <div className="consulta-container">
   <div className="consulta-header">
  <div className="banner-container">
    <div className="banner-image-wrapper">
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="banner-overlay"></div>
    </div>
    <div className="header-content">
      <h2>Sistema de Consulta de Trámites</h2>
      <p>Si ya eres cliente de nosotros, sigue tus trámites.</p>
    </div>
    <div className="wave-shape">
     
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"         preserveAspectRatio="none"
></svg>
    </div>
  </div>
</div>




      <form onSubmit={buscarOT} className="consulta-form">
        <div className="form-group">
                <label htmlFor="idOt" style={{ width: '120px', fontWeight: 'bold' ,marginRight:'20px'}}>Número de OT:</label>
          <input
            type="text"
            placeholder="Número de OT"
            value={idOt}
            onChange={e => setIdOt(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
        <label htmlFor="idOt" style={{ width: '120px', fontWeight: 'bold' ,marginRight:'20px'}}>Año:</label>
          <select 
            value={anio} 
            onChange={e => setAnio(e.target.value)}
            className="form-select"
          >
            {[2021, 2022, 2023, 2024, 2025].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="form-button">Buscar</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {resultados && resultados.data && resultados.data.length > 0 && (
        <div className="resultados-container">
          <div className="resultados-grid">
            {/* Resultados de búsqueda (izquierda) */}
            <div className="resultados-card">
              <div className="card-header">
                <h3>Resultados de la busqueda</h3>
              </div>
              <div className="card-body">
                <div className="info-item">
                  <span className="info-label">Fecha de Creación:</span>
                  <span className="info-value">
{new Date(resultados.data[0].nac_ot).toLocaleDateString('es-PE', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})}
                  </span>
                </div>
                
                <div className="info-item">
                  <span className="info-label">Orden de Trabajo:</span>
                  <span className="info-value highlight">
                    {resultados.data[0].id_ot || resultados.data[0].id_ot}
                  </span>
                </div>
                
                <div className="info-item">
                  <span className="info-label">Estado:</span>
                  <span 
                    className="info-value" 
                    style={{ 
                      color: estadosColores[resultados.data[0].est_ot] || 'black',
                      fontWeight: 'bold'
                    }}
                  >
                    {resultados.data[0].est_ot}
                  </span>
                </div>
                
                <div className="info-item">
                  <span className="info-label">Tipo de Expediente:</span>
                  <span className="info-value">
                    {resultados.data[0].expedientes && resultados.data[0].expedientes[0]?.org_exp}
                  </span>
                </div>
                
                <div className="info-item">
                  <span className="info-label">Estado de Expediente:</span>
                  <span 
                    className="info-value" 
                    style={{ 
                      color: estadosColores[resultados.data[0].expedientes && resultados.data[0].expedientes[0]?.est_exp] || 'black',
                      fontWeight: 'bold'
                    }}
                  >
                    {resultados.data[0].expedientes && resultados.data[0].expedientes[0]?.est_exp}
                  </span>
                </div>
              </div>
            </div>

            {/* Detalle de seguimiento (derecha) */}
            <div className="seguimiento-card">
              <div className="card-header">
                <h3>Detalle del Seguimiento</h3>
                <div className="table-controls">
                  <div className="search-box">
  <input
    type="text"
    placeholder="Buscar..."
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    className="search-input"
  />
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="search-icon" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    width="20" 
    height="20"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M11 4a7 7 0 105.292 12.292l4.207 4.207a1 1 0 001.414-1.414l-4.207-4.207A7 7 0 0011 4z" 
    />
  </svg>
</div>

                  <div className="rows-selector">
                    <label>Mostrar:</label>
                    <select
                      value={rowsPerPage}
                      onChange={e => setRowsPerPage(Number(e.target.value))}
                      className="rows-select"
                    >
                      {[10, 15, 20, 25, 50].map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="seguimiento-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Fecha</th>
                        <th>Actividad</th>
                        <th>Responsable</th>
                        <th>Área</th>
                      </tr>
                    </thead>
                   <tbody>
  {paginatedActivities.length > 0 ? (
    [...paginatedActivities]
      .sort((a, b) => new Date(b.hor_ini) - new Date(a.hor_ini)) // Orden descendente por fecha
      .map((act, index) => (
        <tr key={act.id_act}>
          <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
          <td>
            {new Date(act.hor_ini).toLocaleDateString('es-PE', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </td>
          <td>{act.des_act}</td>
<td>{act.nom_col.split(' ')[0]}</td>
          <td>{act.nom_are}</td>
        </tr>
      ))
  ) : (
    <tr>
      <td colSpan="5" className="no-results">
        No se encontraron resultados para la búsqueda
      </td>
    </tr>
  )}
</tbody>

                  </table>
                </div>

                {/* Paginación */}
                {filteredActivities.length > 0 && (
  <div className="pagination">
    {/* Botón Primero */}
    <button
      onClick={() => setCurrentPage(1)}
      disabled={currentPage === 1}
      className="pagination-button"
    >
      « Primero
    </button>

    {/* Botón Anterior */}
    <button
      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
      disabled={currentPage === 1}
      className="pagination-button"
    >
      ‹ Anterior
    </button>

    {/* Botones de números de página */}
    {[...Array(totalPages)].map((_, i) => {
      const pageNum = i + 1;
      return (
        <button
          key={pageNum}
          onClick={() => setCurrentPage(pageNum)}
          className={`pagination-button ${currentPage === pageNum ? 'active' : ''}`}
        >
          {pageNum}
        </button>
      );
    })}

    {/* Botón Siguiente */}
    <button
      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
      disabled={currentPage === totalPages}
      className="pagination-button"
    >
      Siguiente ›
    </button>

    {/* Botón Último */}
    <button
      onClick={() => setCurrentPage(totalPages)}
      disabled={currentPage === totalPages}
      className="pagination-button"
    >
      Último »
    </button>
  </div>
)}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Consulta;