import { useLanguage } from '../context/LanguageContext';

const Introduction = ({ reverse = false }) => {
    const { language, t } = useLanguage();
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div
                className={`flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-4`}>
                <div className="flex w-full justify-center md:w-1/2">
                    <div className="relative w-full max-w-md overflow-hidden border border-cyan-300/30 bg-[#0d0a14] p-2">
                        <img
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85"
                            alt={language === 'pt-BR' ? 'Servidores em um data center' : 'Servers inside a data center'}
                            className="h-64 w-full object-cover opacity-85 transition-transform duration-700 hover:scale-105 sm:h-80"
                            loading="lazy"
                        />
                        <span className="absolute bottom-5 left-5 border border-cyan-300/40 bg-black/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200">
                            infrastructure / 01
                        </span>
                    </div>
                </div>

                <div className="w-full space-y-5 font-semibold text-gray-200 md:w-1/2">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-white md:text-left">
                        {t('aboutTitle')}
                    </h2>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        {language === 'pt-BR' ? 'Cursando' : 'Currently pursuing'}
                        <span className="text-cyan-300"> Engenharia de Software</span>
                        {language === 'pt-BR' ? ', com formação em Análise de Sistemas e pós-graduação em ' : ', with a degree in Systems Analysis and a postgraduate degree in '}
                        <span className="text-cyan-300"> Gestão de TI</span>.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        {language === 'pt-BR' ? 'Meu foco é atuar em' : 'My focus is on'}
                        <span className="text-cyan-300"> DevSecOps</span>
                        {language === 'pt-BR' ? ', unindo desenvolvimento em' : ', combining development with'}
                        <span className="text-cyan-300"> Python</span>
                        {language === 'pt-BR' ? ' e automação de segurança para blindar ambientes.' : ' and security automation to safeguard environments.'}
                    </p>
                    
                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        {language === 'pt-BR' ? 'Possuo sólida base em' : 'I have a solid foundation in'}
                        <span className="text-cyan-300"> redes, firewalls, Linux e Azure</span>
                        {language === 'pt-BR' ? ', além de monitoramento com Grafana e Zabbix.' : ', alongside monitoring with Grafana and Zabbix.'}
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Introduction;