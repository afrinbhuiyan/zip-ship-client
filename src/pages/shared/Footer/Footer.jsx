import React from "react";
import { FaPaperPlane, FaRoute, FaClock, FaSnowflake, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import ZipShiftLogo from "../ZipShiftLogo/ZipShiftLogo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden rounded-2xl">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#CAEB66]/10 blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-[#CAEB66]/10 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#CAEB66]/10 blur-lg"></div>
      </div>
      
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center mb-12">
          <ZipShiftLogo />
          <p className="mt-4 text-center text-gray-300 max-w-2xl">
            Accelerating your world with precision logistics and unmatched speed.
          </p>
        </div>

        {/* Diagonal divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#17202c] px-4 text-[#CAEB66]">
              <FaPaperPlane className="text-2xl animate-pulse" />
            </span>
          </div>
        </div>

        {/* Content sections */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column - Services highlights */}
          <div className="lg:w-2/5">
            <h3 className="text-xl font-bold mb-6 text-[#CAEB66] flex items-center">
              <FaRoute className="mr-2" /> Our Delivery Network
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#CAEB66]">
                <div className="flex items-center mb-2">
                  <FaClock className="text-[#CAEB66] mr-2" />
                  <h4 className="font-medium">Express Delivery</h4>
                </div>
                <p className="text-sm text-gray-300">Guaranteed same-city delivery in under 90 minutes</p>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#CAEB66]">
                <div className="flex items-center mb-2">
                  <FaSnowflake className="text-[#CAEB66] mr-2" />
                  <h4 className="font-medium">Temperature Control</h4>
                </div>
                <p className="text-sm text-gray-300">Precision climate-controlled transport solutions</p>
              </div>
            </div>
          </div>

          {/* Right column - Navigation and contact */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Navigation */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#CAEB66]">Navigate</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-[#CAEB66] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#CAEB66] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-[#CAEB66] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#CAEB66] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/coverage" className="text-gray-300 hover:text-[#CAEB66] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#CAEB66] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Coverage Areas
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-[#CAEB66] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#CAEB66] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-[#CAEB66] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#CAEB66] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#CAEB66]">Connect</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MdLocationOn className="text-xl mt-1 mr-3 text-[#CAEB66] flex-shrink-0" />
                  <p className="text-gray-300">123 Delivery Lane, Logistics District, LD 10001</p>
                </div>
                <div className="flex items-center">
                  <MdPhone className="text-xl mr-3 text-[#CAEB66] flex-shrink-0" />
                  <p className="text-gray-300">+1 (555) ZIP-SHIFT</p>
                </div>
                <div className="flex items-center">
                  <MdEmail className="text-xl mr-3 text-[#CAEB66] flex-shrink-0" />
                  <p className="text-gray-300">deliver@zipshift.com</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-sm font-medium mb-3 text-[#CAEB66]">FOLLOW OUR JOURNEY</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-[#CAEB66] transition-colors">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#CAEB66] transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#CAEB66] transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#CAEB66] transition-colors">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ZipShift Logistics. Accelerating your world.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="text-gray-400 hover:text-[#CAEB66] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#CAEB66] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[#CAEB66] text-sm transition-colors">Security</a>
            <a href="#" className="text-gray-400 hover:text-[#CAEB66] text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;