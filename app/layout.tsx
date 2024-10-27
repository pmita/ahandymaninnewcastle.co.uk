import type { Metadata } from "next";
import Link from "next/link";
// COMPONENTS
import { NavMenu } from "./_components/nav-menu";
import { 
  BannerDescription, 
  BannerFooter, 
  BannerHeader, 
  BannerTitle, 
  bannerVariants 
} from "@/components/banner";
// UTILS
import { roboto, poppins } from "@/utils/fonts";
import { cn } from "@/utils/helpers";
// STYLES
import '@/styles/global.css';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={cn(
          "min-h-screen bg-background font-roboto antialiased",
          roboto.variable,
          poppins.variable
        
        )}
      >
        <NavMenu />
        {children}
        <footer className={cn(bannerVariants({ variant: "center", size: "quarter", className: "flex-col bg-alternate" }))}>
          <BannerHeader className="text-center">
            <BannerTitle 
              className="text-xl font-poppins font-bold text-secondary"
            >
              Our Links
            </BannerTitle>
            <BannerDescription className="text-md font-roboto font-bold text-secondary">
              <div className="text-center text-secondary flex justify-center gap-5">
                <Link 
                  href="/projects"
                  className="text-secondary text-lg font-poppins font-bold hover:opacity-80"
                >
                  Projects
                </Link>
                <Link 
                  href="/contact"
                  className="text-secondary text-lg font-poppins font-bold hover:opacity-80"
                >
                  Contact
                </Link>
                <Link 
                  href="/privacy-policy"
                  className="text-secondary text-lg font-poppins font-bold hover:opacity-80"
                >
                  Privacy Policy
                </Link>
              </div>
            </BannerDescription>
          </BannerHeader>
          <BannerFooter className="text-secondary flex flex-col">
            <p>Trademark ™ A handy man in newcastle</p>
            <p>Copyright © 2024 ahandymaninnewcastle.co.uk. All rights reserved.</p>
          </BannerFooter>
        </footer>
      </body>
    </html>
  );
}
