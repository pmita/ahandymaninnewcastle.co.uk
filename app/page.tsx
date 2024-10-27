// NEXT
import Link from "next/link";
// COMPONENTS
import { bannerVariants } from "@/components/ui/banner";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DrillAndWrenchSVG, PaintBrushSVG, TillingSVG } from "@/components/SVGs";
import { LandingBanner } from "@/components/layout/landing-banner";
import { FaqSection } from "@/components/layout/faq-section";
// CONFIG
import { sellingPoints } from "@/config/selling-points";
// UTILS
import { cn } from "@/utils/helpers";

export default function Home() {
  return (
    <main className="container  px-5 pt-5">
      <LandingBanner />

      <section className={cn(bannerVariants({ variant: "center", size: "half", className: "flex-col items-stretch gap-10 pt-10 sm:pt-25" }))}>
        <h2 className="font-font font-poppins text-xl text-primary text-center">Our Expertise</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,300px))] auto-rows-[420px] gap-8 mx-0 my-4 p-4 justify-center">
          <Card className={cn("border-solid border-primary border-[0.3rem]")}>
            <CardHeader>
              <PaintBrushSVG width={48} height={48} fill="black"/>
              <CardTitle className="text-lg text-primary font-bold font-poppins">{sellingPoints[0].title}</CardTitle>
              <CardDescription className="text-primary font-roboto">
                {sellingPoints[0].description}
              </CardDescription>
            </ CardHeader>
          </Card>
          <Card className={cn("border-solid border-primary border-[0.3rem]")}>
            <CardHeader>
              <TillingSVG width={48} height={48} fill="black"/>
              <CardTitle className="text-lg text-primary font-bold font-poppins">{sellingPoints[1].title}</CardTitle>
              <CardDescription className="text-primary font-roboto">
              {sellingPoints[1].description}
              </CardDescription>
            </ CardHeader>
          </Card>
          <Card className={cn("border-solid border-primary border-[0.3rem]")}>
            <CardHeader>
              <DrillAndWrenchSVG width={48} height={48} fill="black"/>
              <CardTitle className="text-lg text-primary font-bold font-poppins">{sellingPoints[2].title}</CardTitle>
              <CardDescription className="text-primary font-roboto">
              {sellingPoints[2].description}
              </CardDescription>
            </ CardHeader>
          </Card>
        </div>
      </section>
      
      <section className={cn(bannerVariants({ variant: "center", size: "full", className: "flex-col items-stretch gap-2.5 py-5" }))}>
        <h2 className="font-font font-poppins text-xl text-alternate">FAQs</h2>
        <FaqSection />
      </section>
    </main>
  );
}
