import { BriefExperienceCard } from './components/briefExperience';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Navbar } from "./components/navbar";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const briefExperienceData = [
    {
      title: "Google IT Support",
      description:"Technical Support Fundamentals",
      certificateImage:"/img/google0.jpg",
      Tags:["windows","linux"],
    },
    {
      title:"Google  IT Support",
      description:"Computer Networking",
      certificateImage:"/img/google1.jpg",
      Tags:[],
    },
    {
      title:"Google IT Support",
      description:"Operating Systems",
      certificateImage:"/img/google2.jpg",
      Tags:["windows","linux"],
    },
    {
      title:"Google IT Support",
      description:"SysAdmin & Infrastructure",
      certificateImage:"/img/google3.jpg",
      Tags:["windows","linux","LDAP",],
    },
    {
      title:"Google IT Support",
      description:"IT Security",
      certificateImage:"/img/google4.jpg",
      Tags:["windows","linux","Phising","rootkit","Spyware","Kerberos"],
    },
    {
      title: "Windows Server",
      description:"Windows Server 2016",
      certificateImage:"/img/ws2016.png",
      Tags:["WDS","AD","FTP"]
    },
    {
      title: "Cloud & Virtualization",
      description: "Conceitos de máquinas virtuais e nuvem com GCP e VirtualBox.",
      Tags:["Hyper-v","VirtualBox","Vmware"]
    },
  ];

  return (
    <div className="dark:bg-gradient-to-br from-black via-gray-900 to-black not-dark:bg-gradient-to-br not-dark:from-gray-200 not-Dark:via-gray-400 not-dark:to-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-700 shadow-lg py-3 px-6 flex justify-between items-center">
  <h1 className="text-white text-xl font-bold font-mono">Armando S.</h1>
  <div className="hidden sm:flex gap-10 text-white font-semibold tracking-wide">
  {["Summary", "Experience", "Contact"].map((topic) => (
    <Navbar key={topic} topic={topic} />
  ))}
</div>

  {/* Mobile Menu Button */}
  <button className="sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
    {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
  </button>

  {/* Mobile Navigation */}
  {isMobileMenuOpen && (
    <div className="absolute top-full left-0 w-full bg-neutral-950 text-white flex flex-col items-start px-6 py-4 gap-4 sm:hidden border-t border-neutral-700">
      {["Summary", "Experience","Contact"].map((item, i) => (
        <a
          key={i}
          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-white hover:text-purple-400 font-semibold"
        >
          {item}
        </a>
      ))}
    </div>
  )}
</nav>

    <div className="pt-6">
      <section className="h-screen flex items-center justify-center py-28 px-2">
        <div className="max-w-2xl  space-y-8">
          <h1 className="text-lg h-auto sm:text-2xl font-semibold dark:text-purple-700  not-dark:text-white transform transition-transform duration-300 hover:scale-105">
            Armando Setsuo
          </h1>
        <div className="text-4xl  sm:text-6xl font-semibold ">
          <blockquote className=" font-semibold italic dark:text-white not-dark:text-black ">Technical
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-700">    
                <span className="relative dark:text-gray-950 not-dark:text-white hover:scale-110 transform transition-transform duration-300 "> Support </span>
              </span> 
          </blockquote>
              <span className="relative inline-block mt-4 group w-fit">
                <span className="relative z-10 px-2 animator-text flex">
                  <span className="text-gray-500 text-2xl md:text-3xl">+</span>
                  <span className="dark:text-white not-dark:text-black ml-2 text-2xl md:text-3xl">IT Infrastructure</span>
                </span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-700 animate-underline pointer-events-none"></span>
              </span>
                <p className="text-lg md:text-xl dark:text-gray-300 not-dark:text-black italic mt-6">
                  “Everything to a purpose, profissionally & corporately.”
                </p>
          </div>
        </div>
      </section>

      <section id="summary" className="min-h-screen  flex items-center justify-center px-4">
        <div className="backdrop-blur-md bg-white/5 border border-purple-500/30 shadow-[0_0_30px_#a855f7] rounded-2xl p-8 md:p-12 max-w-4xl w-full transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_#a855f7]">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">Professional 
            <span className="text-purple-400"> Summary </span>
          </h2>
        <div className="space-y-6 text-gray-200 text-base md:text-lg leading-relaxed">
          <p>
            <span className="text-purple-300 font-semibold">IT Technician { }</span> 
                with hands-on experience managing and maintaining over 
              <span className="text-purple-400 font-bold"> 280 computers </span>
                across six school laboratories.
          </p>
          <p>
            Specialized in { }
            <span className="text-purple-300 font-semibold">automation using Python and CMD</span>,
            developing desktop systems with SQLite and intelligent asset tracking via QR Codes.
          </p>
          <p>
            Strong skills in { }
            <span className="text-purple-300 font-semibold">network administration</span> and{" "}
            <span className="text-purple-300 font-semibold">deployment via MDT/WDS</span>.
          </p>
          <p>
            Currently transitioning into { }
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              DevOps and Information Security
            </span>, aiming to deliver scalable and efficient solutions in enterprise environments.
          </p>
        </div>
      </div>
    </section>

         {/* <section id="professional-experience" className="min-h-screen text-white py-28 px-4">
    <div className="max-w-4xl mx-auto space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-white text-center">
        Professional Experience
      </h2>

      <ul className="grid gap-6 md:grid-cols-2">
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
          role="Temporary Outsourced IT Support"
          date="May 2024 – Jun 2024"
          type="temporario"
        />
      </ul>
    </div>
  </section> */}
  
      <section id="experience" className="py-24 w-full text-white mx-auto  px-6 ">
        <div className=" mx-auto w-full space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white text-center">
            Brief Experience
          </h2>
          <ul className="mx-auto w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none  pl-0">
            {briefExperienceData.map((item, index) => (
              <BriefExperienceCard
                key={index}
                title={item.title}
                description={item.description}
                certificateImage={item.certificateImage}
                tags={item.Tags}
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
      <section id="contact" className=" py-20 px-5">
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
