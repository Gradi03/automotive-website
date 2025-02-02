import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-2"> {/* Reduced py-4 to py-2 */}
        {/* Logo */}
        <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
          <img src="/images/dialabatterylogo.webp" alt="DialABattery Logo" className="h-10 w-auto" /> {/* Reduced h-12 to h-10 */}
        </ScrollLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-base font-medium"> {/* Reduced space-x-8 to space-x-6 */}
          <ScrollLink to="home" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer">
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer">
            About
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer">
            Services
          </ScrollLink>
          <ScrollLink to="why-us" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer">
            Why Us
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer">
            Contact Us
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Reduced h-8 to h-6 */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <div className="flex flex-col items-center space-y-3 py-2 text-base"> {/* Reduced py-4 to py-2 */}
            <ScrollLink to="home" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer" onClick={() => setIsOpen(false)}>
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer" onClick={() => setIsOpen(false)}>
              About
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer" onClick={() => setIsOpen(false)}>
              Services
            </ScrollLink>
            <ScrollLink to="why-us" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer" onClick={() => setIsOpen(false)}>
              Why Us
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer" onClick={() => setIsOpen(false)}>
              Contact Us
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
