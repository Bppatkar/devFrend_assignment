import React from "react";
import { reviews } from "./../data/reviewsData.js";
import { FaStar, FaUserCircle } from "react-icons/fa";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 inline-block relative group"> {/* Added inline-block */}
            What Our Clients Say
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4 overflow-hidden shrink-0">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-gray-500 dark:text-gray-400 w-8 h-8" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-amber-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;