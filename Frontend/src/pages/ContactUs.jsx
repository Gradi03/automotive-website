import React from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Sending...",
      text: "Please wait while we process your request.",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    const formData = new FormData(event.target);
    formData.append("access_key", "1c07edf0-175a-4964-9532-043712d971c6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully.",
          icon: "success",
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message || "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Unable to submit the form. Please check your internet connection and try again.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Helmet>
        {/* <title>Contact Us - DialABattery Cape Town | Automotive Battery Services</title> */}
        <meta
          name="description"
          content="Get in touch with DialABattery in Cape Town. We provide automotive battery installation, testing, and emergency assistance. Contact us for reliable services."
        />
        <meta
          name="keywords"
          content="contact DialABattery, Cape Town automotive battery, car battery services, battery testing, emergency battery assistance"
        />
        <meta
          property="og:title"
          content="Contact Us - DialABattery Cape Town"
        />
        <meta
          property="og:description"
          content="Reach out to DialABattery Cape Town for automotive battery installation, testing, and emergency services. We're here to help!"
        />
        <meta
          name="twitter:title"
          content="Contact Us - DialABattery Cape Town"
        />
        <meta
          name="twitter:description"
          content="Contact DialABattery for automotive battery services in Cape Town. Get reliable battery installation, testing, and emergency support."
        />
      </Helmet>

      <main id="contact" className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-500">Contact Us</span> - DialABattery Cape Town
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            We're here to power your journey. Reach out to us today!
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              aria-label="Full Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              aria-label="Email Address"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              aria-label="Phone Number"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              aria-label="Message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default ContactUs;
