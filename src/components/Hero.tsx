import SplineHero from "./spline/splineUse";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden px-6 py-24">

      {/* Spline background only on large screens */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <SplineHero url="https://prod.spline.design/3SS9fX3agVQv-djg/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* HERO TEXT — visible on ALL devices */}
        <div className="space-y-4 max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Hi, I’m Amogha Rao
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Cloud Engineer with 3+ years of experience building secure, scalable
            Kubernetes platforms and high-performance backend systems using
            FastAPI, AWS, and cloud-native DevOps practices.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div
          className="
            flex flex-wrap justify-center gap-4
            mt-8 sm:mt-10 lg:mt-16
            pointer-events-auto
          "
        >
          <a
            href="#skills"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold
              text-sm lg:text-lg px-5 py-2 lg:px-8 lg:py-3
              rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="border-2 border-white text-white font-semibold
              text-sm lg:text-lg px-5 py-2 lg:px-8 lg:py-3
              rounded-full hover:bg-white hover:text-gray-900
              transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </a>

          {/* <a
            href="https://github.com/Amogha-ark"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold
              text-sm lg:text-lg px-5 py-2 lg:px-8 lg:py-3
              rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            GitHub
          </a> */}

          <a
            href="/Amogha_Rao_K.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-semibold
              text-sm lg:text-lg px-5 py-2 lg:px-8 lg:py-3
              rounded-full hover:bg-white hover:text-gray-900
              transition-all duration-300 transform hover:scale-105"
          >
            Resume
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-6 flex justify-center gap-6 pointer-events-auto">
          <a
            href="https://www.linkedin.com/in/amogha-rao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>

          <a
            href="mailto:amogharao2000@gmail.com"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope className="text-2xl" />
          </a>
           <a
            href="https://github.com/Amogha-ark"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
