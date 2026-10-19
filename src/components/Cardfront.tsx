import AnimatedSubtitle from './AnimatedSubtitle';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, Mail } from 'lucide-react';

const Cardfront = () => {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center border-b border-sky-400/20 px-4 py-20 sm:px-8 lg:px-24">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-4 sm:flex-row sm:items-start sm:px-8 lg:px-2">

        {/* Avatar - somente mobile */}
        <div className="sm:hidden flex-shrink-0">
          <div className="w-28 h-28 rounded-full border-2 border-cyan-400 bg-[#062b36] p-[3px] sm:h-36 sm:w-36 md:h-44 md:w-44">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="/img/profile.jpg"
                alt="Perfil"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1 text-center sm:text-left">
          <div className="mb-7 inline-flex items-center gap-2 border border-cyan-300/30 bg-black px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            {t('available')}
          </div>
          {/* Cargo */}
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-sky-100/45">portfolio / 2025—2026</p>
          <h1 className="text-xl font-semibold text-cyan-300 transition-transform duration-300 hover:scale-105 sm:text-2xl lg:text-3xl">
            Cloud & DevOps Engineer
          </h1>

          {/* Nome + Setsuo */}
          <div className="mt-4 space-y-6 text-5xl font-semibold sm:text-6xl lg:text-7xl">
            <blockquote className="leading-tight text-white">
              Armando{" "}
              <span className="relative inline-block border-b-2 border-cyan-400 pb-1">
                <span className="relative text-white transition-transform duration-300 hover:scale-110">
                  Setsuo
                </span>
              </span>
            </blockquote>

            {/* Área */}
            <AnimatedSubtitle />

            {/* Frase */}
            <p className="mt-4 max-w-2xl px-2 text-base italic text-gray-300 sm:text-xl lg:text-2xl">
              “Everything to a purpose, professionally & corporately.”
            </p>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-left">
              {[
                ['02+', t('yearsBuilding')],
                // ['0+', t('projectsDelivered')],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-cyan-400/40 pl-3">
                  <p className="font-mono text-xl text-white sm:text-2xl">{value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-sky-200/50">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border border-cyan-300/45 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100 transition-colors hover:border-cyan-200 hover:bg-cyan-300/20"
              >
                <ArrowDown size={16} aria-hidden="true" />
                {t('seeProjects')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-sky-300/25 px-4 py-3 text-sm font-semibold text-sky-100/80 transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
              >
                <Mail size={16} aria-hidden="true" />
                {t('contactMe')}
              </a>
            </div>
          </div>
        </div>
        <div className="hidden w-40 shrink-0 self-center text-right font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500 sm:block">
          <span className="mb-3 block text-cyan-300/70">{t('scroll')}</span>
          <span className="mx-auto block h-16 w-px bg-cyan-300/70" />
        </div>
      </div>
    </div>
  );
};

export default Cardfront;
