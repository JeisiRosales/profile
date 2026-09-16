import { HeroSection } from "@/features/home/components/HeroSection";
import { TrustSection } from "@/features/home/components/TrustSection/TrustSection";
import { ServicesSection } from "@/features/home/components/ServiceSection";
import { AboutSection } from "@/features/home/components/AboutSection";
import { ContactSection } from "@/features/home/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />

      <div className="flex flex-col gap-24 md:gap-32 pt-24 md:pt-32">
        <TrustSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
}