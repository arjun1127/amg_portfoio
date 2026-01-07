import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import SplineContact from './spline/splineUse';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen py-24 px-6 bg-transparent"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10 text-center lg:text-left">

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-indigo-900 via-cyan-400 to-purple-700 mb-8"
          >
            Contact Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-cyan-700 mb-10 max-w-md mx-auto lg:mx-0"
          >
            Have a project in mind or want to collaborate?
            Reach out and let’s build something meaningful.
          </motion.p>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="
              bg-black/70 backdrop-blur-xl
              rounded-2xl border border-black/20
              shadow-[0_30px_80px_rgba(0,0,0,0.35)]
              p-6 sm:p-10
              max-w-lg mx-auto lg:mx-0
            "
          >
            <div className="mb-5">
              <label className="block text-sm text-zinc-300 mb-1">Name</label>
              <input
                className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-white/10 focus:ring-2 focus:ring-zinc-600 outline-none"
                placeholder="Your name"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm text-zinc-300 mb-1">Email</label>
              <input
                className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-white/10 focus:ring-2 focus:ring-zinc-600 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-zinc-300 mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-white/10 focus:ring-2 focus:ring-zinc-600 outline-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="
                w-full py-3 rounded-lg
                bg-gradient-to-r from-zinc-800 to-zinc-700
                hover:from-zinc-700 hover:to-zinc-600
                text-white font-semibold transition
              "
            >
              Send Message
            </button>
          </motion.form>

          {/* SOCIAL ICONS */}
          {/* <div className="flex justify-center lg:justify-start gap-6 mt-8 text-zinc-500 text-xl">
            <a href="mailto:arjunkrao2004@gmail.com" className="hover:text-zinc-800">
              <FaEnvelope />
            </a>
            <a href="https://github.com/arjun1127" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/arjun-rao1127/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800">
              <FaLinkedin />
            </a>
          </div> */}
        </div>

        {/* RIGHT SPLINE — DESKTOP ONLY */}
        <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden hidden lg:block">
          <SplineContact url="https://prod.spline.design/p-KUDgQShUkmYoOO/scene.splinecode" />
        </div>

      </div>
    </section>
  );
};

export default Contact;
