import React from "react";
import { FaMapMarkerAlt, FaCut, FaPhoneAlt, FaChevronDown } from "react-icons/fa"; // Imported icons

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('services'); // Assuming 'services' is the next section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section
      id="home"
      // Added relative positioning to handle the absolute image
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Area */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left z-10"> {/* Added z-10 to keep text above image on small screens */}
          <p className="text-lg text-amber-600 dark:text-amber-400 font-semibold mb-2">
            Premium Barber Services in Denton
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Classic Cuts, Modern Style
            <br />
            <span className="text-amber-600 dark:text-amber-400">Premium Barber Shop</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-lg md:max-w-none">
            At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
          </p>
          <div className="flex items-center text-gray-700 dark:text-gray-300 mb-6 justify-center md:justify-start">
            <FaMapMarkerAlt className="w-5 h-5 mr-2 text-amber-500" />
            <span>Denton, TX</span>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              <FaCut className="w-5 h-5 mr-2" />
              Our Services
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:bg-amber-700 dark:hover:bg-amber-800"
            >
              <FaPhoneAlt className="w-5 h-5 mr-2" />
              Book Now
            </button>
          </div>
        </div>
        {/* Right Image Area - Modified for larger image */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:absolute md:inset-y-0 md:right-0 lg:w-[45%] xl:w-2/5"> {/* Adjusted width for larger image on desktop */}
          <img
            src="https://pmcbarber.devfrend.com/images/pmcbarber/hero.webp"
            alt="PMC Barbershop Team"
            // Adjusted classes for bigger image
            className="rounded-lg shadow-xl w-full h-auto md:h-full object-cover md:object-contain"
            // For smaller screens, still let it scale. On medium/large, make it fill height or contain.
          />
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={scrollToNextSection} aria-label="Scroll down">
          <FaChevronDown className="w-8 h-8 text-amber-500" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;