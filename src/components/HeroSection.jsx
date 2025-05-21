import React, { useRef, useLayoutEffect } from "react"; // Import useRef and useLayoutEffect
import { FaMapMarkerAlt, FaCut, FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { businessInfo } from './../data/commonData.js';
import { gsap } from 'gsap'; // Import gsap

const HeroSection = () => {
  // Refs for elements to animate
  const heroSectionRef = useRef(null);
  const introTextRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const infoLineRef = useRef(null); // Ref for location, rating, status
  const buttonsRef = useRef(null); // Ref for the div containing both buttons
  const heroImageRef = useRef(null);
  const scrollDownButtonRef = useRef(null);


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

  // Extract city/state from location for display
  const locationParts = businessInfo.location.split(', ');
  const cityState = `${locationParts[1]}, ${locationParts[2].split(' ')[0]}`; // "Denton, TX"

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for elements to be hidden/offset
      gsap.set([introTextRef.current, mainHeadingRef.current, descriptionRef.current, infoLineRef.current, buttonsRef.current], { opacity: 0, y: 50 });
      gsap.set(heroImageRef.current, { opacity: 0, scale: 0.8, x: 50 });
      gsap.set(scrollDownButtonRef.current, { opacity: 0, y: 20 });

      // Create a main timeline for left-side content
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(introTextRef.current, { opacity: 1, y: 0, duration: 0.8 })
        .to(mainHeadingRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5") // Overlap
        .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.6") // Overlap
        .to(infoLineRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5") // Overlap
        .to(buttonsRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.6") // Overlap

      // Animate the image concurrently with the text, but start slightly later
      gsap.to(heroImageRef.current, { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: "power3.out" }, "<0.2");

      // Animate the scroll-down button after the main elements
      gsap.to(scrollDownButtonRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: tl.duration() - 0.5 }); // Adjust delay to start slightly before main timeline finishes

      // Note: For hero sections, ScrollTrigger toggleActions are less common as they typically play once on load.
      // If you want them to reverse on scroll up, you'd add scrollTrigger configs to the timelines.
      // For a hero, playing once on load is usually the desired effect.
    }, heroSectionRef); // <- scope all GSAP animations within the heroSectionRef

    return () => ctx.revert(); // Clean up GSAP animations on unmount
  }, []); // Empty dependency array ensures it runs once on mount


  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 relative overflow-hidden" // Keep overflow-hidden
      ref={heroSectionRef} // Attach main section ref
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Area */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left z-10">
          <p ref={introTextRef} className="text-lg text-amber-600 dark:text-amber-400 font-semibold mb-2">
            Premium {businessInfo.category} Services in {cityState}
          </p>
          <h1 ref={mainHeadingRef} className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Classic Cuts, Modern Style
            <br />
            <span className="text-amber-600 dark:text-amber-400">
              {businessInfo.name}
            </span>
          </h1>
          <p ref={descriptionRef} className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-lg md:max-w-none">
            At {businessInfo.name}, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
          </p>
          <div ref={infoLineRef} className="flex items-center text-gray-700 dark:text-gray-300 mb-6 justify-center md:justify-start">
            <FaMapMarkerAlt className="w-5 h-5 mr-2 text-amber-500" />
            <span>{cityState}</span>
            <span className="ml-4 flex items-center">
              <span className="text-amber-500">★★★★★</span>
              <span className="ml-1 text-sm font-semibold">{businessInfo.rating} ({businessInfo.reviewsCount} reviews)</span>
            </span>
            <span className="ml-4 text-sm font-semibold text-green-600 dark:text-green-400">
              {businessInfo.status}
            </span>
          </div>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
        {/* Right Image Area */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:absolute md:inset-y-0 md:right-0 lg:w-[45%] xl:w-2/5">
          <img
            ref={heroImageRef} // Attach ref to the image
            src="https://pmcbarber.devfrend.com/images/pmcbarber/hero.webp"
            alt={`${businessInfo.name} Team`}
            className="rounded-lg shadow-xl w-full h-auto md:h-full object-cover md:object-contain"
          />
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div ref={scrollDownButtonRef} className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={scrollToNextSection} aria-label="Scroll down">
          <FaChevronDown className="w-8 h-8 text-amber-500" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;