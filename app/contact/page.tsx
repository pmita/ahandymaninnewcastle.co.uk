// COMPONENTS
import { ContactForm } from "@/components/contact-form";


export default async function ContactPage() {
  return (
    <main className="flex flex-col justify-center items-stretch w-[450px] p-4 bg-secondary">
      <ContactForm />
    </main>
  )
}