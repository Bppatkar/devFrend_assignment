import React, { useState, useRef, useLayoutEffect } from "react"; // Import useRef and useLayoutEffect
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { businessInfo } from './../data/commonData.js'; // Import businessInfo
import { gsap } from 'gsap'; // Import gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "", // This will hold the selected service value
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Refs for animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null); // Ref for "Contact Us" h2 tag
  const descriptionRef = useRef(null); // Ref for the paragraph description
  const contactInfoRef = useRef(null); // Ref for the contact information div
  const contactFormRef = useRef(null); // Ref for the form

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (e) => {
    setFormData({ ...formData, service: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.service ||
      !formData.date
    ) {
      setSubmitError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", service: "", date: "", message: "" });
    }, 2000);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for elements to be hidden
      gsap.set([headingRef.current, descriptionRef.current], { opacity: 0, y: 50 });
      gsap.set(contactInfoRef.current, { opacity: 0, x: -100 }); // Slide in from left
      gsap.set(contactFormRef.current, { opacity: 0, x: 100 }); // Slide in from right

      // Header and description animation
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      headerTimeline
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4"); // Overlap

      // Contact Info and Form animation
      const contentTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%", // Trigger slightly later than header
          toggleActions: "play reverse play reverse",
        },
      });

      contentTimeline
        .to(contactInfoRef.current, { opacity: 1, x: 0, duration: 1, ease: "power3.out" })
        .to(contactFormRef.current, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.7"); // Overlap

    }, sectionRef); // <- scope all GSAP animations within the sectionRef

    return () => ctx.revert(); // Clean up GSAP animations on unmount
  }, []);

  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden" // Added overflow-hidden
      ref={sectionRef} // Attach ref to the section
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            ref={headingRef} // Attach ref to the heading
            className="text-3xl font-bold mb-4 inline-block relative group"
          >
            Contact Us
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
          <p ref={descriptionRef} className="text-gray-600 dark:text-gray-400 mt-4">
            Ready for a fresh look? Book your appointment today or contact us
            for any questions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div ref={contactInfoRef}> {/* Attach ref to contact info div */}
            <h4 className="text-2xl font-bold mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 mr-2 text-amber-500" />
                <span>
                  {businessInfo.location}
                </span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="w-6 h-6 mr-2 text-amber-500" />
                <a href={`tel:${businessInfo.phone.replace(/ /g, '')}`} className="hover:underline">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <FaClock className="w-6 h-6 mr-2 text-amber-500" />
                <span>
                  {businessInfo.status}
                </span>
              </div>
              {businessInfo.googleMapsEmbedUrl && (
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                  <iframe
                    src={businessInfo.googleMapsEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fama Barber Shop Location"
                  ></iframe>
                </div>
              )}
              <div className="mt-4">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  <FaMapMarkerAlt className="w-5 h-5 mr-1" />
                  Get Directions on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={contactFormRef} onSubmit={handleSubmit} className="space-y-4"> {/* Attach ref to the form */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleServiceChange}
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 appearance-none"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="haircut">Haircut</option>
                <option value="beard">Beard Trim</option>
                <option value="shave">Shave</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your style preferences or any questions you have"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-amber-700 dark:hover:bg-amber-800 dark:focus:ring-amber-600"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
            {submitError && (
              <p className="text-red-500 text-sm mt-2">{submitError}</p>
            )}
            {submitSuccess && (
              <p className="text-green-500 text-sm mt-2">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;