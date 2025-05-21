import React from "react";
import { galleryImages } from "./../data/commonData.js";

const GallerySection = () => {
  console.log(galleryImages);
  return (
    <section
      id="gallery"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Barbershop Gallery</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
