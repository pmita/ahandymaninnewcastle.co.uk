// NEXT
import Link from "next/link";
import Image from "next/image";
// COMPONENTS
import { 
  Banner,
  BannerDescription, 
  BannerFooter, 
  BannerHeader, 
  BannerTitle, 
  bannerVariants
} from "@/components/banner";
import { buttonVariants } from "@/components/ui/button";
// UTILS
import { cn } from "@/utils/helpers";

export default function Home() {
  return (
    <main className="container p-10">
      <Banner className={cn(bannerVariants({ variant: "center", size: "threeQuarters", className: "flex-col bg-alternate rounded-[25px]" }))}>
        <BannerHeader className="text-center max-w-[350px] sm:max-w-[600px]">
          <BannerTitle 
            className="text-2xl font-bold text-secondary"
          >
            We paint, we build, we fix all your problems
          </BannerTitle>
          <BannerDescription className="text-md font-bold text-secondary ">Affordable solutions to common problems, with a unique customer experience for everyday households</BannerDescription>
        </BannerHeader>        
        <BannerFooter className="text-center text-secondary gap-5">
          <Link 
            href="/contact"
            className={cn(buttonVariants({ variant: "alternate", size: "lg" }))}
          >
            Get in touch
          </Link>
          <Link 
            href="/contact"
            className={cn(buttonVariants({ variant: "alternateOutlined", size: "lg" }))}
          >
            Our work
          </Link>
        </BannerFooter>
      </Banner>
    </main>
  );
}
