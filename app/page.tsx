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
        <BannerTitle>Home</BannerTitle>
        <BannerDescription>Home page description</BannerDescription>
      </BannerHeader>        
      <BannerFooter className="bg-primary flex-1 grid place-content-center">
        <p>Footer content</p>
      </BannerFooter>
    </Banner>
  );
}
