// NEXT
import Link from "next/link";
// COMPONENTS
import { 
  BannerDescription, 
  BannerFooter, 
  BannerHeader, 
  BannerTitle, 
  bannerVariants 
} from "@/components/ui/banner";
// UTILS
import { cn } from "@/utils/helpers";

export const Footer = () => {
  return (
    <footer className={cn(bannerVariants({ variant: "center", size: "quarter", className: "flex-col bg-primary" }))}>
    <BannerHeader className="text-center">
      <BannerTitle 
        className="text-xl font-poppins font-bold text-neutral"
      >
        Our Links
      </BannerTitle>
      <BannerDescription className="text-md font-roboto font-bold text-neutral">
        <div className="text-center text-neutral flex justify-center gap-5">
          <Link 
            href="/projects"
            className="text-neutral text-lg font-poppins font-bold hover:opacity-80"
          >
            Projects
          </Link>
          <Link 
            href="/contact"
            className="text-neutral text-lg font-poppins font-bold hover:opacity-80"
          >
            Contact
          </Link>
          <Link 
            href="/privacy-policy"
            className="text-neutral text-lg font-poppins font-bold hover:opacity-80"
          >
            Privacy Policy
          </Link>
        </div>
      </BannerDescription>
    </BannerHeader>
    <BannerFooter className="text-neutral flex flex-col">
      <p>Trademark ™ A handy man in newcastle</p>
      <p>Copyright © 2024 ahandymaninnewcastle.co.uk. All rights reserved.</p>
    </BannerFooter>
  </footer>
  )
}