import {
  footerLinks,
  MapPin,
  Phone,
  Input,
  Button,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from "./../ImpExp.jsx";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">PMC Barbershop</h4>
            <p className="text-gray-300 mb-4">
              Classic cuts with modern style.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-amber-500 transition-colors"
              >
                <RiInstagramFill
                  size={24}
                  color="#E4405F"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-amber-500 transition-colors"
              >
                <RiFacebookFill size={24} color="#1877F2" className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-amber-500 transition-colors"
              >
                <RiTwitterFill size={24} color="#1DA1F2" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-2 text-amber-500 mt-1" />
                <span className="text-gray-300">
                  518 Acme St unit 101, Denton, TX 76205, United States
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-2 text-amber-500" />
                <span className="text-gray-300">+1 940-808-1569</span>
              </div>
              <div>
                <label
                  htmlFor="newsletter"
                  className="block text-sm font-medium text-gray-300"
                >
                  Newsletter
                </label>
                <div className="flex gap-2 mt-2">
                  <Input
                    type="email"
                    id="newsletter"
                    placeholder="Your email"
                    className="mt-1 bg-white text-gray-800"
                  />
                  <Button
                    variant="outline"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} PMC Barbershop. All rights reserved.
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={scrollToTop}
            className="text-gray-300 hover:text-amber-500 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7 7 7M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
