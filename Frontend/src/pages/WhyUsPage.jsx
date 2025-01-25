import React from 'react';
import { Helmet } from 'react-helmet';
import { FaBatteryFull, FaUsers, FaDollarSign, FaLeaf, FaHandshake, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const WhyUsPage = () => {
  return (
    <>
      <Helmet>
        <title>Why Us - DialABattery | Trusted Power Solutions</title>
        <meta name="description" content="DialABattery is your trusted partner for high-quality automotive batteries, offering expert advice, affordable prices, and eco-friendly practices." />
        <meta name="keywords" content="trusted power solutions, automotive batteries, expert team, eco-friendly practices, affordable pricing, BBBEE compliance" />
        <meta property="og:title" content="Why Us - DialABattery | Trusted Power Solutions" />
        <meta property="og:description" content="Discover why BatteryPower is the best choice for your automotive power needs. Top-quality products, expert team, and affordable pricing." />
        <meta property="og:image" content="/images/car-engine.webp" />
        <meta property="og:url" content="https://www.batterypower.co.za/why-us" />
        <meta name="twitter:title" content="Why Us - DialABattery | Trusted Power Solutions" />
        <meta name="twitter:description" content="DialABattery offers high-quality, affordable automotive batteries with an expert team and eco-friendly practices. Learn more about why we’re your trusted partner." />
        <meta name="twitter:image" content="/images/car-engine.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div id="why-us" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Why Choose <span className="text-blue-500">DialABattery</span>?</h2>
          <p className="text-center text-lg text-gray-600 mb-12">Our commitment to quality, expertise, and sustainability sets us apart as your trusted partner for automotive power solutions.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <FaBatteryFull className="text-4xl text-blue-500 mb-3" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Top-Quality Products</h3>
              <p className="text-gray-600 text-sm">Batteries designed for peak performance, ensuring long-lasting power and reliability.</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <FaUsers className="text-4xl text-blue-500 mb-3" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Our knowledgeable professionals are ready to assist with all your automotive power needs.</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <FaDollarSign className="text-4xl text-blue-500 mb-3" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600 text-sm">Premium solutions that don’t break the bank—quality power at an affordable price.</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <FaLeaf className="text-4xl text-blue-500 mb-3" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco-Friendly Practices</h3>
              <p className="text-gray-600 text-sm">We promote sustainability by offering safe and eco-friendly battery recycling services.</p>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center text-center bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <FaHandshake className="text-4xl text-blue-500 mb-3" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">BBBEE Compliance</h3>
              <p className="text-gray-600 text-sm">Supporting economic empowerment and inclusivity in South Africa through BBBEE compliance.</p>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col items-center text-center bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <FaShieldAlt className="text-4xl text-blue-500 mb-3" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Public Liability Insurance</h3>
              <p className="text-gray-600 text-sm">We prioritize your safety with comprehensive public liability insurance for peace of mind.</p>
            </div>

            {/* Card 7 */}
            <div className="flex flex-col items-center text-center bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <FaHeadset className="text-4xl text-blue-500 mb-3" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Our dedicated team is available 24/7 to assist you with any queries or emergencies, ensuring uninterrupted service whenever you need it.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsPage;
