import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-200">Travel Explorer</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Your trusted travel partner for unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-200">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {["About Us", "Services", "Destinations", "Contact"].map((link, index) => (
              <li key={index} className="group">
                <a href={`/${link.toLowerCase().replace(/\s+/g, "")}`} 
                   className="relative text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out">
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-gray-200">Follow Us</h3>
          <div className="mt-4 flex justify-center md:justify-start space-x-6">
            {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
              <a key={index} href="#" 
                 className="text-gray-400 text-2xl transition-transform duration-300 ease-in-out hover:text-yellow-500 hover:scale-110">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 mx-6"></div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
