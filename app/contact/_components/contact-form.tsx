"use client"

// SERVER ACTIONS
import { addQueryToDB } from "../actions";
// COMPONENTS
import { Button } from "@/components/ui/button";
import { FieldWithLabel } from "@/components/field-with-label";
// HOOKS
import { useFirestore } from "@/hooks/useFirestore";
// PACKAGES
import { type SubmitHandler, useForm } from "react-hook-form";
// CONFIG
import { contactForm, honeyPotInput } from "@/config/forms";
// TYPES
import { IContactForm } from "@/types";


export const ContactForm = () => {
  // STATE & HOOKS
  const { addDocument, hasQueryBeenSent } = useFirestore();
  const { register, handleSubmit, formState: { errors }, reset} = useForm<IContactForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      location: '',
      additionalInfo: '',
      goodToKnow: ''
    }
  })

  // EVENTS
  const onSubmit: SubmitHandler<IContactForm> = async ({ fullName, email, mobile, location, additionalInfo, goodToKnow }: IContactForm) => {
    // Check if the honeypot input is filled before sbubmitting the form in the db
    if (!goodToKnow) {
      await addQueryToDB(
        'queries', {
          fullName,
          email,
          mobile,
          location,
          additionalInfo
        }
      )
    }

    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-xl mb-12 font-poppins font-extrabold text-secondary text-center">Get in touch!</h1>

      {contactForm && contactForm.map((field) => (
        <FieldWithLabel
          key={field.id}
          name={field.name}
          type={field.type}
          componentType={field.componentType}
          placeholder={field.placeholder}
          register={register}
          validationSchema={field.validationSchema}
          error={errors[field.name as keyof IContactForm]?.message}
        />
      ))}

      {honeyPotInput && (
        <FieldWithLabel
          className="hidden"
          name={honeyPotInput.name}
          type={honeyPotInput.type}
          componentType={honeyPotInput.componentType}
          placeholder={honeyPotInput.placeholder}
          register={register}
        />
      )}

      <Button type="submit">
        Submit
      </Button>

      {hasQueryBeenSent && (
        <p className="text-lg text-poppins text-alternate text-center font-bold">Query has been sent!</p>
      )}
    </form>
  )
}