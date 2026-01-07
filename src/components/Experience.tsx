import { motion } from "framer-motion";

const experiences = [
  {
    company: "Cloudera",
    role: "Software Engineer II",
    type: "Full-time",
    duration: "Mar 2025 – Present · 11 mos",
    location: "Bengaluru, Karnataka, India · Hybrid",
    points: [
      "Developed high-performance API servers and optimized database queries to improve release velocity for development teams.",
      "Implemented Redis read-through caching with TTL to significantly reduce database load.",
      "Worked extensively with Python, Kubernetes, Helm Charts, AWS RDS, and MySQL."
    ],
    tech: ["Python", "Kubernetes", "Helm", "AWS RDS", "MySQL", "Redis"]
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Cloud Engineer II",
    type: "Full-time",
    duration: "Oct 2024 – Feb 2025 · 5 mos",
    location: "Bengaluru, Karnataka, India · Hybrid",
    points: [
      "Designed a monitoring orchestration service with high concurrency using Go routines.",
      "Set up Fluentd and Logstash for observability while handling edge bandwidth constraints.",
      "Implemented an efficient worker pool in Go to optimize thread usage."
    ],
    tech: ["Go", "Docker", "Fluentd", "Logstash", "Python"]
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Cloud Engineer I",
    type: "Full-time",
    duration: "Sep 2022 – Oct 2024 · 2 yrs 2 mos",
    location: "Bengaluru, Karnataka, India · Hybrid",
    points: [
      "Built infrastructure monitoring services for on-prem environments.",
      "Developed a custom Kubernetes Operator to automate agent deployment on new VMs.",
      "Created pre-configured ISO images and deployed them via vCenter.",
      "Developed custom Fluentd plugins for enhanced log processing."
    ],
    tech: ["Docker", "Python", "Kubernetes", "Fluentd", "vCenter"]
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "R&D Intern",
    type: "Internship",
    duration: "Mar 2022 – Sep 2022 · 7 mos",
    location: "Bengaluru, Karnataka, India",
    points: [
      "Worked on internal R&D tools and proof-of-concept implementations.",
      "Gained hands-on experience with cloud-native tooling and monitoring systems."
    ],
    tech: ["Linux", "Python", "Cloud Fundamentals"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text
          bg-gradient-to-r from-indigo-900 via-cyan-400 to-purple-700 mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-400 font-medium">
                    {exp.company} · {exp.type}
                  </p>
                </div>

                <div className="text-sm text-gray-400 md:text-right">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tech.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full
                    bg-white/10 text-gray-200 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
