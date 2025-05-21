import React, { useState, useRef, useLayoutEffect } from "react";
import { faqCategories, faqData } from "./../data/faqData.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [openAccordion, setOpenAccordion] = useState(null); // State to manage open/close of accordion items
  const [searchTerm, setSearchTerm] = useState("");

  // GSAP Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const searchBarRef = useRef(null);
  const categoriesRef = useRef(null);
  const accordionItemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial hidden states for animation
      gsap.set(
        [headingRef.current, searchBarRef.current, categoriesRef.current],
        { opacity: 0, y: 50 }
      );
      gsap.set(accordionItemsRef.current, { opacity: 0, y: 50 });

      // Animate header, search bar, and categories on scroll
      gsap.to(
        [headingRef.current, searchBarRef.current, categoriesRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate accordion items on scroll
      gsap.to(accordionItemsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: accordionItemsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef); // Scope the animations

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSearchTerm(""); // Clear search when changing category
  };

  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "All Questions" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="faq-section"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-teal-400 font-semibold mb-2">
            Common Questions
          </p>
          <h2 ref={headingRef} className="text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Answers to common questions about our barbershop services.
          </p>
        </div>

        {/* Search Bar */}
        <div ref={searchBarRef} className="mb-8 relative w-full">
          <input
            type="text"
            placeholder="Search for questions..."
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Category Tabs */}
        <div
          ref={categoriesRef}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white dark:bg-teal-500"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={faq.id || index}
                ref={(el) => (accordionItemsRef.current[index] = el)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg text-gray-800 dark:text-gray-100 focus:outline-none"
                  onClick={() => handleAccordionToggle(faq.id)}
                  aria-expanded={openAccordion === faq.id}
                >
                  {faq.question}
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openAccordion === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`px-5 pb-5 text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out ${
                    openAccordion === faq.id
                      ? "max-h-screen opacity-100 pt-2"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{ overflow: "hidden" }} // Ensure content is hidden when collapsed
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No questions found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
