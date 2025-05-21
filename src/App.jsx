import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
// En App.jsx y otros componentes
import { Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;