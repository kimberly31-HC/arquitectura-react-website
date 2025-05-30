import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaYoutube , FaTiktok} from 'react-icons/fa';
import logo from '../assets/img/logo.png'; // Usa la ruta relativa adecuada

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Updated styles with red accent color (#ef4444)
  const styles = {
    footer: {
      position: 'relative',
      overflow: 'hidden',
      background: '#0f172a',
      color: 'white',
      paddingTop: '10rem',
      paddingBottom: '3rem',
    },
    wave: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '200%',
      height: '100px',
      background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1200 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\' fill=\'%236b7280\' opacity=\'.25\'/%3E%3Cpath d=\'M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z\' fill=\'%236b7280\' opacity=\'.25\'/%3E%3Cpath d=\'M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z\' fill=\'%236b7280\'/%3E%3C/svg%3E") repeat-x',
      backgroundSize: 'contain',
      opacity: '0.2',
      animation: 'wave 15s linear infinite',
    },
    container: {
      marginTop: 50,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      position: 'relative',
      zIndex: '10',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem',
    },
    logoIcon: {
      fontSize: '2.25rem',
      color: '#1e40af', // Red
      marginRight: '0.75rem',
    },
    logoText: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
    },
    logoPart1: {
      color: 'rgb(221 0 0)', // Red
    },
    logoPart2: {
      color: 'white',
    },
    socialIcon: {
      fontSize: '1.25rem',
      backgroundColor: '#4a5568',
      padding: '0.45rem',
      borderRadius: '100%',
      height: 35,
      transition: 'all 0.3s ease',
    },
    linkTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: '#ef4444', // Red
      display: 'flex',
      alignItems: 'center',
    },
    linkBullet: {
      width: '0.75rem',
      height: '0.75rem',
      backgroundColor: '#ef4444', // Red
      borderRadius: '9999px',
      marginRight: '0.5rem',
    },
    linkItem: {
      marginBottom: '0.75rem',
      color: '#cbd5e0',
      transition: 'all 0.3s ease',
    },
    divider: {
      borderTop: '1px solid #4a5568',
      margin: '2rem 0',
    },
    copyright: {
      textAlign: 'center',
      color: '#a0aec0',
    },
    copyrightHighlight: {
      color: '#ef4444', // Red
    },
    legalLink: {
      color: '#a0aec0',
      fontSize: '0.875rem',
      transition: 'all 0.3s ease',
    },
  };

  const footerLinks = [
    {
      title: "Mapa del Sitio",
links: [
      { text: "Inicio", url: "/" },
      { text: "Nosotros", url: "/nosotros" },
      { text: "Servicios", url: "/servicios" },
      { text: "Proyectos", url: "/projects" },
      { text: "Contacto", url: "/contactanos" }
    ]    },
    {
      title: "Contacto",
      links: [
        { icon: <FaMapMarkerAlt />, text: "Oficina Comas" },
        { icon: <FaMapMarkerAlt />, text: "Jr. Juan Jose Muñoz N° 354" },
        { icon: <FaEnvelope />, text: "gestion@hotmail.com" },
        { icon: <FaPhone />, text: "+51 962 303 092" }
      ]
    }
  ];

  const socialIcons = [
    { icon: <FaFacebook />, color: "#3b5998", name: "Facebook", url: "https://www.facebook.com/planosymaquetasperu" },
    { icon: <FaInstagram />, color: "#e1306c", name: "Instagram", url: "https://www.instagram.com/planos_peru_" },
    { icon: <FaTiktok />, color: "black", name: "Tiktok", url: "https://www.tiktok.com/@planos.peru?is_from_webapp=1&sender_device=pc" },
    { icon: <FaYoutube />, color: "red", name: "Youtube", url: "https://www.youtube.com/channel/UC_VdShJOHnMBTusdFtWM8Cw" }
    
  ];

  return (
    <footer style={styles.footer}>
      {/* Wave effect */}
      <div style={styles.wave}></div>

      <div style={styles.container}>
        {/* Using CSS Grid for responsiveness */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand column */}
          <div>
            <div style={styles.logoContainer}>
              <img
                src={logo}
                alt="Logo Planos Perú"
                style={{ width: '50px', height: 'auto', marginRight: '0.75rem' }}
              />
              <h3 style={styles.logoText}>
                <span style={styles.logoPart1}>Planos</span>
                <span style={styles.logoPart2}>Perú</span>
              </h3>
            </div>
            <p style={{ color: '#cbd5e0', marginBottom: '1.5rem' }}>
              Transformando visiones en realidades arquitectónicas.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ ...styles.socialIcon, color: social.color }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
{footerLinks.map((column, index) => (
  <div key={index}>
    <h4 style={styles.linkTitle}>
      {column.title}
    </h4>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {column.links.map((link, i) => (
        <motion.li
          key={i}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.linkItem}
        >
          {/* Si link es objeto, usar link.url */}
          {typeof link === 'string' ? (
            <a href="#" style={{ color: '#cbd5e0', textDecoration: 'none' }}>
              {link}
            </a>
          ) : (
            <a href={link.url} style={{ color: '#cbd5e0', textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              {link.icon && <span style={{ color: '#ef4444', marginTop: '0.25rem' }}>{link.icon}</span>}
              <span>{link.text}</span>
            </a>
          )}
        </motion.li>
      ))}
    </ul>
  </div>
))}

        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Copyright */}
        <div style={styles.copyright}>
          <p>
            © {currentYear} <span style={styles.copyrightHighlight}>Planos Perú</span>. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
            {["Términos", "Privacidad", "Cookies"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ color: '#ef4444' }}
                style={styles.legalLink}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Wave animation */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
