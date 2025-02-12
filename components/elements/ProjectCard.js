export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
      <img
        src={image}
        alt={title}
        className="h-12 mx-auto mb-4 opacity-100"  // تغییر opacity به 100%
      />
      <h3 className="text-gray-800 font-bold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href={link} className="text-blue-500 mt-4 inline-block">
        Mehr erfahren →
      </a>
    </div>
  );
}