import { MapPin, Phone, Clock } from "./../ImpExp.jsx";

const InfoBar = () => {
  return (
    <div className="bg-amber-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <MapPin className="w-6 h-6 mr-2" />
            <span>518 Acme St unit 101, Denton, TX 76205, United States</span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <Phone className="w-6 h-6 mr-2" />
            <span>+1 940-808-1569</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-6 h-6 mr-2" />
            <span>
              Mon-Fri 9:00 AM - 7:00 PM, Sat 9:00 AM - 5:00 PM, Sun Closed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
