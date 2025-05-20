import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "./../ImpExp.jsx";
import { services } from "./../ImpExp.jsx";

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Start animation when top of element is 80% visible
        //end: 'bottom top',
        scrub: 0.5,
        once: true, // Only play once
      },
    });
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Barber Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-amber-600">
                  {service.price}
                </span>
                <Button
                  variant="outline"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
