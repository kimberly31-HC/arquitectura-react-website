import { useState, useEffect, useRef } from 'react';
import '../styles/Chatbot.scss';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Función para normalizar el texto (eliminar tildes, signos y convertir a minúsculas)
  const normalizeText = (text) => {
    return text
      .toLowerCase() // Convertir a minúsculas
      .normalize("NFD") // Separar caracteres y diacríticos
      .replace(/[\u0300-\u036f]/g, "") // Eliminar tildes/diacríticos
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¿?¡!]/g, ""); // Eliminar signos puntuación
  };

  // Preguntas frecuentes y respuestas mejoradas
  const faqs = {
    "hola": {
      text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
      actions: null,
      showQuickQuestions: true
    },
    "que servicios ofrecen": {
      text: "Ofrecemos: \n- Asesoría legal y saneamiento de propiedad \n- Trámites en SUNARP \n- Resolución de multas municipales \n- Diseño de fachadas 3D \n- Elaboración de planos y proyectos",
      actions: null
    },
    "como inicio un tramite": {
      text: "Para iniciar cualquier trámite puedes:\n1. Contactarnos al 999 888 777\n2. Visitar nuestra oficina\n3. Solicitar una cotización en nuestro sitio web",
      actions: null
    },
    "cuanto cuesta un diseño": {
      text: "El costo varía según el proyecto. Un diseño básico de fachada parte desde $150. ¿Quieres que te enviemos una cotización exacta?",
      actions: null
    },
    "que necesito para saneamiento": {
      text: "Para el saneamiento físico-legal necesitamos:\n1. Copia de tu DNI\n2. Documentos de propiedad\n3. Recibo de luz/agua\n4. Croquis de ubicación",
      actions: null
    },
    "horario de atencion": {
  text: "Atendemos:\nLunes a Viernes: 9am - 6pm\nSábados: 9am - 1pm\n\n¡También puedes dejarnos un mensaje fuera de horario!",
  actions: [
    {
      type: "link",
      label: "Contactar por WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=51962303092&text=Hola%2C+quiero+informaci%C3%B3n+sobre+el+servicio%3A+&type=phone_number&app_absent=0" // Reemplaza con tu número real
    }
  ]
},
    "donde estan ubicados": {
      text: "Tenemos dos sedes disponibles:",
      actions: [
        {
          type: "link",
          label: "Oficina Central",
          url: "https://www.google.com/maps/place/PLANOS+PERU+-+SUNARP+Declaratoria+De+Fabrica,+Independizaci%C3%B3n,+EMISION+PARTIDAS+,+CRI+,+COMAS/@-11.9495815,-77.0587115,17z/data=!3m1!4b1!4m6!3m5!1s0x9105d02ad3739cf9:0xb02a92128b80333c!8m2!3d-11.9495868!4d-77.0561366!16s%2Fg%2F11bw3bbq7p?entry=ttu&g_ep=EgoyMDI1MDUxNS.4xIKXMDSoASAFQAw%3D%3D"
        },
        {
          type: "link",
          label: "Sede San Juan de Miraflores",
          url: "https://www.google.com/maps/place/Av.+Guillermo+Billinghurst+1081,+San+Juan+de+Miraflores+15801,+Peru/@-12.162304,-76.9632559,3a,15y,315.75h,90.81t/data=!3m7!1e1!3m5!1sT3h1uZYqMSRhE4lyW9EaEA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.8146649503386243%26panoid%3DT3h1uZYqMSRhE4lyW9EaEA%26yaw%3D315.7452986019585!7i16384!8i8192!4m15!1m8!3m7!1s0x9105b8f86c98ae17:0x33402d3f6222f89d!2sAv.+Guillermo+Billinghurst+1081,+San+Juan+de+Miraflores+15801,+Peru!3b1!8m2!3d-12.162213!4d-76.9632701!16s%2Fg%2F11rg5_6_b5!3m5!1s0x9105b8f86c98ae17:0x33402d3f6222f89d!8m2!3d-12.162213!4d-76.9632701!16s%2Fg%2F11rg5_6_b5?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxNS.4xIKXMDSoASAFQAw%3D%3D"
        }
      ]
    },
    "ubicacion": {
      text: "Tenemos dos sedes disponibles:",
      actions: [
        {
          type: "link",
          label: "Oficina Central",
          url: "https://www.google.com/maps/place/PLANOS+PERU+-+SUNARP+Declaratoria+De+Fabrica,+Independizaci%C3%B3n,+EMISION+PARTIDAS+,+CRI+,+COMAS/@-11.9495815,-77.0587115,17z/data=!3m1!4b1!4m6!3m5!1s0x9105d02ad3739cf9:0xb02a92128b80333c!8m2!3d-11.9495868!4d-77.0561366!16s%2Fg%2F11bw3bbq7p?entry=ttu&g_ep=EgoyMDI1MDUxNS.4xIKXMDSoASAFQAw%3D%3D"
        },
        {
          type: "link",
          label: "Sede San Juan de Miraflores",
          url: "https://www.google.com/maps/place/Av.+Guillermo+Billinghurst+1081,+San+Juan+de+Miraflores+15801,+Peru/@-12.162304,-76.9632559,3a,15y,315.75h,90.81t/data=!3m7!1e1!3m5!1sT3h1uZYqMSRhE4lyW9EaEA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.8146649503386243%26panoid%3DT3h1uZYqMSRhE4lyW9EaEA%26yaw%3D315.7452986019585!7i16384!8i8192!4m15!1m8!3m7!1s0x9105b8f86c98ae17:0x33402d3f6222f89d!2sAv.+Guillermo+Billinghurst+1081,+San+Juan+de+Miraflores+15801,+Peru!3b1!8m2!3d-12.162213!4d-76.9632701!16s%2Fg%2F11rg5_6_b5!3m5!1s0x9105b8f86c98ae17:0x33402d3f6222f89d!8m2!3d-12.162213!4d-76.9632701!16s%2Fg%2F11rg5_6_b5?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxNS.4xIKXMDSoASAFQAw%3D%3D"
        }
      ]
    },
    "gracias": {
      text: "¡Gracias a ti! 😊 ¿En qué más puedo ayudarte?",
      actions: null
    },
    "default": {
      text: "Lo siento, no entendí tu pregunta. Puedes preguntarme sobre:\n- Servicios legales\n- Trámites registrales\n- Diseño arquitectónico\n- Costos y cotizaciones\n- Ubicación",
      actions: null
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = { text: inputValue, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simular respuesta después de 1 segundo
    setTimeout(() => {
      const userText = normalizeText(inputValue);
      let response = faqs.default;

      Object.keys(faqs).forEach(key => {
        if (normalizeText(userText).includes(normalizeText(key))) {
          response = faqs[key];
        }
      });

      const botMessage = { 
        text: response.text, 
        sender: 'bot',
        actions: response.actions,
        showQuickQuestions: response.showQuickQuestions
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 0);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="icon">💬</i>
      </div>

      <div className="chatbot-window">
        <div className="chatbot-header">
          <h3>Asistente Virtual</h3>
          <button onClick={() => setIsOpen(false)}>×</button>
        </div>

        <div className="chatbot-messages">
          {messages.length === 0 && (
            <div className="welcome-message">
              <p>¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?</p>
              <div className="quick-questions">
                <button onClick={() => handleQuickQuestion("qué servicios ofrecen")}>Servicios</button>
                <button onClick={() => handleQuickQuestion("cómo inicio un trámite")}>Iniciar trámite</button>
                <button onClick={() => handleQuickQuestion("horario de atención")}>Horarios</button>
                <button onClick={() => handleQuickQuestion("dónde están ubicados")}>Ubicación</button>
              </div>
            </div>
          )}

          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              
              {msg.showQuickQuestions && (
                <div className="quick-questions">
                  <button onClick={() => handleQuickQuestion("qué servicios ofrecen")}>Servicios</button>
                  <button onClick={() => handleQuickQuestion("cómo inicio un trámite")}>Iniciar trámite</button>
                  <button onClick={() => handleQuickQuestion("horario de atención")}>Horarios</button>
                  <button onClick={() => handleQuickQuestion("dónde están ubicados")}>Ubicación</button>
                </div>
              )}
              
              {msg.actions && (
                <div className="action-buttons">
                  {msg.actions.map((action, i) => (
                    <a 
                      key={i}
                      href={action.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-button"
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu pregunta..."
          />
          <button onClick={handleSendMessage}>
            <i className="icon">➤</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;