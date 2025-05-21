import React, { useState } from "react";
import { footerLinks } from "./../data/commonData.js";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { FaPhoneAlt } from "react-icons/fa"; // Keep FaPhoneAlt from fa
import { FaRegCircleUser } from "react-icons/fa6"; // Correct import for FaRegCircleUser

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
    <header className="sticky top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Theme Switcher (Left side) */}
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=128&q=75"
              alt="PMC Barbershop Logo"
              className="w-10 h-10 md:w-12 md:h-12 mr-1" // Slightly smaller on mobile
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 items-center">
            {footerLinks.slice(0, 5).map(
              (
                link // Adjust to show only specific links if needed
              ) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href.slice(1))}
                    className="text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors font-medium"
                  >
                    {link.text}
                  </button>
                </li>
              )
            )}
          </ul>
          {/* Theme Switcher always visible */}
          <ThemeSwitcher />
          {/* Contact Info and Book Button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+19408081569"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              <FaPhoneAlt className="w-4 h-4 mr-1" />
              +1 940-808-1569
            </a>
            <button
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:bg-amber-700 dark:hover:bg-amber-800"
              onClick={() => scrollToSection("contact")} // Assuming book now links to contact
            >
              Book an Appointment
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            // Close Icon
            <svg
              className="w-6 h-6"
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
              className="w-6 h-6"
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-4 px-4 shadow-lg transition-all duration-300 ease-in-out origin-top">
          <ul className="flex flex-col space-y-4">
            {footerLinks.slice(0, 5).map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-amber-500 font-medium"
                >
                  {link.text}
                </button>
              </li>
            ))}
            <li>
              <a
                href="tel:+19408081569"
                className="flex items-center py-2 text-gray-700 dark:text-gray-300 hover:text-amber-500 font-medium"
              >
                <FaPhoneAlt className="w-4 h-4 mr-2" />
                +1 940-808-1569
              </a>
            </li>
            <li>
              <button
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:bg-amber-700 dark:hover:bg-amber-800"
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
