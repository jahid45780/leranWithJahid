const CardSlider = () => {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        {/* Slider Container */}
        <div className="relative w-full max-w-6xl px-4">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {/* Card 1 */}
            <div className="group snap-center bg-gray-800 p-5 w-[90%] sm:w-72 md:w-80 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-transform duration-300">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Travel Tourism"
                className="rounded-lg w-full"
              />
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-white">
                Travel Tourism
              </h3>
              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                Developed Rest API backend with Express and MongoDB for service
                technology.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-600 text-xs text-white rounded">
                  React
                </span>
                <span className="px-3 py-1 bg-red-500 text-xs text-white rounded">
                  Express
                </span>
                <span className="px-3 py-1 bg-green-500 text-xs text-white rounded">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-yellow-500 text-xs text-white rounded">
                  Firebase
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  Live
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  Code
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  Server
                </a>
              </div>
            </div>
  
            {/* Additional Cards (Card 2, Card 3) */}
            <div className="group snap-center bg-gray-800 p-5 w-[90%] sm:w-72 md:w-80 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-transform duration-300">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Organic Food"
                className="rounded-lg w-full"
              />
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-white">
                Organic Food
              </h3>
              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                Developed Rest API backend with Express and MongoDB for service
                technology.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-600 text-xs text-white rounded">
                  React
                </span>
                <span className="px-3 py-1 bg-red-500 text-xs text-white rounded">
                  Express
                </span>
                <span className="px-3 py-1 bg-green-500 text-xs text-white rounded">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-yellow-500 text-xs text-white rounded">
                  Firebase
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  Live
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  Code
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  Server
                </a>
              </div>
            </div>
  
            {/* Repeat structure for Card 3 */}
            <div className="group snap-center bg-gray-800 p-5 w-[90%] sm:w-72 md:w-80 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-transform duration-300">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Jewellery Shop"
                className="rounded-lg w-full"
              />
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-white">
                Jewellery Shop
              </h3>
              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                Developed Rest API backend with Express and MongoDB for service
                technology.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-600 text-xs text-white rounded">
                  React
                </span>
                <span className="px-3 py-1 bg-red-500 text-xs text-white rounded">
                  Express
                </span>
                <span className="px-3 py-1 bg-green-500 text-xs text-white rounded">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-yellow-500 text-xs text-white rounded">
                  Firebase
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  Live
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  Code
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  Server
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardSlider;
  