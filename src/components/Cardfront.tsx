const Cardfront = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:flex-row sm:items-center sm:justify-center sm:px-2 sm:h-screen">
      <div className="w-full max-w-2xl space-y-10 text-center sm:text-left">
        <div className="mb-6 sm:hidden mt-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="/img/profile.jpg"
                alt="Perfil"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold dark:text-purple-700 not-dark:text-white transform transition-transform duration-300 hover:scale-105">
          Technical Support
        </h1>
        <div className="text-4xl sm:text-6xl font-semibold space-y-6">
          <blockquote className="italic dark:text-white not-dark:text-black leading-tight">
            Armando{" "}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-700">
              <span className="relative dark:text-gray-950 not-dark:text-white hover:scale-110 transform transition-transform duration-300">
                Setsuo
              </span>
            </span>
          </blockquote>
          <span className="relative inline-block mt-2 group w-fit mx-auto sm:mx-0">
            <span className="relative z-10 px-2 animator-text flex justify-center sm:justify-start">
              <span className="text-gray-500 text-2xl md:text-3xl">+</span>
              <span className="dark:text-white not-dark:text-black ml-2 text-2xl md:text-3xl">
                IT Infrastructure
              </span>
            </span>
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 animate-underline pointer-events-none"></span>
          </span>
          <p className="text-base sm:text-xl italic mt-4 px-2 dark:text-gray-300 not-dark:text-black">
            “Everything to a purpose, professionally & corporately.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardfront;
