// components/sections/Projects.js
export default function Projects() {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-3xl font-bold text-primary mb-4">Projects</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium text-green-400">Semedco – Finanzanalyse-Plattform</h3>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Development of a platform for financial education programs & stock exchange certificates.</li>
          </ul>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
}