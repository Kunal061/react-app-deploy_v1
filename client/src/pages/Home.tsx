import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackCarousel from "@/components/TechStackCarousel";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-background">
      <Navbar />
      <HeroSection />
      <TechStackCarousel />
    </div>
  );
}
