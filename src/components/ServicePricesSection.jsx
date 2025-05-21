import React, { useRef, useLayoutEffect } from "react"; // Import useRef and useLayoutEffect
import { servicePrices } from "./../data/servicesData.js";
import { gsap } from 'gsap'; // Import gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

const ServicePricesSection = () => {
  // Refs for elements to animate
  const sectionRef = useRef(null);
  const headingRef = useRef(null); // Ref for "Our Service Prices" h2 tag
  const priceCardsRef = useRef([]); // Array ref for the category cards

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for header and cards to be hidden
      gsap.set(headingRef.current, { opacity: 0, y: 50 });
      gsap.set(priceCardsRef.current, { opacity: 0, y: 100, scale: 0.95 });

      // Header animation
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // When the top of the section is 80% down from the viewport top
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave back, play on re-enter, reverse on re-leave back
        },
      });

      // Price category cards animation with stagger
      gsap.to(priceCardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 1,
        stagger: 0.15, // Stagger effect for each card
        scrollTrigger: {
          trigger: priceCardsRef.current, // Trigger on the first card
          start: "top 85%", // When the top of the first card is 85% down from the viewport top
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave back, play on re-enter, reverse on re-leave back
        },
      });

    }, sectionRef); // <- scope all GSAP animations within the sectionRef

    return () => ctx.revert(); // Clean up GSAP animations on unmount
  }, []);

  return (
    <section
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden" // Added overflow-hidden
      ref={sectionRef} // Attach ref to the section
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            ref={headingRef} // Attach ref to the heading
            className="text-3xl font-bold mb-4 inline-block relative group"
          >
            Our Service Prices
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePrices.map((category, index) => (
            <div
              key={index}
              ref={(el) => (priceCardsRef.current[index] = el)} // Attach ref to each price category card
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 overflow-hidden
                         transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
                         border border-transparent hover:border-blue-500 dark:hover:border-teal-400
                         group"
            >
              {/* Optional: Add a subtle gradient overlay or border on hover */}
              <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               bg-gradient-to-br from-blue-500/10 to-teal-400/10 dark:from-blue-700/20 dark:to-teal-600/20"></div>

              <h4 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 relative z-10">
                {category.category}
                <span className="block h-1 w-1/4 bg-gradient-to-r from-blue-500 to-teal-400 mt-2 rounded"></span>
              </h4>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 relative z-10">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0"
                  >
                    <span className="text-lg font-medium">{item.name}</span>
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-400">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePricesSection;