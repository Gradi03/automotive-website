import React, { useState } from 'react';

const FAQ = () => {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close the FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "How do I know if my battery needs replacing?",
      answer:
        "Look for signs like slow engine cranking, dim headlights, or dashboard warning lights. If you’re unsure, visit us for a free battery test.",
    },
    {
      question: "What types of batteries do you offer?",
      answer:
        "We supply batteries for passenger cars, commercial vehicles, and specialty vehicles, all tested for reliability and performance.",
    },
    {
      question: "Do you provide emergency assistance?",
      answer:
        "Yes! We offer 24/7 roadside battery replacement services to ensure you’re never stranded.",
    },
    {
      question: "Are you BBBEE compliant?",
      answer:
        "Absolutely. We are proudly BBBEE compliant, reflecting our commitment to inclusivity and economic growth.",
    },
    {
      question: "Do you recycle old batteries?",
      answer:
        "Yes, we offer safe and eco-friendly battery recycling services. Bring your old battery to us, and we’ll handle the rest.",
    },
    {
      question: "Are your services insured?",
      answer:
        "Yes, we are fully covered by public liability insurance, ensuring your safety and confidence in every interaction.",
    },
  ];

  return (
    <div id='FAQ' className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Got Questions? <span className="text-blue-500">We’ve Got Answers!</span>
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Find answers to some of the most frequently asked questions.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span className="text-blue-500">
                {openIndex === index ? (
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
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
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
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700 border-t border-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
