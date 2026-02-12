import AnimatedSubtitle from './AnimatedSubtitle';

const Cardfront = () => {
  return (
    <div className="flex items-center justify-center py-20 px-4 sm:px-8 lg:px-24">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full px-4 sm:px-8 lg:px-2">

        {/* Avatar - somente mobile */}
        <div className="sm:hidden flex-shrink-0">
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="/img/profile.jpg"
                alt="Perfil"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1 text-center sm:text-left">
          {/* Cargo */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold dark:text-purple-700 text-white transform transition-transform duration-300 hover:scale-105">
            Cloud & DevOps Engineer
          </h1>

          {/* Nome + Setsuo */}
          <div className="text-5xl sm:text-6xl lg:text-7xl font-semibold space-y-6 mt-4">
            <blockquote className="italic text-white leading-tight">
              Armando{" "}
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-700">
                <span className="relative text-white hover:scale-110 transform transition-transform duration-300">
                  Setsuo
                </span>
              </span>
            </blockquote>

            {/* Área */}
            <AnimatedSubtitle />

            {/* Frase */}
            <p className="text-base sm:text-xl lg:text-2xl italic mt-4 px-2 text-gray-300 ">
              “Everything to a purpose, professionally & corporately.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardfront;
