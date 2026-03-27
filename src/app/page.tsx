import MainSection from "@/components/MainSection";
import Services from "@/components/Services";
import AboutUs from "@/components/Aboutus";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <div className="bg-[#020617]">
        <AboutUs />
        <Services />
        <Testimonials />
        <FAQ />
        <Blog />
        <ContactSection />
      </div>
    </>
  );
}
