import Link from "next/link";

const projects = [
  {
    id: "semedco",
    title: "Semedco",
    description: "Finanzanalyse-Plattform",
    image: "/images/semedco.png",
  },
  {
    id: "carboy",
    title: "Carboy",
    description: "On-Demand Car Wash App",
    image: "/images/carboy.png",
  },
  {
    id: "gym-app",
    title: "Gym-App",
    description: "Virtuelles Fitness-Coaching",
    image: "/images/gym-app.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Meine Projekte</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} passHref>
              <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105">
                <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <span className="text-blue-500 mt-2 inline-block">Mehr erfahren →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}