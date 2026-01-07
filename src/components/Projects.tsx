import { FaSeedling, FaKey } from "react-icons/fa";
import { useState } from "react";
import ProjectCard from "./ProjectCard";  

const projectData = [
  {
    title: "APPriculture",
    description:
      "A data-driven agriculture platform addressing excess crop production and price fluctuation in India. Provides crop growth insights with intuitive graphical visualizations to help farmers make smarter decisions and improve profitability.",
    link: "https://github.com/Amogha-ark/Appriculture",
    color: "#14532d", // deep green (agriculture theme)
    logo: <FaSeedling />,
  },
  {
    title: "Secret Rotator Operator",
    description:
      "A Kubernetes Operator that synchronizes secrets from HashiCorp Vault to Kubernetes, automatically triggering rolling updates when secrets change—eliminating manual credential rotation.",
    link: "https://github.com/Amogha-ark/secret-rotator",
    color: "#1e293b", // slate-800 (infra / security)
    logo: <FaKey />,
  },
];



/* projectData unchanged */

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const mobileProjects = showAll
    ? projectData
    : projectData.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-transparent overflow-hidden py-24 px-6"
    >
      {/* <div className="absolute inset-0 z-0 hidden lg:block">
        <SplineProject url="https://prod.spline.design/5G2zuftHWLDTjqo4/scene.splinecode" />
      </div> */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-cyan-300 to-indigo-700 mb-12 lg:mb-16">
          Projects
        </h2>

        {/* 📱 Mobile grid (2 per row, compact cards) */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {mobileProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              compact
            />
          ))}
        </div>

        {/* 📱 View More button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 lg:hidden px-6 py-2 rounded-full border border-white text-white text-sm hover:bg-white hover:text-black transition"
          >
            View More
          </button>
        )}

        {/* 🖥 Desktop grid (UNCHANGED) */}
        <div className="hidden lg:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
