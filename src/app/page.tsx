import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Builds from "@/components/sections/Builds";
import Contact from "@/components/sections/Contact";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      {/* Film grain noise overlay */}
      <div className="noise" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Builds />
        <CTABanner />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
