import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyInvartech from "@/components/WhyInvartech";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WhyInvartech />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
