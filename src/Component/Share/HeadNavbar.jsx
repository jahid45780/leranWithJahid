import { FaFacebookF, FaTwitter, FaSkype, FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
const HeadNavbar = () => {
    return (
        <div>
             <div className="bg-gray-600 text-white py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2 text-sm">
        {/* Left Section */}
        <div className="flex items-center">
          <span className="mr-2">All courses 28% off for</span>
          <a href="#" className="text-green-500 hover:underline">
            Liberian people’s.
          </a>
        </div>

        {/* Center Section (Contact Information) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center gap-2">
          <FaPhoneAlt className=" text-md" />
            <span>(970) 262-1413</span>
          </div>
          <div className="flex items-center gap-2">
          <MdAttachEmail className=" text-md" />
            <span>Jahid@gmail.com</span>
          </div>
        </div>

        {/* Right Section (Social Media Icons) */}
        <div className="flex items-center space-x-3">
          <a href="#" className="hover:text-green-500">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-green-500">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-green-500">
            <FaSkype />
          </a>
        
        </div>
      </div>
    </div>
        </div>
    );
};

export default HeadNavbar;