import { motion } from "framer-motion";
import {
  SiPython,
  SiGnubash,
  SiFlask,
  SiFastapi,
  SiAmazon,
  SiKubernetes,
  SiDocker,
  SiGithubactions,
  SiHelm,
  SiVault,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import SplineProject from "./spline/splineUse";

const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "Bash", icon: <SiGnubash /> },
    ],
  },
  {
    title: "Backend Engineering",
    items: [
      { name: "Flask", icon: <SiFlask /> },
      { name: "FastAPI", icon: <SiFastapi /> },
    ],
  },
  {
    title: "Cloud & Platforms",
    items: [
      { name: "AWS (EC2, SQS, RDS)", icon: <SiAmazon /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Docker", icon: <SiDocker /> },
    ],
  },
  {
    title: "CI/CD & DevOps",
    items: [
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Helm Charts", icon: <SiHelm /> },
    ],
  },
  {
    title: "Security & IAM",
    items: [
      { name: "HashiCorp Vault", icon: <SiVault /> },
      { name: "Open Policy Agent (OPA)", icon: null },
      { name: "Keycloak", icon: null },
      { name: "Squid Proxy", icon: null },
    ],
  },
  {
    title: "Monitoring & Observability",
    items: [
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "OpenTelemetry", icon: null },
      { name: "SigNoz", icon: null },
      { name: "Logz.io", icon: null },
      { name: "OpsRamp", icon: null },
    ],
  },
];


const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-24 px-4 bg-transparent overflow-hidden text-white"
    >
      {/* Mobile-only Spline background */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <SplineProject url="https://prod.spline.design/9qzkNMOwrmkdgWdO/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 mb-16"
        >
          Skills
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/10 border border-white/10 backdrop-blur-xl 
                p-6 rounded-2xl shadow-xl hover:shadow-indigo-400/20 
                hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-300 mb-6">
                {category.title}
              </h3>

              <ul className="space-y-4 text-left">
                {category.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 text-sm sm:text-base"
                  >
                    <span className="text-xl text-indigo-300 min-w-[24px]">
                      {skill.icon ?? "•"}
                    </span>
                    <span className="text-gray-200">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
