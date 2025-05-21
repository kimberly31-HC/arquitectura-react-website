import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero"
    >
      <h1>Transformamos espacios en <span>obras de arte</span></h1>
      <p>Diseño arquitectónico sostenible y moderno</p>
      <Link to="/projects" className="btn">Ver Proyectos</Link>
    </motion.section>
  );
}