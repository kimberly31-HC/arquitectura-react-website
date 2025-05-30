import React, { useState, useEffect } from 'react';
import '../styles/Cotizacion.scss'; // Archivo SCSS que crearemos
import Select from 'react-select'; // Importamos el componente Select
import bannerImage from '../assets/img/backgrounds/miraflores.jpg';
import { motion } from 'framer-motion';
import axios from 'axios';

const FormularioProyecto = () => {
  const [formData, setFormData] = useState({
    tipoProyecto: '',
    tipoCliente: '',
    dni: '',
    cliente: '',
    departamento: '',
    provincia: '',
    distrito: '',
    correo: '',
    telefono: '',
    area: '',
    pisos: '',
    descripcion: ''
  });

  // Para manejar el cambio en los selects de ubicación
  const handleSelectChange = (selectedOption, actionMeta) => {
    const { name } = actionMeta;

    // Si es departamento
    if (name === 'departamento') {
      setFormData(prev => ({
        ...prev,
        departamento: selectedOption.value,
        provincia: '',
        distrito: ''
      }));
      cargarProvincias(selectedOption.value);
    }
    // Si es provincia
    else if (name === 'provincia') {
      setFormData(prev => ({
        ...prev,
        provincia: selectedOption.value,
        distrito: ''
      }));
      cargarDistritos(formData.departamento, selectedOption.value);
    }
    // Si es distrito
    else if (name === 'distrito') {
      setFormData(prev => ({
        ...prev,
        distrito: selectedOption.value
      }));
    }
  };

  // Traer los departamentos al montar el componente
  const [departamentos, setDepartamentos] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [distritos, setDistritos] = useState([]);

  useEffect(() => {
    axios.get('https://planosperu.com.pe/intranet/api/ubicacion/?dep_ubi__isnull=false&pro_ubi__isnull=true&dis_ubi__isnull=true')
      .then(response => {
        const deps = response.data.results || response.data;
        const uniqueDeps = [...new Map(deps.map(dep => [dep.dep_ubi, dep])).values()];
        const options = uniqueDeps.map(dep => ({ value: dep.dep_ubi, label: dep.dep_ubi }));
        setDepartamentos(options);
      })
      .catch(error => console.error('Error cargando departamentos:', error));
  }, []);

  // Función para cargar provincias según el departamento seleccionado
  const cargarProvincias = (departamento) => {
    setProvincias([]);
    setDistritos([]);
    setFormData(prev => ({
      ...prev,
      provincia: '',
      distrito: ''
    }));

    axios.get(`https://planosperu.com.pe/intranet/api/ubicacion/?dep_ubi=${departamento}&pro_ubi__isnull=false&dis_ubi__isnull=true`)
      .then(response => {
        const pros = response.data.results || response.data;
        const uniquePros = [...new Map(pros.map(prov => [prov.pro_ubi, prov])).values()];
        const options = uniquePros.map(prov => ({ value: prov.pro_ubi, label: prov.pro_ubi }));
        setProvincias(options);
      })
      .catch(error => console.error('Error cargando provincias:', error));
  };

  // Función para cargar distritos según provincia seleccionada
  const cargarDistritos = (departamento, provincia) => {
    setDistritos([]);
    setFormData(prev => ({
      ...prev,
      distrito: ''
    }));

    axios.get(`https://planosperu.com.pe/intranet/api/ubicacion/?dep_ubi=${departamento}&pro_ubi=${provincia}&dis_ubi__isnull=false`)
      .then(response => {
        const dist = response.data.results || response.data;
        const options = dist.map(d => ({ value: d.dis_ubi, label: d.dis_ubi }));
        setDistritos(options);
      })
      .catch(error => console.error('Error cargando distritos:', error));
      
      
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectChangeGeneric = (selectedOption, actionMeta) => {
  const { name } = actionMeta;
  setFormData(prev => ({ ...prev, [name]: selectedOption ? selectedOption.value : '' }));
};
  const tipoProyectoOptions = [
    { value: 'Declaratoria de fábrica', label: 'Declaratoria de fábrica' },
    { value: 'Declaratoria de fábrica por subdivisión', label: 'Declaratoria de fábrica por subdivisión' },
    { value: 'Declaratoria de fábrica por independización', label: 'Declaratoria de fábrica por independización' },
    { value: 'Levantamiento de cargas técnicas(no legales)', label: 'Levantamiento de cargas técnicas(no legales)' },
    { value: 'Búsqueda catrastal', label: 'Búsqueda catrastal' },
    { value: 'Acumulación de lote urbano', label: 'Acumulación de lote urbano' },
    { value: 'Licencia de construcción', label: 'Licencia de construcción' },
    { value: 'Licencia de demolición', label: 'Licencia de demolición' },
    { value: 'Visación de planos', label: 'Visación de planos' },
    { value: 'Otros', label: 'Otros' },
  ];

  function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

useEffect(() => {
  const inputDni = document.querySelector('input[name="dni"]');
  const inputCliente = document.querySelector('input[name="cliente"]');

  if (!inputDni || !inputCliente) return;

  const capitalizarNombre = (texto) => {
    return texto
      .toLowerCase()
      .split(' ')
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join(' ');
  };

  const manejarCambio = async (e) => {
    const valor = e.target.value.trim();

    if (valor.length === 8) {
      try {
        const res = await fetch(`https://planosperu.com.pe/intranet/api/dni/${valor}`);
        const data = await res.json();
       if (data?.nombreCompleto) {
  setFormData(prev => ({ ...prev, cliente: capitalizarNombre(data.nombreCompleto) }));
} else {
  setFormData(prev => ({ ...prev, cliente: '' }));
}

      } catch (error) {
        console.error("Error al consultar DNI", error);
        inputCliente.value = '';
      }

    } else if (valor.length === 11) {
      try {
        const res = await fetch(`https://planosperu.com.pe/intranet/api/ruc/${valor}`);
        const data = await res.json();
       if (data?.razonSocial) {
  setFormData(prev => ({ ...prev, cliente: capitalizarNombre(data.razonSocial) }));
} else {
  setFormData(prev => ({ ...prev, cliente: '' }));
}

      } catch (error) {
        console.error("Error al consultar RUC", error);
        inputCliente.value = '';
      }

    } else {
      inputCliente.value = '';
    }
  };

  inputDni.addEventListener("input", manejarCambio);

  return () => {
    inputDni.removeEventListener("input", manejarCambio);
  };
}, []);

useEffect(() => {
  fetch('https://planosperu.com.pe/intranet/api/csrf/', {
    credentials: 'include',
  });
}, []);

 const handleSubmit = async (e) => {
  e.preventDefault();

  const csrftoken = getCookie('csrftoken'); // ← obtener token

  try {
    const response = await fetch('https://planosperu.com.pe/intranet/api/enviar/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken // ← incluir en headers
      },
      credentials: 'include', // ← importante para incluir cookies
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.mensaje);
  } catch (error) {
    alert('Error al enviar el formulario');
    console.error(error);
  }
};



  return (
    <div className="form-page-container">
      <div className="hero-banner">
        <div className="hero-image">
          <img src={bannerImage} alt="Equipo de arquitectura" />
        </div>
        <div className="hero-overlay">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1>Solicitud de Cotización</h1>
            <p>¡Cotiza con nosotros!</p>
          </motion.div>
        </div>
      </div>

      <div className="form-container">
        <form className="project-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Formulario de Proyecto</h2>
          
          {/* Formulario */}
   <div className="form-section">
          
          <div className="form-grid">
            {/* Primera fila */}
            <div className="form-group">
              <label className="form-label">Tipo de proyecto *</label>
             <Select
  name="tipoProyecto"
  className="form-input"
  options={tipoProyectoOptions}
  onChange={handleSelectChangeGeneric}
  value={tipoProyectoOptions.find(option => option.value === formData.tipoProyecto) || null}
  placeholder="Seleccione Tipo de proyecto"
    required        // El campo es obligatorio

/>


            </div>
            {/* Segunda fila */}
            <div className="form-group">
              <label className="form-label">DNI o RUC</label>
              <input
                type="text"
                name="dni"
                className="form-input"
                placeholder="Ingrese su DNI"
                value={formData.dniRuc}
                onChange={handleChange}
    required        // El campo es obligatorio

              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Cliente / Empresa *</label>
              <input
                type="text"
                name="cliente"
                className="form-input"
                placeholder="Ingrese sus nombres y apellidos"
                value={formData.cliente}
                onChange={handleChange}
    required        // El campo es obligatorio

              />
            </div>
                        <div className="form-group">
              <label className="form-label">Departamento *</label>
              <Select
                name="departamento"
                  className="form-input"
                options={departamentos}
                onChange={handleSelectChange}
                value={departamentos.find(dep => dep.value === formData.departamento) || null}
                placeholder="Seleccione departamento"
               required        // El campo es obligatorio

              />
            </div>

            <div className="form-group">
              <label className="form-label">Provincia *</label>
              <Select
                name="provincia"
                  className="form-input"
                options={provincias}
                onChange={handleSelectChange}
                value={provincias.find(prov => prov.value === formData.provincia) || null}
                placeholder="Seleccione provincia"
                isDisabled={!formData.departamento}
                 required        // El campo es obligatorio

              />
            </div>

            <div className="form-group">
              <label className="form-label">Distrito *</label>
              <Select
                name="distrito"
                  className="form-input"
                options={distritos}
                onChange={handleSelectChange}
                value={distritos.find(dist => dist.value === formData.distrito) || null}
                placeholder="Seleccione distrito"
                isDisabled={!formData.provincia}
               required        // El campo es obligatorio

              />
            </div>

            <div className="form-group">
              <label className="form-label">Correo *</label>
              <input
                type="email"
                name="correo"
                className="form-input"
                placeholder="Ingrese su correo"
                value={formData.correo}
                onChange={handleChange}
    required        // El campo es obligatorio

              />
            </div>
            
            {/* Quinta fila */}
            <div className="form-group">
              <label className="form-label">Número de teléfono *</label>
              <input
                type="tel"
                name="telefono"
                className="form-input"
                placeholder="Ingrese su número"
                value={formData.telefono}
                onChange={handleChange}
    required        // El campo es obligatorio

              />
            </div>
            
           <div className="form-group">
  <label className="form-label">Área (m2) aprox*</label>
  <input
    type="number"
    name="area"
    className="form-input"
    placeholder="Ingrese área"
    value={formData.area}
    onChange={handleChange}
    min="1.00"      // Establece el valor mínimo a 1.00
    step="0.01"     // Permite ingresar valores decimales con dos dígitos (por ejemplo, 1.00, 1.01, 2.50)
    required        // El campo es obligatorio
  />
</div>

            
            {/* Sexta fila */}
            <div className="form-group">
  <label className="form-label">N° de Pisos del Proyecto *</label>
  <input
    type="number"
    name="pisos"
    className="form-input"
    placeholder="Ingrese número de pisos"
    value={formData.pisos}
    onChange={handleChange}
    min="1" // Establece el valor mínimo como 1
    required // Hace que el campo sea obligatorio
  />
</div>

            
            {/* Séptima fila */}
            <div className="form-group full-width">
              <label className="form-label">Descripción</label>
              <textarea
                name="descripcion"
                className="form-input"
                rows="4"
                placeholder="Ingrese una descripción"
                value={formData.descripcion}
                onChange={handleChange}

              />
            </div>
          </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioProyecto;
