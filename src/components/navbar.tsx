import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  topics: string[];
}

export function Navbar({ topics }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const topicIds: Record<string, string> = {
    Home: 'home',
    Sobre: 'about',
    Habilidades: 'habilidades',
    Certificados: 'certificate',
    Projects: 'projects',
  };
  const translatedTopics = [t('home'), t('about'), t('skills'), t('certificates'), t('appliedSkills'), t('projects')];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center gap-4 border-b border-sky-400/20 bg-[#080609]/95 px-4 py-4 backdrop-blur-xl sm:gap-6 sm:px-6">
      <a href="#home" className="shrink-0 font-mono text-xl font-bold tracking-widest text-white sm:text-2xl">
        <span className="text-cyan-300">/</span> Takaki<span className="text-cyan-300">.S</span>
      </a>

      {/* Menu desktop */}
      <div className="hidden flex-1 justify-center gap-5 text-white lg:flex xl:gap-7">
        {translatedTopics.map((topic, index) => {
          const sourceTopic = topics[index];
          const href = `#${topicIds[sourceTopic] ?? sourceTopic.toLowerCase().replace(/\s+/g, '-')}`;
          return (
            <a
              key={topic}
              href={href}
              className="relative text-xs uppercase tracking-widest text-sky-100/70 transition-colors duration-300 hover:text-cyan-300"
            >
              {topic}
            </a>
          );
        })}
      </div>

      <button
        type="button"
        onClick={toggleLanguage}
        className="ml-auto shrink-0 border border-cyan-300/30 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-cyan-200 transition-colors hover:border-cyan-200"
        aria-label="Change language"
      >
        {language === 'pt-BR' ? 'EN' : 'PT-BR'}
      </button>

      {/* Botão do menu mobile */}
      <button
        className="sm:hidden text-white transition-all duration-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Mobile Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full z-40 flex w-full flex-col gap-4 border-b border-sky-300/10 bg-[#080609] px-6 py-4 sm:hidden">
          {[
            { label: t('home'), href: '#home' },
            { label: t('about'), href: '#about' },
            { label: t('skills'), href: '#habilidades' },
            { label: t('credentials'), href: '#credentials' },
            { label: t('projects'), href: '#projects' },
          ].map(({ label, href }) => {
            return (
              <a
                key={href}
                href={href}
                className="text-white font-semibold transition-colors duration-300 hover:text-cyan-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
