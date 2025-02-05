import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        {/* <title>About Us - DialABattery | Reliable Automotive Battery Solutions in Cape Town</title> */}
        <meta
          name="description"
          content="DialABattery offers reliable automotive battery solutions in Cape Town. We specialize in battery testing, installation, emergency roadside assistance, and eco-friendly recycling services. BBBEE compliant and trusted by thousands."
        />
        <meta
          name="keywords"
          content="automotive batteries, car batteries, battery testing, battery installation, emergency battery assistance, BBBEE, battery recycling"
        />
        <meta
          property="og:title"
          content="About Us - DialABattery | Automotive Battery Solutions"
        />
        <meta
          property="og:description"
          content="DialABattery is committed to providing reliable and efficient automotive battery solutions, with a focus on customer satisfaction and quality."
        />
        <meta property="og:image" content="/images/car battery.webp" />
        <meta property="og:url" content="https://www.batterypower.co.za/about" />
        <meta
          name="twitter:title"
          content="About Us - DialABattery | Automotive Battery Solutions"
        />
        <meta
          name="twitter:description"
          content="DialABattery provides reliable automotive battery solutions in South Africa, including battery testing, installation, and emergency assistance."
        />
        <meta name="twitter:image" content="/images/car battery.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Preload Hero Image */}
        <link rel="preload" as="image" href="/images/car battery.webp" type="image/webp" />
      </Helmet>

      <main className="bg-[#f5f5f5] py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12">
          {/* Left Column - Content */}
          <div id="about" className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              About <span className="text-blue-600">Us</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Powered by Trust, <span className="text-blue-600">Driven by Excellence</span>
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              DialABattery is your trusted partner for reliable automotive battery solutions in South Africa. We’re committed to delivering top-quality products and services, ensuring every drive is powered with confidence.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h11M9 21V3M19 10l-5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                    Comprehensive Solutions
                  </h4>
                  <p className="text-gray-600">
                    From battery testing and installations to emergency assistance, we offer a complete range of automotive battery services.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-yellow-500 text-white p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 15.25l-3.5-3.5m0 0l3.5-3.5m-3.5 3.5H21"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                    Eco-Friendly Practices
                  </h4>
                  <p className="text-gray-600">
                    Sustainability matters to us. Our battery recycling program reduces waste and promotes environmental care.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-500 text-white p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v8m4-4H8"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                    Trusted & Insured
                  </h4>
                  <p className="text-gray-600">
                    Your peace of mind is our priority. All services are backed by public liability insurance.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 relative">
            <img
              src="/images/car battery.webp"
              alt="Reliable car battery solutions in Cape Town"
              width="800"
              height="450"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
            {/* Display "Trusted by Thousands" in the corner */}
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md text-sm hidden lg:block">
              Trusted by Thousands
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
