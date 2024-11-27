// NEXT
import type { Metadata } from "next";
// COMPONENTS
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}/contact` || 'https://www.refubcity.co.uk/contact'),
  title: "Contact Us",
  description: "Learn more about our company and the team behind the home refurbishment services including painting, tiling, gardening, and building. Get in touch with us today",
  twitter: {
    card: "summary_large_image",
    title: "RefubCity - Professional Home Refurbishment",
  },
  openGraph: {
    type: 'website',
    locale: "en_GB",
    title: "RefubCity - Professional Home Refurbishment",
    description: "We offer expert home refurbishment services including painting, tiling, gardening, and general building.",
    url: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.refubcity.co.uk'),
    siteName: "RefubCity",
    images: [
      {
        url: `${new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.refubcity.co.uk')}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "RefubCity - Professional Home Refurbishment",
      },
    ], 
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
};


export default async function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-stretch w-[375px] sm:w-[650px]">
      <ContactForm />
    </div>
  )
}