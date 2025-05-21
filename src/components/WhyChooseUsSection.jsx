import React from "react";
import { FaCheckCircle } from "react-icons/fa"; 
const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose PMC Barbershop?
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <FaCheckCircle className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Barbers</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our barbers are highly skilled and experienced, providing top-tier service.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <FaCheckCircle className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Products</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use only the best tools and grooming products for superior results.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <FaCheckCircle className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Classic Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enjoy the traditional barbershop atmosphere with a modern touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;