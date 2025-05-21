import React, { useRef, useLayoutEffect } from "react";
import { services } from "./../data/servicesData.js";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const sectionPRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const serviceCardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state for header elements to be hidden
      gsap.set([sectionPRef.current, headingRef.current, descriptionRef.current], { opacity: 0, y: 50 });

      // Header elements animation
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave back, play on re-enter, reverse on re-leave back
        },
      });

      headerTimeline
        .to(sectionPRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
        .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4");


      // Set initial state for service cards to be hidden
      gsap.set(serviceCardsRef.current, { opacity: 0, y: 100, scale: 0.8 });

      // Service cards animation with stagger
      gsap.to(serviceCardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: serviceCardsRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave back, play on re-enter, reverse on re-leave back
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p ref={sectionPRef} className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Premium Grooming
          </p>
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4 inline-block relative group">
            Our Barber Services
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
          <p ref={descriptionRef} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {service.imageUrl && (
                  <div className="mb-4 w-full h-48 overflow-hidden rounded-lg">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex items-center justify-center mb-2">
                  {service.icon && (
                    <span className="text-amber-600 dark:text-amber-400 text-2xl mr-2">
                      {React.createElement(service.icon)}
                    </span>
                  )}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="flex justify-between items-center w-full mt-auto">
                  <span className="font-bold text-amber-600 dark:text-amber-400">
                    {service.price}
                  </span>
                  <button
                    onClick={() => { /* Add logic to open booking modal or scroll to contact */ }}
                    className="px-4 py-2 border border-amber-600 dark:border-amber-500 rounded-md text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors font-medium dark:text-amber-500 dark:hover:text-amber-600"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;