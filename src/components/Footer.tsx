import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="backdrop-blur-md border-b border-gray-700/50 text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Text */}
        <div className="text-sm text-center md:text-left">
          &copy; {year} Amogha. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/Amogha-ark"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub className="text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/amogha-rao/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>

          <a
            href="mailto:amogharao2000@gmail.com@gmail.com"
            className="hover:text-white transition-colors duration-300"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
