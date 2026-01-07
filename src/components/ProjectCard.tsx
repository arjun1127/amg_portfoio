import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  color: string;
  logo?: React.ReactNode; 
  compact?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  color,
  logo,
  compact = false,
}) => {
  if (compact) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl p-4 text-white text-sm font-semibold shadow-lg hover:scale-105 transition"
        style={{ backgroundColor: color }}
      >
        {title}
      </a>
    );
  }
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      onClick={() => window.open(link, '_blank')}
      className="group relative rounded-2xl p-6 cursor-pointer overflow-hidden bg-white/10 border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.035] hover:border-indigo-400/20 hover:shadow-indigo-400/30"
    >
      {/* Background blur visual */}
      <div
        className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-20 blur-2xl z-0"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Logo/Icon */}
        {logo && <div className="mb-4 text-3xl text-white">{logo}</div>}

        <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
          {title}
        </h3>

        <p className="text-sm text-gray-300 mb-4 leading-relaxed">{description}</p>

        <span className="inline-block mt-auto text-sm font-medium text-indigo-200 underline opacity-90 group-hover:opacity-100 transition-opacity">
          View Project 
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
