

const Footer = () => {
    return (
        <footer className=" bg-gradient-to-r from-blue-900 via-gray-900 to-black  text-white py-8  border-t border-gray-700">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & About */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">GALAXY SCM</h2>
          <p className="text-sm text-gray-400 mt-2">Optimizing Supply Chains for Efficiency</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
          <a href="#" className="hover:text-gray-300 transition">Logistics</a>
          <a href="#" className="hover:text-gray-300 transition">Procurement</a>
          <a href="#" className="hover:text-gray-300 transition">Inventory Management</a>
          <a href="#" className="hover:text-gray-300 transition">Supply Chain Optimization</a>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} SCM Solutions. All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;