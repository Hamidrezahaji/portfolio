// components/sections/Experience.js
export default function Experience() {
  return (
    <section id="experience" className="p-8">
      <h2 className="text-3xl font-bold text-primary mb-4">Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium text-green-400">UX/UI Designer & Lead</h3>
          <p className="text-gray-400">Palphone (Remote – Melbourne, Australia)</p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Developed a conversational app focused on secure communication.</li>
            <li>Improved user journey through new features and optimized navigation.</li>
          </ul>
        </div>
        {/* Add more experiences here */}
      </div>
    </section>
  );
}