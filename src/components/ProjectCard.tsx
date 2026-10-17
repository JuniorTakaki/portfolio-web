import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type ProjectCardProps = {
  index: number;
  featured?: boolean;
  title: string;
  description: string;
  context: string;
  status: string;
  imageUrl: string;
  projectUrl: string; // Link para o projeto (GitHub, site, etc.)
  tags: string[]; // Lista de tecnologias usadas
};


export const ProjectCard: React.FC<ProjectCardProps> = ({ index, featured = false, title, description, context, status, imageUrl, projectUrl, tags }) => {
  const { t } = useLanguage();
  return (
    <article className={`group flex h-full flex-col overflow-hidden border bg-[#071c26] transition-colors duration-300 hover:border-cyan-300/55 ${
      featured ? 'border-cyan-300/35 md:row-span-2' : 'border-sky-300/20'
    }`}>
      <div className={`relative overflow-hidden border-b border-sky-300/15 bg-sky-950/40 ${
        featured ? 'h-56 sm:h-72' : 'h-44 sm:h-48'
      }`}>
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={imageUrl} alt={`${t('projectImage')} ${title}`} />
        <span className="absolute left-3 top-3 border border-cyan-300/30 bg-[#071c26]/90 px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-cyan-200">
          0{index + 1} / {featured ? t('featuredProject') : t('projectLabel')}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 border border-white/15 bg-[#071c26]/90 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-sky-100/70">
          <Github size={12} aria-hidden="true" />
          {t('githubProject')}
        </span>
      </div>
      <div className={`flex flex-grow flex-col ${featured ? 'p-5 sm:p-7' : 'p-4 sm:p-5'}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="mb-2 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300/70">
              <Github size={12} aria-hidden="true" />
              {t('githubRepository')}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className={`font-bold leading-tight text-white ${featured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>{title}</h3>
              <span className="border border-cyan-300/25 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-cyan-200/80">
                {status}
              </span>
            </div>
          </div>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t('viewProject')} — ${title}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-cyan-300/35 text-cyan-200 transition-colors hover:border-cyan-200 hover:bg-cyan-300/15"
          >
            <Github size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-4 border-l border-cyan-300/35 pl-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300/65">{t('projectContext')}</p>
          <p className={`mt-1 flex-grow text-sky-100/65 ${featured ? 'text-sm leading-6 sm:text-base sm:leading-7' : 'text-sm leading-5'}`}>{context}</p>
        </div>
        <p className={`mt-3 text-sky-100/55 ${featured ? 'text-sm leading-6' : 'text-xs leading-5'}`}>{description}</p>

        <div className={`flex flex-wrap gap-2 ${featured ? 'mb-6 mt-6' : 'mb-4 mt-4'}`}>
          {tags.map((tag, index) => (
            <span key={index} className="border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-200">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto flex items-center justify-between border border-cyan-400/40 bg-sky-950/70 font-bold text-white transition-colors duration-300 hover:border-cyan-200 hover:bg-cyan-700 ${
            featured ? 'px-4 py-3 text-sm' : 'px-3 py-2.5 text-xs'
          }`}
        >
          <span className="flex items-center gap-2">
            <Github size={16} aria-hidden="true" />
            {t('viewOnGithub')}
          </span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};