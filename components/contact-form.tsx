"use client"

// COMPONENTS
import { InputField } from "@/inputs/input-field";
import TextAreaField from "@/inputs/text-area";
import { Button, buttonVariants } from "./ui/button";
// PACKAGES
import { type SubmitHandler, useForm } from "react-hook-form";
// CONFIG
import { contactForm, contactTextAreForm } from "@/config/forms";
// UTILS
import { cn } from "@/utils/helpers";
// TYPES
import { IContactForm, ContactFormErrors } from "@/types";


export const ContactForm = () => {
  // STATE & HOOKS
  const { register, handleSubmit, formState: { errors } } = useForm<IContactForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      location: '',
      additionalInfo: ''
    }
  })

  // EVENTS
  const onSubmit: SubmitHandler<IContactForm> = async ({ fullName, email, mobile, location, additionalInfo }: IContactForm) => {
    console.log({ fullName, email, mobile, location, additionalInfo });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-start gap-5">
      <h1 className="text-lg text-alternate font-bold">Get in touch!</h1>
      {contactForm && contactForm.map((input) => (
        <InputField
          key={input.id}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          register={register}
          validationSchema={input.validationSchema}
          error={errors[input.name as keyof ContactFormErrors]?.message}
        />
      ))}

      {contactTextAreForm && (
        <TextAreaField
          name={contactTextAreForm.name}
          placeholder={contactTextAreForm.placeholder}
          register={register}
          validationSchema={contactTextAreForm.validationSchema}
          error={errors[contactTextAreForm.name as keyof ContactFormErrors]?.message}
        />
      )}

      <Button type="submit" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
        Submit
      </Button>
    </form>
  )
}