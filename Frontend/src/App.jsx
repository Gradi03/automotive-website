// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll'; // For scrollable sections
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

// import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import WhyUsPage from './pages/WhyUsPage';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* Scrollable sections */}
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>

      <Element name="whyUsPage">
        <WhyUsPage />
      </Element>
      
      {/* <Element name="testimonials">
        <Testimonials />
      </Element> */}
      <Element name="FAQ">
        <FAQ />
      </Element>
      <Element name="contactUs">
        <ContactUs />
      </Element>
      
      <Footer />
    </Router>
  );
}

export default App;
