// pages/resume.js
import Layout from "../components/layout/Layout";

export default function Resume() {
  return (
    <Layout>
      <div className="min-h-screen p-8 bg-secondary text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <header className="text-center">
            <h1 className="text-4xl font-bold mb-2">Hamidreza Haji</h1>
            <p className="text-lg text-gray-400">UX/UI Designer | Product Designer</p>
          </header>

          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-gray-300">
              I am an experienced UX/UI designer with over 8 years of experience in developing digital products. My focus is on user-centered designs, intuitive interfaces, and optimizing user journeys. I have extensive knowledge in prototyping, design systems, and usability testing. Additionally, I have basic knowledge of frontend technologies (HTML, CSS, JavaScript, React.js) to ensure smooth collaboration with developers.
            </p>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Experience</h2>
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

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Skills</h2>
            <div className="columns-2 gap-4">
              <ul className="list-disc pl-6 text-gray-300">
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>User Research</li>
              </ul>
              <ul className="list-disc pl-6 text-gray-300">
                <li>HTML/CSS</li>
                <li>React.js</li>
                <li>Figma</li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Email: hamidrezahaji.uix@gmail.com</li>
              <li>Phone: (+49) 178 916 2838</li>
              <li>LinkedIn: <a href="https://linkedin.com/in/hamidreza-haji" className="text-primary hover:underline">linkedin.com/in/hamidreza-haji</a></li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}