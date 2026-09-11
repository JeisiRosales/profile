import { HeroSection } from "@/features/home/components/HeroSection";
import { TrustSection } from "@/features/home/components/TrustSection/TrustSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />

      <div className="flex flex-col gap-24 md:gap-32 py-24 md:py-32">
        <TrustSection />
      </div>
    </main>
  );
}