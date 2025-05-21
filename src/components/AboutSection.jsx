import React, { useRef, useLayoutEffect } from "react";
import { businessInfo } from "./../data/commonData.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef1 = useRef(null);
  const quoteRef = useRef(null);
  const badgeRef = useRef(null);

  const locationParts = businessInfo.location.split(", ");
  const cityState = `${locationParts[1]}, ${locationParts[2].split(" ")[0]}`;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from([imageRef.current, badgeRef.current], {
        opacity: 0,
        x: -100,
        ease: "power3.out",
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(textRef1.current, {
        opacity: 0,
        x: 100,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: textRef1.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(quoteRef.current, {
        opacity: 0,
        x: 100,
        ease: "power3.out",
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [sectionRef, headingRef, imageRef, textRef1, quoteRef, badgeRef]);

  return (
    <section
      id="about"
      className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Our Story
          </p>
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block relative group"
          >
            About {businessInfo.name}
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Established in 2018, {businessInfo.name} has been providing premium
            grooming services to the men of {cityState}. Our mission is to
            deliver exceptional haircuts and grooming services in a welcoming,
            classic barbershop environment.
          </p>
        </div>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Image Column */}
          <div className="md:w-1/2 relative flex justify-center md:justify-start">
            <img
              ref={imageRef}
              src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Fabout.webp&w=640&q=75"
              alt={`${businessInfo.name} Exterior`}
              className="rounded-lg shadow-xl w-full max-w-md md:max-w-none h-auto object-cover"
            />
            {/* "5+ years" badge */}
            <div
              ref={badgeRef}
              className="absolute bottom-4 left-1/2 md:left-4 -translate-x-1/2 md:translate-x-0 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg"
            >
              5+ years
            </div>
          </div>

          {/* Right Text Column */}
          <div className="md:w-1/2 space-y-6">
            {/* First Paragraph (same as above for initial text) */}
            <p
              ref={textRef1}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Established in 2018, {businessInfo.name} has been providing
              premium grooming services to the men of {cityState}. Our mission
              is to deliver exceptional haircuts and grooming services in a
              welcoming, classic barbershop environment.
            </p>
            {/* Quote / Second Paragraph */}
            <div
              ref={quoteRef}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-inner border-l-4 border-amber-500"
            >
              <p className="text-gray-700 dark:text-gray-200 italic">
                “We take pride in our attention to detail and personalized
                service, ensuring each client leaves looking and feeling their
                best. Our skilled barbers combine traditional techniques with
                modern trends to create custom styles that suit each
                individual's personality and lifestyle.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

