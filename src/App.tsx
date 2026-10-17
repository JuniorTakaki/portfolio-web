import { Navbar } from "./components/navbar";
import Introduction from './components/Introduction';
import ContactSection from './components/ContactSection';
import Cardfront from "./components/Cardfront";
/*import  ExperienceCarousel  from './components/ExperienceCarousel';*/
import Knowledge from './components/knowledge'
import { SocialSidebar } from './components/sidebar';
import './globals.css';
import ProjectsCarousel from './components/ProjectsCarousel';
import { CertificateGallery } from './components/CertificateGallery';
import { AppliedSkills } from './components/AppliedSkills';
import { MobileCredentialsHub } from './components/MobileCredentialsHub';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { language, t } = useLanguage();
  const topics = ["Home", "Sobre", "Habilidades", "Certificados", "Applied Skills", "Projects"];


  const briefExperienceData = [
    {
      title: language === 'pt-BR' ? "Suporte Técnico" : "Technical Support",
      description: language === 'pt-BR' ? "Google IT Support" : "Google IT Support",
      certificateImage: "/img/google_page-0001.jpg",
    },
    {
      title: language === 'pt-BR' ? "Redes de Computadores" : "Computer Networking",
      description: "Google IT Support",
      certificateImage: "/img/google1.jpg",
    },
    {
      title: language === 'pt-BR' ? "Sistemas Operacionais" : "Operating Systems",
      description: "Google IT Support",
      certificateImage: "/img/google2.jpg",
    },
    {
      title: language === 'pt-BR' ? "SysAdmin e Infraestrutura de TI" : "SysAdmin and IT Infrastructure",
      description: "Google IT Support",
      certificateImage: "/img/google3.jpg",
    },
    {
      title: language === 'pt-BR' ? "Segurança e Cybersegurança" : "Security and Cybersecurity",
      description: "Google IT Support",
      certificateImage: "/img/google4.jpg",
    },
    {
      title: "Windows Server 2025",
      description: "Windows Server",
      certificateImage: "/img/ws2016.png",
    },
    {
      title: "Cloud & Virtualization",
      description: language === 'pt-BR' ? "Conceitos de máquinas virtuais" : "VM concepts",
    },
  ];

  const appliedSkills = [
    {
      title: 'ADDS',
      description: language === 'pt-BR'
        ? 'Implementação prática de Active Directory Domain Services em ambiente Windows Server, com foco em estrutura de domínio, políticas e administração segura.'
        : 'Practical implementation of Active Directory Domain Services in a Windows Server environment, focused on domain structure, policies and secure administration.',
      officialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/JuniorTakaki/CA17A3B7367C14BF?sharingId=A6458A544F8E1017',
      category: 'Identity & access',
      technologies: ['Windows Server', 'Active Directory', 'Microsoft Entra'],
      providerInitials: 'MS',
      providerName: 'Microsoft Learn',
      providerIcon: 'https://learn.microsoft.com/en-us/media/profile/zero-state-applied-skills.svg?branch=main',
    },
    {
      title: 'Create and manage automated processes by using Power Automate',
      description: language === 'pt-BR'
        ? 'Automação de processos com Microsoft Power Automate, conectando serviços e criando fluxos para reduzir tarefas manuais e melhorar a eficiência operacional.'
        : 'Process automation with Microsoft Power Automate, connecting services and building flows to reduce manual work and improve operational efficiency.',
      officialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/JuniorTakaki/55CE54178F0F4513?sharingId=A6458A544F8E1017',
      category: 'Business process automation',
      technologies: ['Power Automate', 'Cloud flows', 'Process automation'],
      providerInitials: 'MS',
      providerName: 'Microsoft Learn',
      providerIcon: 'https://learn.microsoft.com/en-us/media/profile/zero-state-applied-skills.svg?branch=main',
    },
    {
      title: 'Cisco Networking Academy',
      description: language === 'pt-BR'
        ? 'Credencial verificada pela Credly que representa conhecimentos práticos em redes e tecnologias Cisco.'
        : 'Credly-verified credential representing practical knowledge of networking and Cisco technologies.',
      officialUrl: 'https://www.credly.com/badges/a5fa18a8-a306-4d9f-93b7-ac0d53c347da/public_url',
      category: 'Networking',
      technologies: ['Cisco', 'Networking', 'Credly'],
      providerInitials: 'CS',
      providerName: 'Cisco / Credly',
    },
  ];

  type ProjectData = {
    title: string;
    description: string;
    context: string;
    status: string;
    imageUrl: string;
    projectUrl: string;
    tags: string[];
  };

  const projects: ProjectData[] = [
    {
      title: language === 'pt-BR' ? 'Sistema de Inventário TI' : 'IT Inventory System',
      description: language === 'pt-BR' ? 'Um sistema para gerenciar e controlar o inventário de equipamentos de TI.' : 'A system to manage and control IT equipment inventory.',
      context: language === 'pt-BR' ? 'Centralizar ativos e tornar o controle de equipamentos mais rastreável.' : 'Centralize assets and make equipment tracking more reliable.',
      status: language === 'pt-BR' ? 'Em evolução' : 'In progress',
      imageUrl: '/img/inv.jpeg',
      projectUrl: 'https://github.com/JuniorTakaki/inventory-TI.git',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: language === 'pt-BR' ? 'Projeto de Portfólio' : 'Portfolio Website',
      description: language === 'pt-BR' ? 'Um site de portfólio para exibir meus projetos.' : 'A portfolio website to showcase my projects.',
      context: language === 'pt-BR' ? 'Apresentar projetos, infraestrutura e evolução técnica em uma experiência responsiva.' : 'Showcase projects, infrastructure and technical growth through a responsive experience.',
      status: language === 'pt-BR' ? 'Publicado' : 'Published',
      imageUrl: '/img/experiencepic.svg',
      projectUrl: 'https://github.com/JuniorTakaki/portfolio-web',
      tags: ['React', 'TypeScript', 'Tailwind CSS']
    },
  ];

  return (
    <div className="tech-grid relative min-h-screen overflow-hidden text-white">
      <Navbar topics={topics} />
      <SocialSidebar />
      <main className="relative z-10 pt-20">
        <section
          id="home"
          className="flex items-center justify-center"
        >
          <Cardfront />
        </section>
        <section id="about" className="section-rule flex scroll-mt-20 flex-col items-center justify-center space-y-16 px-4 py-16 lg:pr-24 lg:py-24">
          <Introduction reverse={false} />
        </section>
        {/*<section id='experience'>
          <ExperienceCarousel/>
        </section>*/}

        <section id='habilidades' className='section-rule flex scroll-mt-20 flex-col items-center justify-center space-y-16 px-4 py-16 lg:pr-24 lg:py-24'>
          <Knowledge reverse={true} />
        </section>
        <MobileCredentialsHub certificates={briefExperienceData} appliedSkills={appliedSkills} />
        <section
          id="certificate"
          className="section-rule mx-auto hidden w-full scroll-mt-20 py-24 text-white md:block">
          <div className="mx-auto w-full space-y-12">
            <div className="mx-auto w-11/12 max-w-7xl border-l-2 border-cyan-400 pl-5">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">{t('proofOfWork')} / 01</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                {t('certificateSection')}
              </h2>
              <p className="mt-3 max-w-xl text-sm text-sky-100/55">{t('certificateDescription')}</p>
            </div>

            <CertificateGallery items={briefExperienceData} />
          </div>
        </section>
        <div className="hidden md:block">
          <AppliedSkills items={appliedSkills} />
        </div>
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
