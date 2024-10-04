
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-6 shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-0 perspective-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with 3D Hover Animation */}
        <Link
          to="/"
          className="text-white text-3xl font-bold hover:text-yellow-400 transform transition-transform hover:animate-logo3d"
        >
         <p>
         Learn <sub className=' text-sm text-red-600' >dev</sub>
         </p>
        </Link>

        {/* Desktop Links with Animation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg transform hover:animate-link3d hover:text-yellow-400 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg transform hover:animate-link3d hover:text-yellow-400 transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white text-lg transform hover:animate-link3d hover:text-yellow-400 transition-all duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg transform hover:animate-link3d hover:text-yellow-400 transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Sign In Button with Animation */}
        <div className="hidden md:flex">
          <Link
            to="/signin"
            className="text-white bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transform hover:translate-z-8 hover:rotate-y-6 transition-transform duration-300"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger icon with animation */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transform transition-transform duration-300 ${
                isOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Slide and Fade Animation */}
      {isOpen && (
        <div className="md:hidden animate-slideIn">
          <div className="flex flex-col space-y-4 p-4 bg-gray-800 rounded-lg animate-fadeIn">
            <Link
              to="/"
              className="text-white text-lg hover:text-yellow-400 transform hover:translate-z-6 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-lg hover:text-yellow-400 transform hover:translate-z-6 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white text-lg hover:text-yellow-400 transform hover:translate-z-6 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg hover:text-yellow-400 transform hover:translate-z-6 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/signin"
              className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transform hover:translate-z-6 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

