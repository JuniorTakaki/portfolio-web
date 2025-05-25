import { BriefExperienceCard } from './components/briefExperience';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import SummaryDevOps from "./components/SummaryDevOps";
import ContactSection from './components/ContactSection';
import Cardfront from "./components/Cardfront";
import { Rarity } from './components/Rarity';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const briefExperienceData = [
    {
      title: "Technical Support",
      description: "Google IT Support",
      certificateImage: "/img/google0.jpg",
      tags: [
        { label: "Software", rarity: "common" as Rarity },
        { label: "Hardware", rarity: "common" as Rarity },
        { label: "CLI basic", rarity: "uncommon" as Rarity }
      ]
    },
    {
      title: "Computer Networking",
      description: "Google IT Support",
      certificateImage: "/img/google1.jpg",
      tags: [
        { label: "TPC/IP", rarity: "common" as Rarity },
        { label: "Network Troubleshooting", rarity: "common" as Rarity },
        { label: "DNS & DCHP", rarity: "rare" as Rarity }
      ]
    },
    {
      title: "Operating Systems",
      description: "Google IT Support",
      certificateImage: "/img/google2.jpg",
      tags: [
        { label: "Windows", rarity: "common" as Rarity },
        { label: "Linux", rarity: "rare" as Rarity },
        { label: "Powershell", rarity: "rare" as Rarity},
      ]
    },
    {
      title: "SysAdmin & Infrastructure",
      description: "Google IT Support",
      certificateImage: "/img/google3.jpg",
      tags: [
        { label: "Infrastructure", rarity: "common" as Rarity },
        { label: "SysAdmin", rarity: "uncommon" as Rarity },
        { label: "AD", rarity: "rare" as Rarity },
        { label: "Cloud Computing", rarity: "epic" as Rarity}
      ]
    },
    {
      title: "IT Security",
      description: "Google IT Support",
      certificateImage: "/img/google4.jpg",
      tags: [
        { label: "Cryptography", rarity: "common" as Rarity },
        { label: "Security Threats", rarity: "uncommon" as Rarity },
        { label: "Network Security", rarity: "rare" as Rarity },
        { label: "AAA", rarity: "rare" as Rarity },
      ]
    },
    {
      title: "Windows Server 2016",
      description: "Windows Server",
      certificateImage: "/img/ws2016.png",
      tags: [
        { label: "AD", rarity: "uncommon" as Rarity },
        { label: "FTP", rarity: "uncommon" as Rarity },
        { label: "WDS", rarity: "rare" as Rarity },
      ]
    },
    {
      title: "Cloud & Virtualization",
      description: "Conceitos de máquinas virtuais e Cloud.",
      tags: [
        { label: "VirtuaBox", rarity: "uncommon" as Rarity },
        { label: "Vmware", rarity: "uncommon" as Rarity },
        { label: "Hyper-V", rarity: "rare" as Rarity },
        { label: "EC2", rarity: "rare" as Rarity },
        { label: "Azure VM", rarity: "rare" as Rarity },
      ]
    },
  ];

  return (
    <div className="dark:bg-gradient-to-br from-black via-gray-900 to-black not-dark:bg-gradient-to-br not-dark:from-gray-200 not-Dark:via-gray-400 not-dark:to-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md px-6 py-3 flex justify-between items-center">
        <h1 className="text-white text-xl sm:text-2xl font-bold font-mono tracking-widest">
          Takaki.S
        </h1>
        <div className="hidden sm:flex gap-10 text-white font-semibold tracking-wide">
          {["About", "Experience", "Contact"].map((topic) => (
            <Navbar key={topic} topic={topic} />
          ))}
        </div>
        <button
          className="sm:hidden text-white transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full backdrop-blur-md flex flex-col px-6 py-4 sm:hidden gap-4">
            {["About", "Experience", "Contact"].map((topic) => (
              <Navbar key={topic} topic={topic}/>
            ))}
          </div>
        )}
      </nav>
      <div className="pt-6">
        return (
        <div>
          <Cardfront />
        </div>
        );
        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-16">
          <SummaryDevOps reverse={false}/>
        </section>
        <section id="experience" className="py-24 w-full text-white mx-auto px-6 ">
          <div className=" mx-auto w-full space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-center hover:scale-x-102 etransform transition-transform ase-out duration-300 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
            Certificate
            </h2>
            <ul className="mx-auto w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none  pl-0">
              {briefExperienceData.map((item, index) => (
                <BriefExperienceCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  certificateImage={item.certificateImage}
                  tags={item.tags}
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
      `}
        </style>
        <section id="contact">
          <ContactSection/>
        </section>
      </div>
    </div>
  );
}
export default App;
