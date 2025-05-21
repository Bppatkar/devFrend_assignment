import React, { useState } from "react";
import { galleryImages } from "./../data/commonData.js"; // Make sure the path is correct

const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  if (galleryImages.length === 0) {
    return (
      <section
        id="gallery"
        className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 inline-block relative group">
            Our Barbershop Gallery
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
          <p className="text-lg mt-4">No gallery images available.</p>
        </div>
      </section>
    );
  }

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

        {/* Adjusted: max-w-4xl and h-[500px] */}
        <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          {/* Main Image */}
          <img
            src={galleryImages[currentImageIndex]}
            alt={`Gallery ${currentImageIndex + 1}`}
            className="w-full h-[500px] object-cover" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/800x500?text=Image+Not+Found"; // Updated fallback
              console.error(`Failed to load image: ${galleryImages[currentImageIndex]}`);
            }}
          />

          {/* Previous Button */}
          <button
            onClick={goToPreviousImage}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            aria-label="Previous image"
          >
            &#10094; {/* Left arrow */}
          </button>

          {/* Next Button */}
          <button
            onClick={goToNextImage}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            aria-label="Next image"
          >
            &#10095; {/* Right arrow */}
          </button>

          {/* Dots/Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? "bg-white" : "bg-gray-400"
                } hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75`}
                aria-label={`Go to image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;