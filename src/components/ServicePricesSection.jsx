import React from "react";
import { servicePrices } from "./../data/servicesData.js";

const ServicePricesSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 inline-block relative group">
            Our Service Prices
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePrices.map((category, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 overflow-hidden
                         transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
                         border border-transparent hover:border-blue-500 dark:hover:border-teal-400
                         group" // Added group for potential future inner elements
            >
              {/* Optional: Add a subtle gradient overlay or border on hover */}
              <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              bg-gradient-to-br from-blue-500/10 to-teal-400/10 dark:from-blue-700/20 dark:to-teal-600/20"></div>

              <h4 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 relative z-10">
                {category.category}
                {/* Optional: Small accent line under category title */}
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