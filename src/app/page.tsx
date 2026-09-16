import { HeroSection } from "@/features/home/components/HeroSection";
import { TrustSection } from "@/features/home/components/TrustSection/TrustSection";
import { ServicesSection } from "@/features/home/components/ServiceSection";
import { AboutSection } from "@/features/home/components/AboutSection";
import { ContactSection } from "@/features/home/components/ContactSection/ContactSection";
import { ProjectsSection } from "@/features/projects/components/ProjectSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />

      <div className="flex flex-col">
        <TrustSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
}