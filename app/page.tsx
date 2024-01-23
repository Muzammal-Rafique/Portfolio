import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#121212]">
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
}
