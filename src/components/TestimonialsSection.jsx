import React, { useRef, useLayoutEffect } from "react"; 
import { reviews } from "./../data/reviewsData.js";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { gsap } from 'gsap'; // Import gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  // Refs for elements to animate
  const sectionRef = useRef(null);
  const headingRef = useRef(null); 
  const reviewCardsRef = useRef([]); 

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
   
      gsap.set(headingRef.current, { opacity: 0, y: 50 });
      gsap.set(reviewCardsRef.current, { opacity: 0, y: 100, scale: 0.95 });

      // Header animation
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

     
      gsap.to(reviewCardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 1,
        stagger: 0.15, 
        scrollTrigger: {
          trigger: reviewCardsRef.current,
          start: "top 85%", 
          toggleActions: "play reverse play reverse", 
        },
      });

    }, sectionRef); 

    return () => ctx.revert(); 
  }, []);

  return (
    <section
      id="testimonials"
      className="py-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-hidden" 
      ref={sectionRef} 
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            ref={headingRef} /
            className="text-3xl font-bold mb-4 inline-block relative group"
          >
            What Our Clients Say
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              ref={(el) => (reviewCardsRef.current[index] = el)} 
              className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-xl p-8
                         transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
                         border border-transparent hover:border-blue-500 dark:hover:border-teal-400"
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4 overflow-hidden shrink-0
                             p-1 bg-gradient-to-r from-blue-500 to-teal-400"
                >
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="text-white w-14 h-14" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 dark:text-gray-100">
                    {review.name}
                  </h4>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
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
