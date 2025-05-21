import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import { footerLinks } from "@/data/commonData"; // Updated import path

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">PMC Barbershop</h4>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Classic cuts with modern style.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-amber-500 transition-colors"
              >
                <FaInstagram size={24} className="w-6 h-6 text-[#E4405F]" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-amber-500 transition-colors"
              >
                <FaFacebookF size={24} className="w-6 h-6 text-[#1877F2]" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-amber-500 transition-colors"
              >
                <FaTwitter size={24} className="w-6 h-6 text-[#1DA1F2]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-6 h-6 mr-2 text-amber-500 mt-1" />
                <span className="text-gray-300 dark:text-gray-400">
                  518 Acme St unit 101, Denton, TX 76205, United States
                </span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="w-6 h-6 mr-2 text-amber-500" />
                <span className="text-gray-300 dark:text-gray-400">+1 940-808-1569</span>
              </div>
              <div>
                <label
                  htmlFor="newsletter"
                  className="block text-sm font-medium text-gray-300 dark:text-gray-400 mt-4"
                >
                  Newsletter
                </label>
                <div className="flex gap-2 mt-2">
                  <input
                    type="email"
                    id="newsletter"
                    placeholder="Your email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                  />
                  <button
                    className="px-4 py-2 border border-amber-600 rounded-md text-amber-600 hover:text-amber-700 hover:border-amber-700 font-medium transition-colors dark:text-amber-500 dark:border-amber-500 dark:hover:text-amber-600 dark:hover:border-amber-600"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} PMC Barbershop. All rights reserved.
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={scrollToTop}
            className="text-gray-300 dark:text-gray-400 hover:text-amber-500 transition-colors p-2 rounded-full bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;