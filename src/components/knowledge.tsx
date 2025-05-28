const Knowledge = ({ reverse = false }) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 lg:px-15 py-12">
            <div
                className={`flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-4`}>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/img/experiencepic.svg"
                        alt="Developer Illustration"
                        className=" max-w-xs sm:max-w-sm md:max-w-md h-auto drop-shadow-lg drop-shadow-indigo-600"
                    />
                </div>

                <div className="w-full md:w-1/2 space-y-5 text-gray-200 font-semibold">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center md:text-left bg-gradient-to-r from-purple-700 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                        Experience
                    </h2>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        Developed a
                        <span className="bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-300 bg-clip-text text-transparent"> Bash automation script integrated with Winget
                        </span> to streamline post-installation setups via WDS and MDT, optimizing deployments across multiple labs.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        Automated the installation of
                        <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text text-transparent"> essential software packages
                        </span> including Microsoft Office, custom lab tools, browsers, and maintenance utilities, all silently provisioned.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                        Customized
                        <span className="bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-300 bg-clip-text text-transparent"> Windows 10 and Windows 11 ISO images
                        </span> using <span className="text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600 bg-clip-text">unattend.xml</span> files and task sequences, ensuring consistent, repeatable and optimized OS deployments via MDT.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Knowledge;
