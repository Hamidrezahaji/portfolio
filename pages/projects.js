import Layout from "../components/layout/Layout";
import ProjectList from "../components/sections/ProjectList";

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-screen p-8">
      <h2 className="text-white text-3xl font-bold text-center mb-8">Meine Projekte</h2>
        <ProjectList />
      </div>
    </Layout>
  );
}