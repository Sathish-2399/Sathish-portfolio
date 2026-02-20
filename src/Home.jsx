import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { ExternalLink, Download } from "lucide-react";

import Roles from "./Roles.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Certificates from "./Certificates.jsx";
import Coding from "./Coding.jsx";
import Contact from "./contact.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
    <div className="relative bg-gray-900">
      {/* ================= HOME / HERO SECTION ================= */}
      <section
        id="home"
        className="relative h-screen flex items-center overflow-hidden"
      >
        {/* Particles Background */}
        <div className="absolute inset-0 h-screen overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="w-full h-full"
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 80,
                density: { enable: true, value_area: 800 },
              },
              color: { value: "#3b82f6" },
              size: { value: 3, random: true },
              opacity: { value: 0.5 },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#3b82f6",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
              },
              modes: {
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
              },
            },
            retina_detect: true,
          }}
        />
        </div>


        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">

            {/* -------- LEFT SIDE : CONTENT -------- */}
            <div className="flex flex-col justify-center items-center md:text-left min-h-full">

              <div className="flex justify-center items-center gap-2 text-2xl font-bold">
                <span>Hi</span>
                <span className="animate-bounce">👋</span>
              </div>

              <h1 className="flex justify-center items-center text-4xl sm:text-6xl font-bold mt-4">
                I'm Sathish B
              </h1>

              <div className="mt-4">
                <Roles />
              </div>

              <p className="mt-4 max-w-xl text-gray-300">
                Passionate about building innovative solutions using
                Data Analytics and Full Stack Development.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition"
                >
                  View My Work
                  <ExternalLink size={18} />
                </a>

                <a
                  href="/SATHISH B - RESUME.pdf"
                  download
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>

            {/* -------- RIGHT SIDE : IMAGE -------- */}
            <div className="flex justify-center">
              <img
                src="/sathish.jpg"
                alt="Sathish"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover shadow-2xl border-4 border-blue-600"
              />
            </div>

          </div>
        </div>
      </section>
    </div>

      {/* ================= ABOUT ================= */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section id="certificates" className="scroll-mt-24">
        <Certificates />
      </section>

      {/* ================= CODING ================= */}
      {/* <section id="coding" className="scroll-mt-24">
        <Coding />
      </section> */}

      {/* ================= CONTACT ================= */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}
