// components/sections/Contact.js
export default function Contact() {
  return (
    <section id="contact" className="p-8">
      <h2 className="text-3xl font-bold text-primary mb-4">Contact</h2>
      <ul className="list-disc pl-6 text-gray-300">
        <li>Email: hamidrezahaji.uix@gmail.com</li>
        <li>Phone: (+49) 178 916 2838</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/hamidreza-haji" className="text-primary hover:underline">linkedin.com/in/hamidreza-haji</a></li>
      </ul>
    </section>
  );
}