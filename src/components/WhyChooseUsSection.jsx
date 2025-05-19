import { useEffect, useRef } from "react";

const WhyChooseUsSection = () => {
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
          <h2 className="text-3xl font-bold mb-4">
            Why Choose PMC Barbershop?
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <CheckCircle className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Barbers</h3>
            <p className="text-gray-600">
              Our barbers are highly skilled and experienced.
            </p>
          </div>
          <div className="feature-card">
            <CheckCircle className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Products</h3>
            <p className="text-gray-600">
              We use only the best tools and products.
            </p>
          </div>
          <div className="feature-card">
            <CheckCircle className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Classic Experience</h3>
            <p className="text-gray-600">
              Enjoy the traditional barbershop atmosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
