const SummaryDevOps = ({ reverse = false }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <div
        className={`flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''
          } items-center gap-4`}
      >
        {/* Imagem ilustrativa */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/img/devpro.svg"
            alt="Developer Illustration"
            className="max-w-xs sm:max-w-sm md:max-w-md h-auto drop-shadow-lg drop-shadow-purple-700"
          />
        </div>

        {/* Bloco de texto */}
        <div className="w-full md:w-1/2 space-y-5 text-gray-200 font-semibold">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center md:text-left bg-gradient-to-r from-purple-700 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            About
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
            Currently in the
            <span className="bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-300 bg-clip-text text-transparent"> 2nd semester of a Software Engineering degree
            </span>, building a solid foundation in software development and infrastructure.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
            Actively studying
            <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text text-transparent"> Ansible for infrastructure automation
            </span>, while gaining proficiency in Linux as a primary environment for development and scripting.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left"> Familiar with
            <span className="bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-300 bg-clip-text text-transparent"> Windows Server basics
            </span>, and currently preparing to expand skills into containerization and CI/CD tools such as
            <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text text-transparent"> Docker, Kubernetes, and GitHub Actions
            </span>.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left"> Strong interest in
            <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text text-transparent"> DevOps and Cloud Engineering
            </span>, with a strategic learning path focused on automation, system provisioning, and scalable deployments.
          </p>

        </div>
      </div>
    </section>
  );
};

export default SummaryDevOps;
