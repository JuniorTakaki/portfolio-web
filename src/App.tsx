import { BriefExperienceCard } from './components/briefExperience';
import { Navbar } from "./components/navbar";
import SummaryDevOps from "./components/SummaryDevOps";
import ContactSection from './components/ContactSection';
import Cardfront from "./components/Cardfront";
import { Rarity } from './components/Rarity';
/*import  ExperienceCarousel  from './components/ExperienceCarousel';*/
import Knowledge from './components/knowledge'
import { SocialSidebar }  from './components/sidebar';

function App() {
  const topics = ["Home", "About", "Experience", "Certificate"];
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
          { label: "DNS & DHCP", rarity: "rare" as Rarity }
        ]
      },
      {
        title: "Operating Systems",
        description: "Google IT Support",
        certificateImage: "/img/google2.jpg",
        tags: [
          { label: "Windows", rarity: "common" as Rarity },
          { label: "Linux", rarity: "rare" as Rarity },
          { label: "Powershell", rarity: "rare" as Rarity },
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
          { label: "Cloud Computing", rarity: "epic" as Rarity }
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

  return (
    <div className="container mx-auto max-w-full dark:bg-gradient-to-br from-black via-gray-900 to-black not-dark:bg-gradient-to-br not-dark:from-gray-200 not-dark:via-gray-400 not-dark:to-white">
      <Navbar topics={topics} />
      <SocialSidebar/>
      <main className="pt-20">
        <section id="home" className="flex h-full justify-center items-center">
          <Cardfront />
        </section>
        <section id="about" className=" flex flex-col items-center justify-center px-4 py-16 space-y-16">
          <SummaryDevOps reverse={false} />
        </section>
        {/*<section id='experience'>
          <ExperienceCarousel/>
        </section>*/}
        <section id='experience' className='flex flex-col items-center justify-center px-4 py-16 space-y-16'>
          <Knowledge reverse={true}/>
        </section>
        <section
          id="certificate"
          className="py-24 w-full  text-white mx-auto">
          <div className="mx-auto w-full space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-center hover:scale-x-102 transform transition-transform ease-out duration-300 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Certificate
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
