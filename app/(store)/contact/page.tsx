// COMPONENTS
import { ContactForm } from "@/components/forms/contact-form";


export default async function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-stretch w-[375px] sm:w-[650px]">
      <ContactForm />
    </div>
  )
}