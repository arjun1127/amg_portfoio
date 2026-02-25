import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import SceneLayout from './layout/SceneLayout';
import Experience from './components/Experience';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <SceneLayout>
        <div className="text-white font-sans scroll-smooth h">
          <Navbar />
          <main>
            <section id="hero">
              <Hero />
            </section>
            <section id="about" className="">
              <About />
            </section>
            <section id="experience" className="">
              <Experience />
            </section>
            <section id="projects" className="">
              <Projects />
            </section>
            <section id="skills" className="">
              <Skills />
            </section>
            <section id="contact" className="">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </SceneLayout>
    </>
  );
};

export default App;
