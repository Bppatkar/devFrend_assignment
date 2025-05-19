import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        //end: 'bottom top', // Removed fixed end point.
        scrub: 0.5, // Add smooth scrubbing
        //markers: true, // For debugging
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      0.2
    );
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      0.4
    );
    tl.fromTo(
      [button1Ref.current, button2Ref.current],
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      0.6
    );
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
      0.4
    );
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-amber-50 to-amber-100"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4">
            Ready for a Fresh Cut?
          </h1>
          <p ref={paragraphRef} className="text-lg text-gray-600 mb-6">
            Visit PMC Barbershop for premium men's grooming services. Our expert
            barbers are ready to give you a clean, precise cut and a relaxing
            barbershop experience.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button ref={button1Ref} className="btn-primary">
              Book an Appointment
            </Button>
            <Button ref={button2Ref} className="btn-secondary">
              View Our Services
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
              alt="Barber cutting hair"
              className="rounded-lg shadow-xl w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
