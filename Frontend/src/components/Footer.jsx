import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = '+27672213523';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello!%20I%20would%20like%20to%20get%20a%20quote.`;

  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-blue-600 text-white py-10 relative">
      <div className="container mx-auto px-4">
        {/* Top Section: Links and Information */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-6">
          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink to="home" smooth={true} duration={500} className="text-blue-200 hover:text-white transition cursor-pointer">Home</ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={500} className="text-blue-200 hover:text-white transition cursor-pointer">About Us</ScrollLink>
              </li>
              <li>
                <ScrollLink to="services" smooth={true} duration={500} className="text-blue-200 hover:text-white transition cursor-pointer">Services</ScrollLink>
              </li>
              <li>
                <ScrollLink to="FAQ" smooth={true} duration={500} className="text-blue-200 hover:text-white transition cursor-pointer">FAQ</ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500} className="text-blue-200 hover:text-white transition cursor-pointer">Contact Us</ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <p className="text-blue-200">
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+27821234567" className="text-white hover:underline">+27 67 221 3523</a>
            </p>
            <p className="text-blue-200">
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:info@batterypower.co.za" className="text-white hover:underline">info@dialabattery.co.za</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572467019350" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-blue-500 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} DialABattery. All rights reserved.</p>
          <p>Designed by <a href="https://ninjatechdesign.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Ninja Tech Design Team</a>, Cape Town, South Africa.</p>
        </div>
      </div>

      {/* WhatsApp Floating Chat Button */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 flex items-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
        <FaWhatsapp className="h-6 w-6" />
        {showMessage && <span className="animate-pulse">Get a Quote</span>}
      </a>
    </footer>
  );
};

export default Footer;