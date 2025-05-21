import React, { useState, useRef, useLayoutEffect } from "react";
import { footerLinks, businessInfo } from "./../data/commonData.js";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import ScrollToPlugin

gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin for smooth scrolling

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for GSAP animations
  const headerRef = useRef(null);
  const logoWrapperRef = useRef(null); // Ref for the logo image and text container
  const navLinksListRef = useRef(null); // Ref for the <ul> of nav links
  const contactInfoRef = useRef(null); // Ref for the contact info div (phone, book button)
  const mobileMenuRef = useRef(null); // For the mobile dropdown menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 70 }, // Adjust offsetY based on fixed header height
        ease: "power2.inOut",
      });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states to ensure elements are hidden before animation
      gsap.set(headerRef.current, { opacity: 0, y: -50 });
      gsap.set(logoWrapperRef.current.children, { opacity: 0, x: -20 }); // Target logo img and span
      gsap.set(navLinksListRef.current.children, { opacity: 0, y: -10 }); // Target <li> elements
      gsap.set(contactInfoRef.current.children, { opacity: 0, x: 20 }); // Target phone link and button

      // Animation for the entire header on initial load
      gsap.to(
        headerRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );

      // Animation for the logo (image and text)
      gsap.to(logoWrapperRef.current.children, {
        opacity: 1,
        x: 0,
        ease: "power2.out",
        duration: 0.7,
        delay: 0.5,
      });

      // Animation for desktop navigation links with stagger
      gsap.to(navLinksListRef.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.08, // Stagger effect
        ease: "power2.out",
        duration: 0.5,
        delay: 0.7,
      });

      // Animation for contact info and "Book an Appointment" button
      gsap.to(contactInfoRef.current.children, {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        ease: "power2.out",
        duration: 0.6,
        delay: 0.9, // Animate slightly after nav links
      });

    }, headerRef); // <- scope all GSAP animations within the headerRef

    return () => ctx.revert(); // Clean up GSAP animations on unmount
  }, []);

  // Animation for mobile menu opening/closing
  useLayoutEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20, height: 0 },
          { opacity: 1, y: 0, height: "auto", duration: 0.4, ease: "power2.out" }
        );
      } else {
        // Only animate out if it was previously open to avoid initial animation flash
        gsap.to(
          mobileMenuRef.current,
          { opacity: 0, y: -20, height: 0, duration: 0.3, ease: "power2.in" }
        );
      }
    }
  }, [isMobileMenuOpen]);


  return (
    <header ref={headerRef} className="sticky top-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Theme Switcher (Left side) */}
        <div className="flex items-center gap-4">
          {/* Logo - Using businessInfo.name */}
          <div ref={logoWrapperRef} className="flex items-center justify-center">
            <img
              src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=128&q=75"
              alt={`${businessInfo.name} Logo`}
              className="w-12 h-12 md:w-14 md:h-14 mr-2"
            />
            {/* Optional: Add business name next to logo with gradient text */}
            <span className="hidden md:block text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
              {businessInfo.name}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <ul ref={navLinksListRef} className="flex space-x-8 items-center">
            {footerLinks.slice(0, 5).map((link) => (
              <li key={link.href}> {/* No ref needed directly on <li> due to parent ref */}
                <button
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors font-semibold py-2 group"
                >
                  {link.text}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </button>
              </li>
            ))}
            <li>
                 <ThemeSwitcher />
            </li>
          </ul>
          {/* Contact Info and Book Button */}
          <div ref={contactInfoRef} className="flex items-center space-x-6">
            <a
              href={`tel:${businessInfo.phone.replace(/ /g, "")}`}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              <FaPhoneAlt className="w-5 h-5 mr-2 text-blue-500 dark:text-teal-400" />
              {businessInfo.phone}
            </a>
            <button
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-lg text-base font-semibold text-white
                         bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500
                         dark:from-amber-600 dark:to-amber-700 dark:hover:from-amber-700 dark:hover:to-amber-800
                         transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
              onClick={() => scrollToSection("contact")}
            >
              Book an Appointment
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button (and Theme Switcher for mobile) */}
        <div className="flex items-center md:hidden">
          <ThemeSwitcher />
          <button
            className="ml-4 text-gray-700 dark:text-gray-300 focus:outline-none p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-7 h-7 text-blue-500 dark:text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7 text-blue-500 dark:text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white dark:bg-gray-800 py-4 px-4 shadow-xl transition-all duration-300 ease-in-out origin-top border-t border-gray-200 dark:border-gray-700"
          style={{ overflow: 'hidden' }}
        >
          <ul className="flex flex-col space-y-3">
            {footerLinks.slice(0, 5).map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className="block w-full text-left py-3 px-4 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-amber-500 font-medium transition-colors duration-200"
                >
                  {link.text}
                </button>
              </li>
            ))}
            <li>
              <a
                href={`tel:${businessInfo.phone.replace(/ /g, "")}`}
                className="flex items-center py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-amber-500 font-medium transition-colors duration-200"
              >
                <FaPhoneAlt className="w-5 h-5 mr-3 text-blue-500 dark:text-teal-400" />
                {businessInfo.phone}
              </a>
            </li>
            <li>
              <button
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-lg text-base font-semibold text-white
                           bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500
                           dark:from-amber-600 dark:to-amber-700 dark:hover:from-amber-700 dark:hover:to-amber-800
                           transition-all duration-300 ease-in-out mt-2"
                onClick={() => scrollToSection("contact")}
              >
                Book an Appointment
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;