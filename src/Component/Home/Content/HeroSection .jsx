
const HeroSection = () => {
  return (
    <div className="bg-green-100 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-4">
          <h4 className="text-green-600 font-medium">START YOUR fAVOURITE COURSE</h4>
          <h1 className="text-4xl font-bold text-gray-900">
            NOW Learning From Anywhere, <br /> AND BUILD YOUR{" "}
            <span className="text-green-500 underline">bright career</span>.
          </h1>
          <p className="text-gray-500">
            It has survived not only five centuries but also the leap into electronic typesetting.
          </p>
          {/* Button */}
          <button className="bg-green-600 flex text-white py-2 px-4 rounded-full hover:bg-green-700 sm:flex sm:justify-center lg:justify-start">
  Start A Course
  </button>

        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end items-center mt-8 lg:mt-0 relative">
          {/* Person Image */}
          <div className="relative">
            {/* Replace this with the actual image */}
            <img
              src="https://i.ibb.co.com/4NVb9sW/6867-removebg-preview.png"
              alt="Person"
              className="w-100"
            />
          </div>

          {/* Course Counter */}
          <div className="absolute top-20 right-4 bg-green-600 text-white text-center p-6 rounded-full mr-8">
            <h3 className="text-3xl font-bold">1,235</h3>
            <p className="text-lg">courses</p>
          </div>

          {/* Rating Section */}
          <div className="absolute top-4 right-0 bg-white shadow-lg p-4 rounded-full text-center w-28">
            <h3 className="text-2xl font-bold text-green-600">4.8</h3>
            <p className="text-gray-500">Rating (86K)</p>
            <div className="text-yellow-400">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
