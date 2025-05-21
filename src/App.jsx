import React, { Suspense } from "react";
import Header from "./components/Header";
import InfoBar from "./components/InfoBar";

const HeroSection = React.lazy(() => import("./components/HeroSection"));
const AboutSection = React.lazy(() => import("./components/AboutSection"));
const ServicesSection = React.lazy(() =>
  import("./components/ServicesSection")
);
const WhyChooseUsSection = React.lazy(() =>
  import("./components/WhyChooseUsSection")
);
const GallerySection = React.lazy(() => import("./components/GallerySection"));
const ServicePricesSection = React.lazy(() =>
  import("./components/ServicePricesSection")
);
const TestimonialsSection = React.lazy(() =>
  import("./components/TestimonialsSection")
);
const ContactSection = React.lazy(() => import("./components/ContactSection"));
const Footer = React.lazy(() => import("./components/Footer"));

const AnimatedSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-900 dark:text-gray-100">
    <svg
      width="80px"
      height="80px"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      className="text-amber-500 dark:text-teal-400"
    >
      <circle cx="25" cy="25" r="20" strokeWidth="4" fill="none">
        <animate
          attributeName="stroke-dasharray"
          values="1,150;90,150;90,150"
          times="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values="0;-35;-124"
          times="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="currentColor;currentColor;currentColor"
          times="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
      Loading content...
    </p>
  </div>
);

function App() {
  return (
    <>
      <InfoBar />
      <Header />

      <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
        <Suspense fallback={<AnimatedSpinner />}>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyChooseUsSection />
          <GallerySection />
          <ServicePricesSection />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
