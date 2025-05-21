import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const teamMembers = [
  {
    name: "Carlos Méndez",
    position: "Arquitecto Principal",
    bio: "Con más de 20 años de experiencia en diseño de edificios icónicos.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Ana Rodríguez",
    position: "Diseñadora de Interiores",
    bio: "Especialista en crear espacios funcionales con un toque artístico único.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Luis Torres",
    position: "Ingeniero Estructural",
    bio: "Expertise en soluciones innovadoras para construcciones desafiantes.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "María González",
    position: "Planificadora Urbana",
    bio: "Apasionada por desarrollar ciudades sostenibles y habitables.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Team = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="equipo" ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="text-lg mb-12 max-w-2xl">
            Conoce al talentoso equipo detrás de nuestros proyectos excepcionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-full w-40 h-40 mx-auto">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div
                  className="absolute inset-0 bg-red-600 opacity-0 hover:opacity-70 flex items-center justify-center transition-opacity"
                  whileHover={{ opacity: 0.7 }}
                >
                  <span className="text-white font-bold">Ver perfil</span>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-blue-800">{member.name}</h3>
              <p className="text-red-600 mb-2">{member.position}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;