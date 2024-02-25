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
} from "@/components/banner";
import { buttonVariants } from "@/components/ui/button";
// UTILS
import { cn } from "@/utils/helpers";

export default function Home() {
  return (
    <Banner className={cn(bannerVariants({ variant: "split", className: "min-h-[90vh]" }))}>
      <section className="flex-1 flex flex-col justify-center items-center">
        <BannerHeader className="max-w-[350px] md:max-w-[500px]">
          <BannerTitle 
            className="text-xl text-primary"
          >
            We <span className="text-alternate">paint</span>, we <span className="text-alternate">build</span>, we <span className="text-alternate">fix</span> all your house related problems
          </BannerTitle>
          <BannerDescription className="text-primary">Affordable solutions to common problems, with a unique customer experience for everyday households</BannerDescription>
        </BannerHeader>        
        <BannerFooter className="text-center text-secondary gap-5">
          <Link 
            href="/contact"
            className={cn(buttonVariants({ variant: "primary" }))}
          >
            Get in touch
          </Link>
          <Link 
            href="/contact"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Our work
          </Link>
        </BannerFooter>
      </section>
      <section className="bg-red flex-1 flex flex-col justify-center items-start">
        <h1>Image will go here</h1>
      </section>
    </Banner>
  );
}
