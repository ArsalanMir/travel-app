import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md h-16 z-50">

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white tracking-wide">
          Travel<span className="text-gold">X</span>
        </Link>

        {/* Search Input */}
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search destinations..." 
            className="px-4 py-2 rounded-full bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Blog", "Contact"].map((item, index) => (
            <Link 
              key={index} 
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}  // ✅ FIXED THIS LINE
              className="text-gray-300 hover:text-gold transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact" className="bg-gold text-white px-5 py-2 rounded-md shadow-md hover:bg-yellow-400">
          Book Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
