import ContactSection from "./components/ContactSection.jsx";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import MeetOurBarbersSection from "./components/MeetOurBarbersSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import ServicePricesSection from "./components/ServicePricesSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import WhyChooseUsSection from "./components/WhyChooseUsSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import InfoBar from "./components/InfoBar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <HeroSection />
      <InfoBar />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ServicePricesSection />
      <GallerySection />
      <MeetOurBarbersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
