import { useState } from 'react';
import { FaFilePdf, FaArrowRight } from 'react-icons/fa';
import '../styles/TrabajaConNosotros.scss';

const TrabajaConNosotros = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    carrera: '',
    fechaNacimiento: '',
    celular: '',
    email: '',
    distrito: '',
    cv: null
  });

  const distritos = [
    'Comas',
    'San Juan de Miraflores',
    'Lurín',
    'Lima Centro',
    'Callao',
    'Villa El Salvador',
    'Otro'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      cv: e.target.files[0]
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const formDataToSend = new FormData();
  for (const key in formData) {
    formDataToSend.append(key, formData[key]);
  }

  try {
    const response = await fetch('https://planosperu.com.pe/intranet/api/postular/', {
      method: 'POST',
      body: formDataToSend
    });

    if (response.ok) {
      alert('¡Postulación enviada con éxito! Nos comunicaremos contigo pronto.');
      setFormData({
        nombre: '',
        apellido: '',
        carrera: '',
        fechaNacimiento: '',
        celular: '',
        email: '',
        distrito: '',
        cv: null
      });
    } else {
      alert('Hubo un error al enviar tu postulación.');
    }
  } catch (error) {
    console.error(error);
    alert('Error de red. Inténtalo más tarde.');
  }
};

  return (
    <section className="trabaja-con-nosotros">
      <div className="container">
        <div className="grid-layout">
          {/* Sección de información */}
          <div className="info-section">
            <h1>BOLSA DE TRABAJO</h1>
            <p className="intro-text">
                  ¿Listo para un nuevo reto? 💼<br />
 Si eres curioso, trabajador y te encanta aprender, este es tu lugar.
    Nuestro proceso de reclutamiento es simple y directo. <strong>¡Solo tienes que dar el primer paso!</strong>
            </p>

            <div className="beneficios-section">
              <h2>BENEFICIOS</h2>
              <ul>
                <li>Especializarte en tu carrera</li>
                <li>Hacer una línea de carrera</li>
                <li>Capacitarte continuamente</li>
                <li>Beneficios según desempeño óptimo constante</li>
              </ul>
            </div>

            <div className="requisitos-section">
              <h2>REQUISITOS</h2>
              <ul>
                <li>Capacidad de trabajo en equipo</li>
                <li>Ser comunicativo(a)</li>
                <li>Sentido de investigación</li>
                <li>Resolución de problemas</li>
              </ul>
            </div>

            <div className="instrucciones">
              <p>
                Envía tu CV al correo <strong>gestion@hotmail.com</strong> con el asunto 
                <strong> "Nombre de la carrera que desempeña" </strong>
              </p>
              <p className="destacado">
                LISTO! Nuestra área de recursos humanos se comunicará contigo para una entrevista.<br />
                ÉXITOS A TODOS LOS POSTULANTES
              </p>
            </div>

            <div className="importante-section">
              <h3>IMPORTANTE:</h3>
              <p>
                Buscamos talentos en el área de dibujo técnico, ingenieros y arquitectos junior, 
                administradores o personal de otras carreras con experiencia. A partir de la edad de 18 años - 
                sin límite de edad, de preferencia que residan en distritos aledaños a Comas, 
                San Juan de Miraflores o Lurín.
              </p>
            </div>
          </div>

          {/* Sección del formulario */}
          <div className="form-section">
            <div className="form-container1">
              <h2>¡POSTULA AHORA!</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Escribe tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Escribe tus apellidos"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Carrera</label>
                  <input
                    type="text"
                    name="carrera"
                    placeholder="Escribe tu carrera"
                    value={formData.carrera}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Fecha de Nacimiento</label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Número de Celular</label>
                  <input
                    type="tel"
                    name="celular"
                    placeholder="Escribe tu número de contacto"
                    value={formData.celular}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Escribe tu correo"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Distrito</label>
                  <select
                    name="distrito"
                    value={formData.distrito}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccionar Distrito</option>
                    {distritos.map((distrito, index) => (
                      <option key={index} value={distrito}>{distrito}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group file-upload">
                  <label>
                    <FaFilePdf className="icon" />
                    Adjuntar CV (PDF)
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  <span className="file-name">
                    {formData.cv ? formData.cv.name : 'Ningún archivo seleccionado'}
                  </span>
                </div>

                <button type="submit" className="submit-btn">
                  Enviar Postulación <FaArrowRight className="icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrabajaConNosotros;