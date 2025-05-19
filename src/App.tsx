import { ExperienceCard } from "./components/experienceCard";
import { BriefExperienceCard } from './components/briefExperience';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ProfessionalCard } from "./components/professionalCard";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const briefExperienceData = [
    { title: "Active Directory (LDAP)" },
    { title: "Cybersecurity Awarenessgoo" },
    { title: "Technical Support" },
    { title: "Cloud & Virtualization (basic)" },
    { title: "Networking Fundamentals " },
    { title: "Repair computer" },
  ];
  return (
    <div className="w-full bg-neutral-950">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-700 shadow-lg py-4 px-6 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold font-mono">Armando S.</h1>
        <div className="hidden sm:flex gap-8 text-white font-semibold">
        <ProfessionalCard topic="Professional Summary"/>
        <ProfessionalCard topic="Professional Experience"/>
        <ProfessionalCard topic="Brief Experience"/>
        <ProfessionalCard topic="Contact"/>
        </div>
        <button className="sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="text-white"/> : <Menu className="text-white" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-16 left-0 right-0 bottom-0 z-40 bg-neutral-950 p-6 text-white font-semibold flex flex-col justify-center items-center space-y-6">
          <a href="#professional-summary" className="text-center" onClick={() => setIsMobileMenuOpen(false)}>Professional Summary</a>
          <a href="#professional-experience" className="text-center" onClick={() => setIsMobileMenuOpen(false)}>Professional Experience</a>
          <a href="#brief-experience" className="text-center" onClick={() => setIsMobileMenuOpen(false)}>Brief Experience</a>
          <a href="#contact" className="text-center" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Content Wrapper */}
      <div className="pt-6">
        {/* 1. Apresentação */}
        <section className="h-screen flex items-center justify-center py-28 px-2">
          <div className="max-w-2xl w-full space-y-8">
            <h1 className="text-lg sm:text-2xl font-semibold text-gray-200 transform transition-transform duration-300 hover:scale-105">
              Armando Setsuo
            </h1>
            
            <div className="text-4xl sm:text-6xl font-semibold text-gray-300">
              <p className="flex items-center font-semibold">Technical Support</p>

              <span className="relative inline-block mt-4 group w-fit">
                <span className="relative z-10 px-2 animator-text flex">
                  <span className="text-gray-500 text-2xl md:text-3xl">+</span>
                  <span className="text-white ml-2 text-2xl md:text-3xl">IT Infrastructure</span>
                </span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-700 animate-underline pointer-events-none"></span>
              </span>

              <p className="text-lg md:text-xl text-gray-500 italic mt-6">
                “Tudo que eu faço tem um propósito técnico e corporativo.”
              </p>
            </div>
          </div>
        </section>
     
      {/* 2. Resumo Profissional */}
      <section id="professional-summary" className="h-screen bg-neutral-950 text-white py-28 px-6  ">
        <div className="max-w-2xl w-full mx-auto text-center mb-24 space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white animate-fade-in-down">
            Professional Summary
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-6">
            <p>
              IT Technician with hands-on experience managing and maintaining over{" "}
              <span className="text-purple-400 font-semibold">280 computers</span> across six school laboratories.
            </p>
            <p>
              Specialized in{" "}
              <span className="text-purple-400 font-semibold">automation using Python and CMD</span>, developing desktop systems with SQLite and intelligent asset tracking via QR Codes.
            </p>
            <p>
              Strong skills in{" "}
              <span className="text-purple-400 font-semibold">network administration</span>, and{" "}
              <span className="text-purple-400 font-semibold">deployment via MDT/WDS</span>.
            </p>
            <p>
              Currently transitioning into{" "}
              <span className="text-purple-400 font-semibold">DevOps</span> and{" "}
              <span className="text-purple-400 font-semibold">Information Security</span>, aiming to deliver scalable and efficient solutions in enterprise environments.
            </p>
          </div>
        </div>
      </section>
      <section id="professional-experience" className="h-screen bg-neutral-950 text-white py-28 px-6 ">
        {/* 3. Experiência Profissional */}
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white text-center">
            Professional Experience
          </h2>
          <ul className="grid md:grid-cols-2 gap-8">
            <ExperienceCard
              image="/img/anchieta.jpeg"
              alt="Grupo Anchieta"
              company="Grupo Anchieta"
              role="IT Assistant"
              date="Oct 2024 – Present"
              type="atual"
            />
            <ExperienceCard
              image="/img/igus.jpeg"
              alt="Igus"
              company="Igus"
              role="Temporary Outsourced IT Support "
              date="May 2024 – Jun 2024"
              type="temporario"
            />
          </ul>
        </div>
      </section>
      <section id="brief-experience" className="h-screen bg-neutral-950 text-white py-28 px-6 ">
        {/* 4. Brief Experience */}
        <div className=" max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white text-center">
            Brief Experience
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none pl-0">
            {briefExperienceData.map((item, index) => (
              <BriefExperienceCard
                key={index}
                title={item.title}
              />
            ))}
          </ul>
        </div>
      </section>

      <style>{`
        @keyframes underline {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          51% {
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }

        .animate-underline {
          animation: underline 3s ease-in-out infinite;
          transform-origin: left;
          transform: scaleX(0);
        }
      `}</style>
      <section id="contact" className="py-20 px-5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex w-full justify-start">
            <div className="grid grid-cols-1 sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0">
              <h1 className="text-xl font-bold font-mono mb-2 text-white">Contact</h1>
              <p className="pb-5 text-gray-300">
                Email:{" "}
                <a
                  href="mailto:juniortakaki10@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  juniortakaki10@gmail.com
                </a>
                <br />
                Phone: (+55) 11 95106-8980
              </p>
              <div className="flex items-end gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/junior-takaki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform text-white hover:text-gray-500 text-2xl"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
                <a
                  href="https://www.instagram.com/takakii.s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform text-white hover:text-gray-500 text-2xl"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href="https://github.com/JuniorTakaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform text-white hover:text-gray-500 text-2xl"
                >
                  <i className="ri-github-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
export default App;
