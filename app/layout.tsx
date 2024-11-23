// NEXT
import type { Metadata } from "next";
// COMPONENTS
import { CSPostHogProvider } from "./_analytics/provider";
import { ReactQueryProvider } from "./_react-query/provider";
import { Toaster } from "@/components/ui/sonner";
// UTILS
import { roboto, poppins } from "@/utils/fonts";
import { cn } from "@/utils/helpers";
// STYLES
import '@/styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.refubcity.co.uk'),
  title: {
    default: "RefubCity",
    template: "%s - RefubCity",
  },
  description: "We offer home refurbishment services including painting, tiling, gardening, and general building. Contact us for professional home improvements",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "RefubCity - Professional Home Refurbishment",
    description: "We offer expert home refurbishment services including painting, tiling, gardening, and general building.",
    url: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.refubcity.co.uk'),
    siteName: "RefubCity",
    images: [
      {
        url: `${new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.refubcity.co.uk')}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "RefubCity - Professional Home Refurbishment",
      },
    ], 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <CSPostHogProvider>
          <body 
            className={cn(
              "min-h-screen bg-background font-roboto antialiased",
              roboto.variable,
              poppins.variable
              
            )}
            >
              <main className="container">
                {children}
              </main>
              <Toaster />
          </body>
        </CSPostHogProvider>
        </ReactQueryProvider>
    </html>
  );
}
