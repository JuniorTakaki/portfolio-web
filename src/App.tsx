import { Navbar } from "./components/navbar";
import Introduction from './components/Introduction';
import ContactSection from './components/ContactSection';
import Cardfront from "./components/Cardfront";
import Knowledge from './components/knowledge';
import { SocialSidebar } from './components/sidebar';
import './globals.css';
import ProjectsCarousel from './components/ProjectsCarousel';
import { CertificateGallery } from './components/CertificateGallery';
import { AppliedSkills } from './components/AppliedSkills';
import { MobileCredentialsHub } from './components/MobileCredentialsHub';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { language, t } = useLanguage();


  const briefExperienceData = [
    {
      title: "Fortinet NSE 3 Certified in Cybersecurity",
      description: "Fortinet NSE 3",
      certificateImage: "/img/fortinet-nse3.png",
    }, 
    {
      title: "LFC108: Cybersecurity Essentials",
      description: "The linux foundation",
      certificateImage: "/img/lfc108.png",
    }, 
     {
      title: "LFD121: Developing Secure Software",
      description: "The linux foundation",
      certificateImage: "/img/lfd121.png",
    }, 
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
      title: "Windows Server 2022",
      description: "Windows Server",
      certificateImage: "/img/windows-server-2022.jpg",
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
    imageFit?: 'cover' | 'contain';
    projectUrl: string;
    tags: string[];
  };

  const projects: ProjectData[] = [
    {
      title: language === 'pt-BR' ? 'Lab de Automação e Segurança' : 'Security & Automation Lab',
      description: language === 'pt-BR'
        ? 'Aplicação Python com SQLite que aplica controles de desenvolvimento seguro: validação de entrada, hash de senhas com bcrypt, consultas parametrizadas contra SQL Injection, imagem Docker enxuta e pipeline com SAST, SCA e varredura de vulnerabilidades.'
        : 'Python + SQLite app applying secure development controls: input validation, bcrypt password hashing, parameterized queries against SQL injection, a hardened Docker image and a CI pipeline with SAST, SCA and vulnerability scanning.',
      context: language === 'pt-BR' ? 'Laboratório prático baseado no curso LFD121 — Developing Secure Software, da Linux Foundation.' : 'Hands-on lab based on the Linux Foundation LFD121 — Developing Secure Software course.',
      status: language === 'pt-BR' ? 'Publicado' : 'Published',
      imageUrl: '/img/lfd121.png',
      imageFit: 'contain',
      projectUrl: 'https://github.com/JuniorTakaki/lab-seguranca-lfd121',
      tags: ['Python', 'SQLite', 'bcrypt', 'Docker', 'GitHub Actions']
    },
    {
      title: language === 'pt-BR' ? 'Chat com Documentos (RAG)' : 'Chat with Documents (RAG)',
      description: language === 'pt-BR'
        ? 'Faça perguntas sobre PDFs, Markdown e TXT: os documentos são divididos em trechos, indexados com embeddings locais no ChromaDB e a IA responde citando as fontes. O provedor (Gemini, Ollama ou Claude) é trocado pelo .env.'
        : 'Ask questions about your PDFs, Markdown and TXT files: documents are chunked, indexed with local embeddings in ChromaDB, and the AI answers citing its sources. The LLM provider (Gemini, Ollama or Claude) is switchable via .env.',
      context: language === 'pt-BR' ? 'Estudo do padrão RAG, base da maioria dos chatbots corporativos, com foco em reduzir alucinação.' : 'Exploring the RAG pattern behind most enterprise chatbots, with a focus on reducing hallucination.',
      status: language === 'pt-BR' ? 'Publicado' : 'Published',
      imageUrl: '/img/projects/rag-ia.svg',
      projectUrl: 'https://github.com/JuniorTakaki/RAG-IA',
      tags: ['Python', 'ChromaDB', 'Streamlit', 'Gemini', 'RAG']
    },
    {
      title: language === 'pt-BR' ? 'Inventário de TI (ITAM)' : 'IT Asset Inventory (ITAM)',
      description: language === 'pt-BR'
        ? 'Agente coletor que levanta hardware e sistema das máquinas (psutil/WMI) e envia para uma API Flask, que armazena em SQLite. Interface Tkinter para consultar ativos e registrar manutenções.'
        : 'Collector agent that gathers hardware and OS data (psutil/WMI) and sends it to a Flask API that stores it in SQLite. Tkinter GUI to browse assets and log maintenance.',
      context: language === 'pt-BR' ? 'Gestão de ativos de TI para suporte técnico.' : 'IT asset management for technical support teams.',
      status: language === 'pt-BR' ? 'Em desenvolvimento' : 'In progress',
      imageUrl: '/img/projects/inventory-ti.svg',
      projectUrl: 'https://github.com/JuniorTakaki/inventory-TI',
      tags: ['Python', 'Flask', 'SQLite', 'Tkinter']
    },
    {
      title: 'IT Support PowerShell',
      description: language === 'pt-BR'
        ? 'Scripts para levantamento de hardware e desempenho e manutenção preventiva: limpeza de cache DNS, reset do Winsock, serviços do Windows Update, com log e modo -WhatIf.'
        : 'Scripts for hardware and performance reports and preventive maintenance: DNS cache flush, Winsock reset, Windows Update services, with logging and -WhatIf mode.',
      context: language === 'pt-BR' ? 'Diagnóstico e manutenção de máquinas Windows.' : 'Diagnostics and maintenance for Windows machines.',
      status: language === 'pt-BR' ? 'Publicado' : 'Published',
      imageUrl: '/img/projects/it-support-powershell.svg',
      projectUrl: 'https://github.com/JuniorTakaki/IT-Support-Powershell',
      tags: ['PowerShell', 'Windows', language === 'pt-BR' ? 'Automação' : 'Automation']
    }
  ];

  return (
    <div className="tech-grid relative min-h-screen overflow-hidden text-white">
      <Navbar />
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
