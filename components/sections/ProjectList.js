import { motion } from "framer-motion";
import ProjectCard from "../elements/ProjectCard";

const projects = [
  { id: "semadco", title: "Semedco", description: "Finanzanalyse-Plattform", image: "/images/semedco.png" },
  { id: "carboy", title: "Carboy", description: "On-Demand Car Wash App", image: "/images/carboy.png" },
  { id: "gym", title: "Gym-App", description: "Virtuelles Fitness-Coaching", image: "/images/gym.png" },
];

export default function ProjectList() {
  return (
    <motion.section
      id="projects"
      className="py-12 px-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.8 } },
      }}
    >
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meine Projekte</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div key={project.id} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}