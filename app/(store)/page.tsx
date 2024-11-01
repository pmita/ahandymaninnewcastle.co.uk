// COMPONENTS
import { LandingBanner } from "@/components/layout/landing-banner";
import { FaqSection } from "@/components/layout/faq-section";
import { FeaturesSection } from "@/components/layout/features-section";

export default function HomePage() {
  return (
    <main className="container  px-5 pt-5">
      <LandingBanner />
      <FeaturesSection />
      <FaqSection />
    </main>
  );
}
