import React, { Suspense } from "react"; 
import Header from "./components/Header";
import InfoBar from "./components/InfoBar";

// Lazily load components
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

function App() {
  return (
    <>
      <InfoBar />
      <Header />
      <main>
        {/* Wrap lazily loaded components in Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          {/* You can put a loading spinner or skeleton here */}
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
      <Suspense fallback={<div></div>}>
        {" "}
        {/* Footer can have a minimal fallback or none */}
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
