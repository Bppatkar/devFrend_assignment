import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { businessInfo } from './../data/commonData.js'; // Import businessInfo

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

  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 inline-block relative group"> {/* Added inline-block, relative, group */}
            Contact Us
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </h2>
          {/* The static line div is no longer needed here if you have the animated one */}
          {/* <div className="w-20 h-1 mx-auto relative">
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-teal-400 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </div> */}
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Ready for a fresh look? Book your appointment today or contact us
            for any questions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 mr-2 text-amber-500" />
                <span>
                  {businessInfo.location} {/* Dynamic location */}
                </span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="w-6 h-6 mr-2 text-amber-500" />
                <a href={`tel:${businessInfo.phone.replace(/ /g, '')}`} className="hover:underline">
                  {businessInfo.phone} {/* Dynamic phone */}
                </a>
              </div>
              <div className="flex items-center">
                <FaClock className="w-6 h-6 mr-2 text-amber-500" />
                <span>
                  {businessInfo.status} {/* Dynamic status */}
                </span>
              </div>
              {/* Google Maps Embed */}
              {businessInfo.googleMapsEmbedUrl && (
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                  <iframe
                    src={businessInfo.googleMapsEmbedUrl}
                    width="100%"
                    height="300" // Adjust height as needed
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fama Barber Shop Location" // Add a title for accessibility
                  ></iframe>
                </div>
              )}
                {/* Google Maps Directions Link (still useful if map doesn't load or for native app) */}
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
          <form onSubmit={handleSubmit} className="space-y-4">
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