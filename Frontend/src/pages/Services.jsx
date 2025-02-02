import React from 'react';
import { Helmet } from 'react-helmet';
import { FaBatteryFull, FaTools, FaCarCrash, FaRecycle } from 'react-icons/fa';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - DialABattery | Automotive Battery Solutions</title>
        <meta
          name="description"
          content="DialABattery offers a full range of automotive battery services including testing, installation, emergency assistance, and battery recycling."
        />
        <meta
          name="keywords"
          content="battery testing, battery installation, roadside assistance, battery recycling, car battery services, automotive power"
        />
        <meta
          property="og:title"
          content="Services - DialABattery | Automotive Battery Solutions"
        />
        <meta
          property="og:description"
          content="Get the best battery testing, installation, and roadside assistance from BatteryPower, ensuring your vehicle always stays powered."
        />
        <meta property="og:image" content="/images/car-engine.webp" />
        <meta
          property="og:url"
          content="https://www.DialABattery.co.za/services"
        />
        <meta
          name="twitter:title"
          content="Services - DialABattery | Automotive Battery Solutions"
        />
        <meta
          name="twitter:description"
          content="DialABattery offers top-notch battery services, from testing and installation to emergency roadside assistance and recycling."
        />
        <meta name="twitter:image" content="/images/car-engine.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            At DialABattery, we provide reliable and efficient automotive battery services tailored to keep you on the road. Here’s what we offer:
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="mb-6 text-blue-600">
                <FaBatteryFull className="text-5xl" aria-label="Battery Testing Icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                Battery Testing
              </h3>
              <p className="text-gray-600 text-center">
                Free diagnostics to identify issues before they become major problems. Drive with confidence knowing your battery is in great shape.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="mb-6 text-blue-600">
                <FaTools className="text-5xl" aria-label="Battery Installation Icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                Battery Installation
              </h3>
              <p className="text-gray-600 text-center">
                Quick and professional installation services to get you back on the road without delays. Quality and efficiency guaranteed.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="mb-6 text-blue-600">
                <FaCarCrash className="text-5xl" aria-label="Emergency Assistance Icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                Emergency Assistance
              </h3>
              <p className="text-gray-600 text-center">
                Stranded on the road? Our 24/7 roadside assistance ensures you’re never left powerless. One call, and we’ll be there to help.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="mb-6 text-blue-600">
                <FaRecycle className="text-5xl" aria-label="Battery Recycling Icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                Battery Recycling
              </h3>
              <p className="text-gray-600 text-center">
                Protect the environment with our eco-friendly battery recycling program. Dispose of old batteries safely and responsibly.
              </p>
            </div>
          </div>
          
          
        </div>
      </section>
    </>
  );
};

export default Services;
