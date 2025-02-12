// pages/index.js
import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}