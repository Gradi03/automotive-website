import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section: Links and Information */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-blue-200 hover:text-white transition cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-blue-200 hover:text-white transition cursor-pointer"
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  className="text-blue-200 hover:text-white transition cursor-pointer"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-blue-200 hover:text-white transition cursor-pointer"
                >
                  Contact Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="FAQ"
                  smooth={true}
                  duration={500}
                  className="text-blue-200 hover:text-white transition cursor-pointer"
                >
                  FAQ
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <p className="text-blue-200">
              <span className="font-semibold">Address:</span> 123 Battery St,
              Cape Town, South Africa
            </p>
            <p className="text-blue-200">
              <span className="font-semibold">Phone:</span>{' '}
              <a
                href="tel:+27821234567"
                className="text-white hover:underline"
              >
                +27 00 000 0000
              </a>
            </p>
            <p className="text-blue-200">
              <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:info@batterypower.co.za"
                className="text-white hover:underline"
              >
                info@dialabattery.co.za
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/batterypower"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.twitter.com/batterypower"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/batterypower"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-blue-500 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} DialABattery. All rights reserved.</p>
          <p>Designed by Ninja Tech Design, Cape Town, South Africa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
