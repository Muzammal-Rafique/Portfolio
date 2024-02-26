import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/skills/Skills";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/projects/Project";
import EmailSection from "@/components/email/Email";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Project />
      <EmailSection />
      <Footer />
    </div>
  );
}
