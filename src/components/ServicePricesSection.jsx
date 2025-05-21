import React, { useRef, useLayoutEffect } from "react";
import { servicePrices } from "./../data/servicesData.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicePricesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const priceCardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { opacity: 0, y: 50 });
      gsap.set(priceCardsRef.current, { opacity: 0, y: 100, scale: 0.95 });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Price category cards animation with stagger
      gsap.to(priceCardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: priceCardsRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          // IMPORTANT: Clear GSAP inline styles after animation to prevent conflicts with Tailwind hovers
          onComplete: () => {
            priceCardsRef.current.forEach((card) => {
              if (card) {
                gsap.set(card, { clearProps: "transform,opacity" }); // Only clear properties GSAP animates
              }
            });
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="service-prices"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            ref={headingRef}
            className="text-3xl font-bold mb-4 inline-block relative group"
          >
            Our Service Prices
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose from our range of professional barbering services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePrices.map((category, index) => (
            <div
              key={category.id || index}
              ref={(el) => (priceCardsRef.current[index] = el)}
              className={`
                relative rounded-lg shadow-md p-8 flex flex-col justify-between
                transition-all duration-300 ease-in-out 
                hover:scale-[1.02] hover:shadow-lg 
                ${
                  category.isPopular
                    ? "border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-gray-800"
                    : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                }
              `}
              style={
                category.isPopular
                  ? {
                      boxShadow:
                        "0 0 0 2px #2563EB, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      backgroundImage:
                        "linear-gradient(to bottom right, rgba(59, 130, 246, 0.02), rgba(45, 212, 191, 0.02))",
                    }
                  : {}
              }
            >
              {category.isPopular && (
                <div className="absolute top-0 right-0 bg-[#3DC4A7] text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
                  {category.category}
                </h3>
                {category.price && (
                  <p className="text-5xl font-bold text-blue-600 dark:text-teal-400 mt-4">
                    {category.price}
                    {category.unit && (
                      <span className="text-xl font-normal text-gray-600 dark:text-gray-400">
                        {category.unit}
                      </span>
                    )}
                  </p>
                )}
              </div>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 flex-grow mb-8">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-lg font-medium"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-teal-400 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.name}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-lg text-lg font-semibold transition-colors duration-300
                              ${
                                category.buttonVariant === "primary"
                                  ? "bg-[#1F3876] text-white hover:bg-[#1A3060] dark:bg-teal-600 dark:hover:bg-teal-700"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                              } focus:outline-none focus:ring-2 focus:ring-offset-2
                              ${
                                category.buttonVariant === "primary"
                                  ? "focus:ring-blue-600 dark:focus:ring-teal-500"
                                  : "focus:ring-gray-300 dark:focus:ring-gray-500"
                              }
                            `}
                  aria-label={`${category.buttonText} for ${category.category}`}
                >
                  {category.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePricesSection;
