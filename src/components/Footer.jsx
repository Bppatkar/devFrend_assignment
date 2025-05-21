import React, { useRef, useLayoutEffect } from "react"; // Import useRef and useLayoutEffect
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import { footerLinks, businessInfo } from "./../data/commonData.js";
import { gsap } from 'gsap'; // Import gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // Refs for elements to animate
  const footerRef = useRef(null);
  const companyInfoRef = useRef(null);
  const quickLinksRef = useRef(null);
  const contactUsRef = useRef(null);
  const copyrightRef = useRef(null);
  const scrollToTopButtonRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states to be hidden and slightly offset
      gsap.set(companyInfoRef.current, { opacity: 0, y: 50 });
      gsap.set(quickLinksRef.current, { opacity: 0, y: 50 });
      gsap.set(contactUsRef.current, { opacity: 0, y: 50 });
      gsap.set(copyrightRef.current, { opacity: 0, y: 30 });
      gsap.set(scrollToTopButtonRef.current, { opacity: 0, y: 20 });

      // Create a timeline for the footer columns
      const footerColumnsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%", // Trigger when the top of the footer enters the bottom of the viewport
          toggleActions: "play reverse play reverse",
        },
      });

      footerColumnsTimeline
        .to(companyInfoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .to(quickLinksRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6") // Stagger
        .to(contactUsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6"); // Stagger

      // Animate copyright and scroll to top button
      const bottomFooterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%", // Trigger slightly later for the bottom elements
          toggleActions: "play reverse play reverse",
        },
      });

      bottomFooterTimeline
        .to(copyrightRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(scrollToTopButtonRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4"); // Overlap

    }, footerRef); // <- scope all GSAP animations within the footerRef

    return () => ctx.revert(); // Clean up GSAP animations on unmount
  }, []);

  return (
    <footer
      className="bg-gray-800 dark:bg-gray-950 text-white py-6 overflow-hidden" // Added overflow-hidden
      ref={footerRef} // Attach ref to the footer
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div ref={companyInfoRef}> {/* Attach ref */}
            <h4 className="text-lg font-bold mb-4">{businessInfo.name}</h4>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Classic cuts with modern style. Your premier {businessInfo.category}.
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
          <div ref={quickLinksRef}> {/* Attach ref */}
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
          <div ref={contactUsRef}> {/* Attach ref */}
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-6 h-6 mr-2 text-amber-500 mt-1" />
                <span className="text-gray-300 dark:text-gray-400">
                  {businessInfo.location}
                </span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="w-6 h-6 mr-2 text-amber-500" />
                <span className="text-gray-300 dark:text-gray-400">{businessInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <div ref={copyrightRef} className="mt-6 text-center text-gray-400 dark:text-gray-500"> {/* Attach ref */}
          © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
        </div>
        <div ref={scrollToTopButtonRef} className="mt-4 text-center"> {/* Attach ref */}
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