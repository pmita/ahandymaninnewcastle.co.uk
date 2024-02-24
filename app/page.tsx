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
    <Banner className={cn(bannerVariants({ variant: "split", size: 'full' }))}>
      <BannerHeader className="bg-black flex-1 flex flex-col justify-center items-start">
        <BannerTitle className="text-xl">We <span className="text-alternate">paint</span>, we <span className="text-alternate">build</span>, and we <span className="text-alternate">fix</span> all your house related problems</BannerTitle>
        <BannerDescription>Affordable solutions to common problems, with a unique customer experience for everyday households</BannerDescription>
      </BannerHeader>        
      <BannerFooter className="bg-primary flex-1 grid place-content-center">
        <p>Footer content</p>
      </BannerFooter>
    </Banner>
  );
}
