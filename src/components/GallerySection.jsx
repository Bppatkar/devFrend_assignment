import React, { useState, useRef, useLayoutEffect } from "react";
import { galleryImages } from "./../data/commonData.js";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const sliderContainerRef = useRef(null); 
  const currentImageRef = useRef(null); 

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

  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
     
      gsap.set(headingRef.current, { opacity: 0, y: 50 });
      gsap.set(sliderContainerRef.current, { opacity: 0, y: 100, scale: 0.95 });

     
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

     
      gsap.to(sliderContainerRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", 
          toggleActions: "play reverse play reverse",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  useLayoutEffect(() => {
    
    if (currentImageRef.current) {
      gsap.fromTo(
        currentImageRef.current,
        { opacity: 0, scale: 1.05 }, 
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [currentImageIndex]); 

  if (galleryImages.length === 0) {
    return (
      <section
        id="gallery"
        className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        ref={sectionRef} 
      >
        <div className="container mx-auto px-4 text-center">
          <h2 ref={headingRef} className="text-3xl font-bold mb-4 inline-block relative group">
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
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden" 
      ref={sectionRef} 
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
         
          <h2 ref={headingRef} className="text-3xl font-bold mb-4 inline-block relative group">
            Our Barbershop Gallery
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
        </div>

        {/* Adjusted: max-w-4xl and h-[500px] */}
        <div
          ref={sliderContainerRef} 
          className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl"
        >
          {/* Main Image */}
          <img
            ref={currentImageRef}
            src={galleryImages[currentImageIndex]}
            alt={`Gallery ${currentImageIndex + 1}`}
            className="w-full h-[500px] object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/800x500?text=Image+Not+Found";
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