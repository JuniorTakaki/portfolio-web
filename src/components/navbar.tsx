import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  // `only` controls visibility: certificate/applied sections exist from md up,
  // the combined credentials hub exists only below md.
  const links: { label: string; href: string; only?: 'mobile' | 'desktop' }[] = [
    { label: t('home'), href: '#home' },
    { label: t('about'), href: '#about' },
    { label: t('skills'), href: '#habilidades' },
    { label: t('certificates'), href: '#certificate', only: 'desktop' },
    { label: t('appliedSkills'), href: '#applied-skills', only: 'desktop' },
    { label: t('credentials'), href: '#credentials', only: 'mobile' },
    { label: t('projects'), href: '#projects' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center gap-4 border-b border-sky-400/20 bg-[#080609]/95 px-4 py-4 backdrop-blur-xl sm:gap-6 sm:px-6">
      <a href="#home" className="shrink-0 font-mono text-xl font-bold tracking-widest text-white sm:text-2xl">
        <span className="text-cyan-300">/</span> Takaki<span className="text-cyan-300">.S</span>
      </a>

      {/* Menu desktop */}
      <div className="hidden flex-1 justify-center gap-5 text-white lg:flex xl:gap-7">
        {links.filter((link) => link.only !== 'mobile').map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="relative text-xs uppercase tracking-widest text-sky-100/70 transition-colors duration-300 hover:text-cyan-300"
          >
            {label}
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={toggleLanguage}
        className="ml-auto shrink-0 border border-cyan-300/30 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-cyan-200 transition-colors hover:border-cyan-200"
        aria-label={t('changeLanguage')}
      >
        {language === 'pt-BR' ? 'EN' : 'PT-BR'}
      </button>

      {/* Botão do menu mobile */}
      <button
        type="button"
        className="text-white transition-all duration-200 lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={t('toggleMenu')}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full z-40 flex w-full flex-col gap-4 border-b border-sky-300/10 bg-[#080609] px-6 py-4 lg:hidden">
          {links.map(({ label, href, only }) => (
            <a
              key={href}
              href={href}
              className={`font-semibold text-white transition-colors duration-300 hover:text-cyan-400 ${
                only === 'mobile' ? 'md:hidden' : only === 'desktop' ? 'hidden md:block' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
