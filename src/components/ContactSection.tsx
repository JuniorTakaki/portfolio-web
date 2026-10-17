import 'remixicon/fonts/remixicon.css';
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section-rule px-4 py-16 sm:px-6 sm:py-20 lg:pr-24">
      <div className="mx-auto w-full max-w-7xl lg:w-11/12">
        <div className="border border-sky-300/20 bg-[#071c26] p-5 sm:p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">
                {t('contactLabel')} / 04
              </p>
              <h2 className="border-l-2 border-cyan-400 pl-3 font-mono text-2xl font-bold text-white sm:text-4xl">
                {t('contactTitle')}
              </h2>
              <p className="mt-3 text-sm leading-6 text-sky-100/60">{t('contactDescription')}</p>
            </div>
            <a
              href="mailto:juniortakaki10@gmail.com?subject=Oportunidade%20profissional"
              className="inline-flex items-center justify-center gap-2 border border-cyan-300/40 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100 transition-colors hover:border-cyan-200 hover:bg-cyan-300/20"
            >
              <Mail size={16} aria-hidden="true" />
              {t('contactMe')}
            </a>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/junior-takaki/', icon: Linkedin },
              { label: 'GitHub', href: 'https://github.com/JuniorTakaki', icon: Github },
              { label: 'WhatsApp', href: 'https://wa.me/+5511951068980', icon: MessageCircle },
              { label: 'Email', href: 'mailto:juniortakaki10@gmail.com', icon: Mail },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-between border border-white/10 px-3 py-3 text-sm text-sky-100/75 transition-colors hover:border-cyan-300/50 hover:text-cyan-200"
              >
                <span className="flex items-center gap-2">
                  <Icon size={17} aria-hidden="true" />
                  {label}
                </span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
