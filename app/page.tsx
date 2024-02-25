// COMPONENTS
import { 
  Banner,
  BannerDescription, 
  BannerFooter, 
  BannerHeader, 
  BannerTitle, 
  bannerVariants
} from "@/components/banner";
// UTILS
import { cn } from "@/utils/helpers";

export default function Home() {
  return (
    <Banner className={cn(bannerVariants({ variant: "split", className: "min-h-[90vh]" }))}>
      <section className="bg-black flex-1 flex flex-col justify-center items-center">
        <BannerHeader>
          <BannerTitle 
            className="text-xl max-w-[350px] md:max-w-[500px]"
          >
            We <span className="text-alternate">paint</span>, we <span className="text-alternate">build</span>, we <span className="text-alternate">fix</span> all your house related problems
          </BannerTitle>
          <BannerDescription>Affordable solutions to common problems, with a unique customer experience for everyday households</BannerDescription>
        </BannerHeader>        
        <BannerFooter className="text-center text-secondary">
          <p>Footer content</p>
        </BannerFooter>
      </section>
      <section className="bg-red flex-1 flex flex-col justify-center items-start">
        <h1>Image will go here</h1>
      </section>
    </Banner>
  );
}
