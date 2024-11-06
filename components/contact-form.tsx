"use client"

// SERVER ACTIONS
import { addQueryToDB } from "@/data/firestore";
// COMPONENTS
import { Button } from "@/components/ui/button";
import { FieldWithLabel } from "@/components/field-with-label";
// PACKAGES
import { type SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
// CONFIG
import { contactForm, honeyPotInput } from "@/config/forms";
// TYPES
import { IContactForm } from "@/types";


export const ContactForm = () => {
  // STATE & HOOKS
  const mutation = useMutation({
    mutationKey: ['addQueryToDB'],
    mutationFn: async (formDetails: IContactForm) => {
      await addQueryToDB('queries', formDetails);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      console.log('Query added to the database');
    }
  });
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
  });

  // EVENTS
  const onSubmit: SubmitHandler<IContactForm> = async ({ fullName, email, mobile, location, additionalInfo, goodToKnow }: IContactForm) => {
    // Check if the honeypot input is filled before sbubmitting the form in the db
    if (!goodToKnow) {
      mutation.mutate({ 
        fullName, 
        email, 
        mobile, 
        location, 
        additionalInfo, 
        goodToKnow 
      });
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

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Sending...' : 'Submit'}
      </Button>
    </form>
  )
}