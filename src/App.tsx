import { BriefExperienceCard } from './components/briefExperience';
import { Navbar } from "./components/navbar";
import Introduction from './components/Introduction';
import ContactSection from './components/ContactSection';
import Cardfront from "./components/Cardfront";
import { Rarity } from './components/Rarity';
/*import  ExperienceCarousel  from './components/ExperienceCarousel';*/
import Knowledge from './components/knowledge'
import { SocialSidebar } from './components/sidebar';
import './globals.css';
import ProjectsCarousel from './components/ProjectsCarousel';

function App() {
  const topics = ["Home", "Sobre", "Habilidades", "Certificados", "Projects"];


  const briefExperienceData = [
    {
      title: "Suporte Técnico",
      description: "Google IT Support",
      certificateImage: "/img/google0.jpg",
      tags: [
        { label: "Software", rarity: "common" as Rarity },
        { label: "Hardware", rarity: "common" as Rarity },
        { label: "CLI basic", rarity: "uncommon" as Rarity }
      ]
    },
    {
      title: "Redes de Computadores",
      description: "Google IT Support",
      certificateImage: "/img/google1.jpg",
      tags: [
        { label: "TPC/IP", rarity: "common" as Rarity },
        { label: "Network Troubleshooting", rarity: "common" as Rarity },
        { label: "DNS & DHCP", rarity: "rare" as Rarity }
      ]
    },
    {
      title: "Sistemas Operacionais",
      description: "Google IT Support",
      certificateImage: "/img/google2.jpg",
      tags: [
        { label: "Windows", rarity: "common" as Rarity },
        { label: "Linux", rarity: "rare" as Rarity },
        { label: "Powershell", rarity: "rare" as Rarity },
      ]
    },
    {
      title: "SysAdmin e Infraestrutura de TI",
      description: "Google IT Support",
      certificateImage: "/img/google3.jpg",
      tags: [
        { label: "Infrastructure", rarity: "common" as Rarity },
        { label: "SysAdmin", rarity: "uncommon" as Rarity },
        { label: "AD", rarity: "rare" as Rarity },
        { label: "Cloud Computing", rarity: "epic" as Rarity }
      ]
    },
    {
      title: "Segurança e Cybersegurança",
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
      title: "Windows Server 2025",
      description: "Windows Server",
      certificateImage: "/img/ws2016.png",
      tags: [
        { label: "AD", rarity: "uncommon" as Rarity },
        { label: "FTP", rarity: "uncommon" as Rarity },
        { label: "WDS", rarity: "rare" as Rarity },
        { label: "DHCP", rarity: "rare" as Rarity },
      ]
    },
    {
      title: "ADDS",
      description: "Windows Server 2025",
      certificateImage: "img/credencial.png",
      tags: [
        { label: "AD", rarity: "uncommon" as Rarity },
        { label: "GPO", rarity: "uncommon" as Rarity },
        { label: "Admin Center", rarity: "rare" as Rarity },
        { label: "Security", rarity: "rare" as Rarity },
      ]
    },
    {
      title: "Cloud & Virtualization",
      description: "VMs concepts",
      tags: [
        { label: "VirtualBox", rarity: "uncommon" as Rarity },
        { label: "Vmware", rarity: "uncommon" as Rarity },
        { label: "Hyper-V", rarity: "rare" as Rarity },
        { label: "EC2", rarity: "rare" as Rarity },
        { label: "Azure VM", rarity: "rare" as Rarity },
      ]
    },
  ];

  type ProjectData = {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    tags: string[];
  };

  const projects: ProjectData[] = [
    {
      title: 'Sistema de Inventário TI',
      description: 'Um sistema para gerenciar e controlar o inventário de equipamentos de TI.',
      imageUrl: 'img/inv.jpeg',
      projectUrl: 'https://github.com/JuniorTakaki/inventory-TI.git',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Projeto de Portfólio',
      description: 'Um site de portfólio para exibir meus projetos.',
      imageUrl: 'https://via.placeholder.com/400',
      projectUrl: 'https://github.com/usuario/meu-portfolio',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript']
    },
  ];

  return (
    <div className="container mx-auto max-w-full bg-gradient-to-br from-black via-gray-900 to-black">
      <Navbar topics={topics} />
      <SocialSidebar />
      <main className="pt-20">
        <section
          id="home"
          className="flex items-center justify-center"
        >
          <Cardfront />
        </section>
        <section id="about" className=" flex flex-col items-center justify-center px-4 py-16 space-y-16">
          <Introduction reverse={false} />
        </section>
        {/*<section id='experience'>
          <ExperienceCarousel/>
        </section>*/}

        <section id='experience' className='flex flex-col items-center justify-center px-4 py-16 space-y-16'>
          <Knowledge reverse={true} />
        </section>
        <section
          id="certificate"
          className="py-24 w-full  text-white mx-auto">
          <div className="mx-auto w-full space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-center bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Certificados
            </h2>

            <ul className="mx-auto w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
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
        <section>
          <ProjectsCarousel items={projects} />
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
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
