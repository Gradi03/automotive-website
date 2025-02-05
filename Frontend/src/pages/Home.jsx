import React from "react";
import { Helmet } from "react-helmet";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* <title>Home - DialABattery | Your Trusted Automotive Battery Provider</title> */}
        <meta
          name="description"
          content="DialABattery offers reliable, affordable, and long-lasting car batteries. From everyday commutes to heavy-duty demands, we power your journey."
        />
        <meta
          name="keywords"
          content="automotive batteries, car batteries, reliable batteries, affordable batteries, long-lasting batteries, battery supplier, battery power"
        />
        <meta
          property="og:title"
          content="Home - DialABattery | Your Trusted Automotive Battery Provider"
        />
        <meta
          property="og:description"
          content="DialABattery provides high-quality automotive batteries for all types of vehicles, ensuring reliability and power for every drive."
        />
        <meta property="og:image" content="/images/car engine.webp" />
        <meta property="og:url" content="https://www.dialabattery.co.za" />
        <meta
          name="twitter:title"
          content="Home - DialABattery | Your Trusted Automotive Battery Provider"
        />
        <meta
          name="twitter:description"
          content="At DialABattery, we provide affordable, durable, and reliable car batteries for all your automotive needs."
        />
        <meta name="twitter:image" content="/images/car engine.webp" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Preload Hero Image for Faster Load */}
        <link rel="preload" as="image" href="/images/car engine.webp" type="image/webp" />
      </Helmet>

      <header id="home" className="bg-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12">
          {/* Left Column - Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl font-extrabold text-blue-600 leading-tight">
              Power Your Drive <span className="text-yellow-500">Every Day</span>
            </h1>
            <p className="text-lg text-gray-700">
              Reliable. Affordable. Built to last. Dial a Battery delivers the
              ultimate performance for every type of vehicle. Don't let your
              journey be stopped by a weak battery. Choose the battery trusted by thousands.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition">
                <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">
                  Get a Quote
                </ScrollLink>
              </button>
              <button className="bg-gray-200 text-blue-600 px-6 py-3 rounded-md shadow-lg hover:bg-gray-300 transition">
                <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
                  Learn More
                </ScrollLink>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 relative mt-6 lg:mt-0">
            <img
              srcSet="/images/car engine.webp 800w, /images/car engine-large.webp 1200w"
              sizes="(max-width: 600px) 800px, 1200px"
              src="/images/car engine.webp"
              alt="Car Engine Hero"
              width="800"
              height="450"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
