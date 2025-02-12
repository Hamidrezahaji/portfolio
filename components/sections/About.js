const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        <p className="mt-4 text-gray-700">
          I’m a UX/UI Designer with over 8 years of experience in crafting digital products. 
          My expertise lies in creating seamless user experiences and aesthetically appealing design systems.
        </p>
        <a
          href="/resume/Hamidreza_Haji_UXUI_Designer.pdf"
          download="Hamidreza_Haji_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-blue-500 underline hover:text-blue-700"
        >
          Download Resume (PDF) →
        </a>
      </div>
    </section>
  );
};

export default About;