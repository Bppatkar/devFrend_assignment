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
          <h2 className="text-3xl font-bold mb-4 inline-block relative group">
            What Our Clients Say
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-xl p-8
                         transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
                         border border-transparent hover:border-blue-500 dark:hover:border-teal-400"
            >
              <div className="flex items-center mb-6">
                {" "}
                {/* Increased bottom margin for spacing */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4 overflow-hidden shrink-0
                                 p-1 bg-gradient-to-r from-blue-500 to-teal-400"
                >
                  {" "}
                  {/* Added gradient ring */}
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover rounded-full" // Ensure avatar itself is rounded
                    />
                  ) : (
                    <FaUserCircle className="text-white w-14 h-14" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 dark:text-gray-100">
                    {review.name}
                  </h4>{" "}
                  {/* Larger and bolder name */}
                  <div className="flex items-center mt-1">
                    {" "}
                    {/* Spacing for stars */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          // Larger stars
                          i < review.rating
                            ? "text-amber-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                {" "}
                {/* Increased font size and line height */}"{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
