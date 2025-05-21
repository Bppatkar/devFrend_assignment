import React, { useState } from "react";
import { footerLinks, businessInfo } from "./../data/commonData.js";
import ThemeSwitcher from "./ThemeSwitcher.jsx"; // Assuming ThemeSwitcher is styled consistently
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="sticky top-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center"> {/* Increased py for more space */}
        {/* Logo and Theme Switcher (Left side) */}
        <div className="flex items-center gap-4"> {/* Increased gap */}
          {/* Logo - Using businessInfo.name */}
          <div className="flex items-center justify-center">
            <img
              src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=128&q=75"
              alt={`${businessInfo.name} Logo`}
              className="w-12 h-12 md:w-14 md:h-14 mr-2" // Slightly larger logo
            />
            {/* Optional: Add business name next to logo with gradient text */}
            <span className="hidden md:block text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
              {businessInfo.name}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10"> {/* Increased space-x */}
          <ul className="flex space-x-8 items-center">
            {footerLinks.slice(0, 5).map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors font-semibold py-2 group" // Added relative, font-semibold
                >
                  {link.text}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </button>
              </li>
            ))}
          </ul>
          {/* Theme Switcher always visible */}
          <ThemeSwitcher />
          {/* Contact Info and Book Button */}
          <div className="flex items-center space-x-6"> {/* Increased space-x */}
            <a
              href={`tel:${businessInfo.phone.replace(/ /g, "")}`}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              <FaPhoneAlt className="w-5 h-5 mr-2 text-blue-500 dark:text-teal-400" /> {/* Larger icon, themed color */}
              {businessInfo.phone}
            </a>
            <button
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-lg text-base font-semibold text-white
                         bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500
                         dark:from-amber-600 dark:to-amber-700 dark:hover:from-amber-700 dark:hover:to-amber-800
                         transition-all duration-300 ease-in-out transform hover:-translate-y-0.5" // Gradient button with slight lift
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
            className="ml-4 text-gray-700 dark:text-gray-300 focus:outline-none p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" // Added padding and hover background
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg
                className="w-7 h-7 text-blue-500 dark:text-teal-400" // Larger icon, themed color
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
              // Menu Icon
              <svg
                className="w-7 h-7 text-blue-500 dark:text-teal-400" // Larger icon, themed color
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
        <div className="md:hidden bg-white dark:bg-gray-800 py-4 px-4 shadow-xl transition-all duration-300 ease-in-out origin-top border-t border-gray-200 dark:border-gray-700"> {/* Stronger shadow, border */}
          <ul className="flex flex-col space-y-3"> {/* Adjusted spacing */}
            {footerLinks.slice(0, 5).map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className="block w-full text-left py-3 px-4 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-amber-500 font-medium transition-colors duration-200" // Added padding, rounded, hover background
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
                <FaPhoneAlt className="w-5 h-5 mr-3 text-blue-500 dark:text-teal-400" /> {/* Larger icon, themed color */}
                {businessInfo.phone}
              </a>
            </li>
            <li>
              <button
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-lg text-base font-semibold text-white
                           bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500
                           dark:from-amber-600 dark:to-amber-700 dark:hover:from-amber-700 dark:hover:to-amber-800
                           transition-all duration-300 ease-in-out mt-2" // Consistent button style
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