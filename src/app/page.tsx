import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Services from "@/components/Services";
import WhyHunaix from "@/components/WhyHunaix";
import DigitalSolutions from "@/components/DigitalSolutions";
import Methodology from "@/components/Methodology";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <ProblemSection />
      <Services />
      <WhyHunaix />
      <DigitalSolutions />
      <Methodology />
      <CTA />
      <Footer />
    </main>
  );
}

