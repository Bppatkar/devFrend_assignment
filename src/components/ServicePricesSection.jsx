import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServicePricesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        //end: 'bottom top',
        scrub: 0.5,
        once: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Service Prices</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4">Classic Services</h4>
            <ul className="space-y-2">
              <li>Haircut - $25</li>
              <li>Beard Trim - $15</li>
              <li>Shave - $30</li>
              {/* Add more services */}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Premium Services</h4>
            <ul className="space-y-2">
              <li>Premium Haircut - $40</li>
              <li>Deluxe Beard Trim - $25</li>
              <li>Hot Towel Shave - $35</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Packages</h4>
            <ul className="space-y-2">
              <li>Haircut & Beard - $35</li>
              <li>Haircut & Shave - $50</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePricesSection;
