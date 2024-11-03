// COMPONENTS
import { LandingBanner } from "@/components/layout/landing-banner";
import { FaqSection } from "@/components/layout/faq-section";
import { FeaturesSection } from "@/components/layout/features-section";

export default function HomePage() {
  return (
    <>
      <LandingBanner />
      <FeaturesSection />
      <FaqSection />
    </>
  );
}
