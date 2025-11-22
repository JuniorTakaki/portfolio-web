const Knowledge = ({ reverse = false }) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 lg:px-15 py-12">
            <div
                className={`flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-4`}>
                <div className="w-full md:w-1-2 flex justify-center">
                    <img
                        src="/img/experiencepic.svg" // Mantenha sua imagem
                        alt="Cloud and Automation Illustration"
                        className="max-w-xs sm:max-w-sm md:max-w-md h-auto drop-shadow-lg drop-shadow-indigo-600"
                    />
                </div>

                <div className="w-full md:w-1-2 space-y-5 text-gray-200 font-semibold">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center md:text-left bg-gradient-to-r from-purple-700 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                        Habilidades Técnicas
                    </h2>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        Experiência em cloud com 
                        <span className="bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-300 bg-clip-text text-transparent"> AWS (EC2) e Azure (VMs)
                        </span>, com foco atual na certificação AZ-900 e habilidade na configuração de políticas e dispositivos via 
                        <span className="text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text"> Microsoft Intune</span>.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        Vivência em automação com
                        <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text text-transparent"> n8n e Python
                        </span>, conteinerização de aplicações com 
                        <span className="text-transparent bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-300 bg-clip-text"> Docker </span>
                        e automação de deployments on-premise com
                        <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text text-transparent"> WDS e MDT</span>.
                    </p>
                    
                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        Conhecimento em segurança com a ferramenta 
                        <span className="bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-300 bg-clip-text text-transparent"> Wazuh
                        </span>, gerenciamento de políticas com 
                        <span className="text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text"> GPO </span>
                        e base sólida em virtualização para criação de laboratórios de estudo.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Knowledge;