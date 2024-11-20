// NEXT
import Link from "next/link";
// COMPONENTS
import { 
  Banner,
  BannerDescription, 
  BannerFooter, 
  BannerHeader, 
  BannerTitle, 
  bannerVariants
} from "@/components/ui/banner";
import { buttonVariants } from "@/components/ui/button";
// UTILS
import { cn } from "@/utils/helpers";

export const LandingBanner = () => {
  return (
    <Banner className={cn(bannerVariants({ variant: "center", className: "flex-col bg-primary min-h-[90vh]" }))}>
    <BannerHeader className="text-center max-w-[350px] sm:max-w-[600px]">
      <BannerTitle 
        className="text-3xl font-poppins font-bold text-neutral"
      >
        We paint, we build, we fix all your problems
      </BannerTitle>
      <BannerDescription className="text-md font-roboto font-bold text-neutral ">Affordable solutions to common problems, with a unique customer experience for everyday households</BannerDescription>
    </BannerHeader>        
    <BannerFooter className="text-center text-secondary gap-5">
      <Link 
        href="/contact"
        className={cn(buttonVariants({ variant: "outline", size: "lg", className: "outline-none" }))}
      >
        Get in touch
      </Link>
    </BannerFooter>
  </Banner>
  )
}