import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa"; 

const InfoBar = () => {
  return (
    <div className="bg-amber-800 dark:bg-amber-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
          <div className="flex items-center mb-2 md:mb-0">
            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
            <span>518 Acme St unit 101, Denton, TX 76205, United States</span>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <FaPhoneAlt className="w-4 h-4 mr-2" />
            <span>+1 940-808-1569</span>
          </div>
          <div className="flex items-center">
            <FaClock className="w-4 h-4 mr-2" />
            <span>
              Mon-Fri 9:00 AM - 7:00 PM, Sat 9:00 AM - 5:00 PM, Sun Closed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;