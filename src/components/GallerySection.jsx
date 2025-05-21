import React from "react";
import { galleryImages } from "./../data/commonData.js"; // Make sure the path is correct

const GallerySection = () => {
  console.log("Gallery Images:", galleryImages); // Added console log to verify images are loaded

  return (
    <section
      id="gallery"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* "Our Barbershop Gallery" heading with animated gradient underline */}
          <h2 className="text-3xl font-bold mb-4 inline-block relative group">
            Our Barbershop Gallery
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md relative group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                  console.error(`Failed to load image: ${image}`);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;