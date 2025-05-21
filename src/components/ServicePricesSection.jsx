import React from "react";
import { servicePrices } from "./../data/servicesData.js";

const ServicePricesSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 inline-block relative group"> {/* Added inline-block, relative, group */}
            Our Service Prices
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePrices.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h4 className="text-2xl font-bold mb-4">{category.category}</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                  >
                    <span>{item.name}</span>
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
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