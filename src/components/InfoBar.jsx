import React, { useRef, useLayoutEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { businessInfo } from "./../data/commonData.js";
import { gsap } from "gsap"; // GSAP imported

const InfoBar = () => {
  const infoBarRef = useRef(null);

  useLayoutEffect(() => {
    // Animation for the entire InfoBar
    gsap.fromTo(
      infoBarRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []); // Runs once on mount

  return (
    <div ref={infoBarRef} className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-950 dark:to-gray-800 text-gray-800 dark:text-gray-200 py-3 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base font-medium">
          {/* Location */}
          <div className="flex items-center mb-2 md:mb-0 group">
            <FaMapMarkerAlt className="w-4 h-4 mr-2 text-blue-500 dark:text-teal-400 group-hover:text-amber-500 transition-colors" />
            <span className="group-hover:text-amber-500 transition-colors">
              {businessInfo.location}
            </span>
          </div>
          {/* Phone */}
          <div className="flex items-center mb-2 md:mb-0 group">
            <FaPhoneAlt className="w-4 h-4 mr-2 text-blue-500 dark:text-teal-400 group-hover:text-amber-500 transition-colors" />
            <a
              href={`tel:${businessInfo.phone.replace(/ /g, "")}`}
              className="hover:text-amber-500 transition-colors"
            >
              {businessInfo.phone}
            </a>
          </div>
          {/* Status */}
          <div className="flex items-center group">
            <FaClock className="w-4 h-4 mr-2 text-blue-500 dark:text-teal-400 group-hover:text-amber-500 transition-colors" />
            <span className="group-hover:text-amber-500 transition-colors">
              {businessInfo.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;