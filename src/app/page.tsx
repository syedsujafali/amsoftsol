import AboutUs from "@/components/Aboutus";
import MainSection from "@/components/MainSection";
import Services from "@/components/Services";
import Portfolio from "@/portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <AboutUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Blog />
      <ContactSection />
    </>
  );
}
