// src/pages/ProjectsPage.jsx
import { motion } from "framer-motion";
import Projects from "../components/Projects";
import "../styles/projects-page.scss"; // Archivo de estilos específico

const ProjectsPage = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects-page"
    >
      <div className="projects-container">

        
        <Projects />
      </div>
    </motion.section>
  );
};

export default ProjectsPage;