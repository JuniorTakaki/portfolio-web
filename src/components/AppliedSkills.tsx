export interface AppliedSkill {
  title: string;
  description: string;
  officialUrl: string;
  category: string;
  technologies: string[];
  providerInitials: string;
  providerName: string;
  providerIcon?: string;
}
import { useLanguage } from '../context/LanguageContext';

interface AppliedSkillsProps {
  items: AppliedSkill[];
}

export const AppliedSkills = ({ items }: AppliedSkillsProps) => {
  const { t } = useLanguage();
  return (
  <section id="applied-skills" className="section-rule scroll-mt-20 px-3 py-16 md:px-4 md:py-24 md:pr-24">
    <div className="mx-auto w-full max-w-7xl md:w-11/12">
      <div className="mb-7 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end md:gap-5">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">{t('handsOn')}</p>
          <h2 className="border-l-2 border-cyan-400 pl-3 font-mono text-2xl font-bold text-white md:pl-5 md:text-5xl">
            {t('appliedTitle')}
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-sky-100/55">
          {t('appliedDescription')}
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="group grid min-w-0 overflow-hidden border border-sky-300/25 bg-[#0d0a14] transition-colors hover:border-cyan-300/50 md:grid-cols-[minmax(8rem,11rem)_minmax(0,1fr)_minmax(11rem,15rem)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-sky-300/15 bg-[#071c26] p-4 md:flex-col md:items-start md:justify-between md:border-b-0 md:border-r md:p-5">
              <span className="font-mono text-xs tracking-[0.25em] text-cyan-300/70">0{index + 1} / {t('skill')}</span>
              <div className="text-right md:mt-8 md:text-left">
                <div className="flex items-center gap-2 md:flex-row-reverse md:justify-end">
                  {item.providerIcon ? (
                    <img
                      src={item.providerIcon}
                      width="32"
                      height="32"
                      alt=""
                      className="h-8 w-8 rounded-full border border-sky-300/40 object-cover object-[50%_57%]"
                    />
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-300/40 font-mono text-[9px] text-cyan-200">
                      {item.providerInitials}
                    </span>
                  )}
                  <span className="block text-2xl font-bold text-white md:text-3xl">{item.providerInitials}</span>
                </div>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-sky-100/45">{item.providerName}</span>
              </div>
            </div>

            <div className="min-w-0 p-4 md:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="border border-cyan-300/30 bg-cyan-300/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-100">
                  {t('appliedSkillLabel')}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-100/40">{item.category}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold leading-tight text-white md:mt-4 md:text-3xl">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-sky-100/65 md:mt-3 md:leading-7">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 md:mt-5">
                {item.technologies.map((skill) => (
                  <span key={skill} className="border border-white/10 px-2.5 py-1 font-mono text-[10px] text-sky-100/55">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="min-w-0 flex flex-col justify-between border-t border-sky-300/15 p-4 md:border-l md:border-t-0 md:p-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-100/40">{t('officialCredentialLabel')}</p>
                <p className="mt-2 text-sm font-semibold leading-5 text-white">{t('officialCredential')}</p>
              </div>
              <a
                href={item.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex min-w-0 items-center justify-between gap-2 border border-cyan-300/40 bg-cyan-300/10 px-3 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-200 hover:bg-cyan-300/20 md:mt-6"
              >
                <span className="flex items-center gap-2">
                  {item.providerIcon ? (
                    <img
                      src={item.providerIcon}
                      width="26"
                      height="26"
                      alt=""
                      className="h-[26px] w-[26px] rounded-full border border-sky-300/40 object-cover object-[50%_57%]"
                    />
                  ) : (
                    <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-sky-300/40 font-mono text-[9px] text-cyan-200">
                      {item.providerInitials}
                    </span>
                  )}
                  <span className="truncate">{t('viewCredential')}</span>
                </span>
                <span aria-hidden="true" className="text-cyan-200">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};
