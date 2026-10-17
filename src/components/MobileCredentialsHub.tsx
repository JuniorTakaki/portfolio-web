import { useState } from 'react';
import { ArrowLeft, ArrowRight, Award, ExternalLink, FlaskConical } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { AppliedSkill } from './AppliedSkills';
import type { CertificateItem } from './CertificateGallery';

interface MobileCredentialsHubProps {
  certificates: CertificateItem[];
  appliedSkills: AppliedSkill[];
}

type CredentialView = 'overview' | 'certificates' | 'applied-skills';

export const MobileCredentialsHub = ({ certificates, appliedSkills }: MobileCredentialsHubProps) => {
  const { t } = useLanguage();
  const [view, setView] = useState<CredentialView>('overview');

  if (view !== 'overview') {
    const isCertificatesView = view === 'certificates';

    return (
      <section id="credentials" className="section-rule scroll-mt-20 px-4 py-14 md:hidden">
        <div className="mx-auto max-w-lg">
          <button
            type="button"
            onClick={() => setView('overview')}
            className="mb-6 inline-flex items-center gap-2 border border-sky-300/25 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-sky-100/70 transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            {t('back')}
          </button>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
            credentials / {isCertificatesView ? '01' : '02'}
          </p>
          <h2 className="border-l-2 border-cyan-400 pl-3 text-2xl font-bold text-white">
            {isCertificatesView ? t('certificates') : t('appliedSkills')}
          </h2>

          <div className="mt-6 space-y-3">
            {isCertificatesView
              ? certificates.map((item, index) => (
                <article key={item.title} className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 border border-sky-300/25 bg-[#071c26] p-3">
                  {item.certificateImage ? (
                    <img
                      src={item.certificateImage}
                      alt={`${t('certificateProof')} — ${item.title}`}
                      className="h-24 w-[5.5rem] border border-white/10 bg-black/30 object-contain"
                    />
                  ) : (
                    <div className="flex h-24 w-[5.5rem] items-center justify-center border border-white/10 bg-black/30 px-1 text-center">
                      <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-sky-100/45">
                        {t('imageUnavailable')}
                      </span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[10px] text-cyan-300/70">0{index + 1}</span>
                      <h3 className="text-sm font-bold leading-5 text-white">{item.title}</h3>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-sky-100/55">{item.description}</p>
                    <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-200/60">
                      {t('certificateProof')}
                    </span>
                  </div>
                </article>
              ))
              : appliedSkills.map((item, index) => (
                <article key={item.title} className="grid grid-cols-[4rem_minmax(0,1fr)] gap-2.5 border border-sky-300/25 bg-[#071c26] p-3">
                  <div className="flex min-h-24 w-16 flex-col items-center justify-center gap-1.5 border border-white/10 bg-black/30 p-1.5 text-center">
                    {item.providerIcon ? (
                      <img
                        src={item.providerIcon}
                        alt={`${item.providerName} ${t('providerLogo')}`}
                        className="h-10 w-10 rounded-full border border-sky-300/30 object-cover object-[50%_57%]"
                      />
                    ) : (
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/30 font-mono text-xs font-bold text-cyan-200">
                        {item.providerInitials}
                      </span>
                    )}
                    <span className="line-clamp-2 max-w-full font-mono text-[7px] uppercase leading-3 tracking-[0.06em] text-sky-100/45">
                      {item.providerName}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono text-[10px] text-cyan-300/70">0{index + 1}</span>
                      <span className="max-w-[75%] text-right font-mono text-[8px] uppercase leading-3 tracking-[0.08em] text-sky-100/45">{item.category}</span>
                    </div>
                    <h3 className="mt-2 line-clamp-3 text-[13px] font-bold leading-4 text-white">{item.title}</h3>
                    <p className="mt-2 line-clamp-3 text-[11px] leading-4 text-sky-100/60">{item.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.technologies.map((technology) => (
                        <span key={technology} className="border border-white/10 px-1.5 py-1 font-mono text-[8px] leading-3 text-sky-100/55">
                          {technology}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-cyan-300/40 px-2.5 py-2 text-[11px] font-semibold text-cyan-100"
                    >
                      {t('viewCredential')}
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="credentials"
      className="section-rule scroll-mt-20 px-4 py-14 md:hidden"
      aria-labelledby="mobile-credentials-title"
    >
      <div className="mx-auto max-w-lg">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
          credentials / 01
        </p>
        <h2 id="mobile-credentials-title" className="border-l-2 border-cyan-400 pl-3 text-2xl font-bold text-white">
          {t('credentials')}
        </h2>
        <p className="mt-3 text-sm leading-6 text-sky-100/60">
          {t('credentialsDescription')}
        </p>

        <div className="mt-6 grid gap-3">
          <a
            href="#credentials"
            onClick={(event) => {
              event.preventDefault();
              setView('certificates');
            }}
            className="group flex items-center gap-4 border border-sky-300/25 bg-[#071c26] p-4 transition-colors hover:border-cyan-300/60"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              <Award size={21} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-base font-bold text-white">{t('certificates')}</span>
              <span className="mt-1 block text-xs leading-5 text-sky-100/55">{t('certificatesShort')}</span>
            </span>
            <ArrowRight size={18} className="shrink-0 text-cyan-200 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>

          <a
            href="#credentials"
            onClick={(event) => {
              event.preventDefault();
              setView('applied-skills');
            }}
            className="group flex items-center gap-4 border border-sky-300/25 bg-[#071c26] p-4 transition-colors hover:border-cyan-300/60"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              <FlaskConical size={21} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-base font-bold text-white">{t('appliedSkills')}</span>
              <span className="mt-1 block text-xs leading-5 text-sky-100/55">{t('appliedSkillsShort')}</span>
            </span>
            <ArrowRight size={18} className="shrink-0 text-cyan-200 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
