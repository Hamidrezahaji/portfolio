import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import About from "../components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Projects />
      <About />
    </Layout>
  );
}