const Introduction = ({ reverse = false }) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 lg:px-15 py-12">
            <div
                className={`flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-4`}>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/img/devpro.svg"
                        alt="Ilustração de um profissional de tecnologia"
                        className="max-w-xs sm:max-w-sm md:max-w-md h-auto drop-shadow-lg drop-shadow-indigo-600"
                    />
                </div>

                <div className="w-full md:w-1/2 space-y-5 text-gray-200 font-semibold">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center md:text-left bg-gradient-to-r from-purple-700 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                        Sobre
                    </h2>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        Formado em Análise de Sistemas, e cursando
                        <span className="bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-300 bg-clip-text text-transparent"> Engenharia de Software
                        </span> e pós-graduação em 
                        <span className="text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text"> Gestão de TI</span>
                        , tenho uma visão que une arquitetura técnica e estratégia.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        Minha carreira começou no suporte N1, evoluindo em 7 meses para a automação de deployments com
                        <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text text-transparent"> WDS e MDT</span>
                        . Essa base me impulsionou para o universo DevOps, explorando 
                        <span className="text-transparent bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-300 bg-clip-text"> Docker e pipelines de CI/CD</span>.
                    </p>
                    
                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        Hoje, meu foco é consolidar minha carreira em
                        <span className="bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-300 bg-clip-text text-transparent"> DevOps e Cloud
                        </span>, aprofundando em 
                        <span className="text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text"> Infraestrutura como Código (IaC) </span>
                        para criar soluções eficientes e escaláveis.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Introduction;
