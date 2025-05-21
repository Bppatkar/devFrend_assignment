import React from "react";
// Changed FaScissors to FaCut
import { FaUser, FaCut, FaHome } from "react-icons/fa"; // Import specific icons

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* "Our Commitment" subheading, based on image_0e6f0f.png */}
          <p className="text-blue-600 dark:text-blue-400 text-lg mb-2">Our Commitment</p>

          {/* Main heading with the animated underline */}
          <h2 className="text-3xl font-bold mb-4 inline-block relative group">
            Why Choose PMC Barbershop?
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Expert Barbers Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUser className="w-8 h-8 text-blue-800 dark:text-blue-200" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Barbers</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.
              </p>
            </div>
          </div>

          {/* Premium Tools & Products Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCut className="w-8 h-8 text-blue-800 dark:text-blue-200" /> {/* Changed to FaCut */}
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Tools & Products</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.
              </p>
            </div>
          </div>

          {/* Classic Barbershop Experience Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHome className="w-8 h-8 text-blue-800 dark:text-blue-200" />
              </div>
              <h3 className="text-xl font-bold mb-2">Classic Barbershop Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;