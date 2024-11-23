// NEXT
import type { Metadata } from "next";
// COMPONENTS
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Learn more about our company and the team behind the home refurbishment services including painting, tiling, gardening, and building. Get in touch with us today",
};


export default async function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-stretch w-[375px] sm:w-[650px]">
      <ContactForm />
    </div>
  )
}