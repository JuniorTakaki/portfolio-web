const Cardfront = () =>{
    return(
    <div className="h-screen flex items-center justify-center py-28 px-2">
        <div className="max-w-2xl  space-y-8">
          <h1 className="text-lg h-auto sm:text-2xl font-semibold dark:text-purple-700  not-dark:text-white transform transition-transform duration-300 hover:scale-105">
          Technical Support
          </h1>
        <div className="text-4xl  sm:text-6xl font-semibold ">
          <blockquote className=" font-semibold italic dark:text-white not-dark:text-black ">Armando
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-700">
                <span className="relative dark:text-gray-950 not-dark:text-white hover:scale-110 transform transition-transform duration-300"> Setsuo </span>
              </span> 
          </blockquote>
              <span className="relative inline-block mt-4 group w-fit">
                <span className="relative z-10 px-2 animator-text flex">
                  <span className="text-gray-500 text-2xl md:text-3xl">+</span>
                  <span className="dark:text-white not-dark:text-black ml-2 text-2xl md:text-3xl">IT Infrastructure</span>
                </span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 animate-underline pointer-events-none"></span>
              </span>
                <p className="text-lg md:text-xl dark:text-gray-300 not-dark:text-black italic mt-6">
                  “Everything to a purpose, profissionally & corporately.”
                </p>
          </div>
        </div>
    </div>
    );
}

export default Cardfront;