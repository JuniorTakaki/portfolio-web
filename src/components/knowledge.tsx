import { useLanguage } from '../context/LanguageContext';

const Knowledge = ({ reverse = false }) => {
    const { language, t } = useLanguage();
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div
                className={`flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-4`}>
                <div className="flex w-full justify-center md:w-1/2">
                    <div className="relative w-full max-w-md overflow-hidden border border-sky-300/30 bg-[#0d0a14] p-2">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85"
                            alt={language === 'pt-BR' ? 'Infraestrutura de cloud e conectividade digital' : 'Cloud infrastructure and digital connectivity'}
                            className="h-64 w-full object-cover opacity-85 transition-transform duration-700 hover:scale-105 sm:h-80"
                            loading="lazy"
                        />
                        <span className="absolute bottom-5 left-5 border border-sky-300/40 bg-black/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-sky-100">
                            cloud / automation / 02
                        </span>
                    </div>
                </div>

                <div className="w-full space-y-5 font-semibold text-gray-200 md:w-1/2">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-white md:text-left">
                        {t('technicalSkills')}
                    </h2>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        {language === 'pt-BR' ? 'Especialização em arquitetura de infraestrutura e Cloud com' : 'Specialization in infrastructure architecture and Cloud with'}
                        <span className="text-cyan-300"> Azure</span>
                        {language === 'pt-BR' ? ', além de sólida bagagem e familiaridade com' : ', alongside solid background and familiarity with'}
                        <span className="text-cyan-300"> AWS</span>.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        {language === 'pt-BR' ? 'Domínio na administração de ambientes' : 'Mastery in administration of'}
                        <span className="text-cyan-300"> Linux e Windows Server</span>
                        {language === 'pt-BR' ? ', estruturação de redes corporativas, firewalls e virtualização avançada.' : ', corporate networking, firewalls, and advanced virtualization.'}
                    </p>
                    
                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        {language === 'pt-BR' ? 'Foco em automação de processos com' : 'Focus on process automation with'}
                        <span className="text-cyan-300"> Python</span>
                        {language === 'pt-BR' ? ', monitoramento de performance com' : ', performance monitoring with'}
                        <span className="text-cyan-300"> Grafana e Zabbix</span>
                        {language === 'pt-BR' ? ', e conteinerização via Docker.' : ', and containerization via Docker.'}
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Knowledge;