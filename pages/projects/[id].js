import { useRouter } from "next/router";

const projectDetails = {
  semedco: {
    title: "Semedco",
    description: "Eine Finanzanalyse-Plattform, die komplexe Daten für Investoren vereinfacht.",
    image: "/images/semedco.png",
  },
  carboy: {
    title: "Carboy",
    description: "Eine mobile App für On-Demand Autowäsche mit smarter Buchungsfunktion.",
    image: "/images/carboy.png",
  },
  "gym-app": {
    title: "Gym-App",
    description: "Virtuelles Fitness-Coaching für personalisierte Trainingspläne.",
    image: "/images/gym-app.png",
  },
};

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectDetails[id];

  if (!project) return <p className="text-center mt-20">Projekt nicht gefunden.</p>;

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-900 flex flex-col items-center py-12 px-6">
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-4xl font-bold mt-6">{project.title}</h1>
      <p className="text-gray-600 mt-4">{project.description}</p>
    </div>
  );
}



// "min-h-screen bg-[#F8F9FA] text-gray-900 flex flex-col items-center py-12 px-6"  className="max-w-4xl mx-auto py-16 px-6"