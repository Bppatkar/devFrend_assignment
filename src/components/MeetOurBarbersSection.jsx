import { useEffect, useRef } from "react";
import gsap from "gsap";

import { barbers } from "./../ImpExp.jsx";

const MeetOurBarbersSection = () => {
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
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Barbers</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <div key={index} className="barber-card">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{barber.name}</h3>
              <p className="text-gray-500 mb-2">{barber.title}</p>
              <p className="text-gray-600">{barber.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurBarbersSection;
