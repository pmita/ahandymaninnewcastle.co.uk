"use client"

// HOOKS
import { useAddQuery } from "@/hooks/useAddQuery";
// PACKAGES
import { toast } from "sonner";
// COMPONENTS
import { Button, buttonVariants } from "@/components/ui/button";
import { FieldWithLabel } from "@/components/field-with-label";
import { LoadingSpinner } from "../loading-spinner";
// PACKAGES
import { type SubmitHandler, useForm } from "react-hook-form";
// CONFIG
import { contactForm, honeyPotInput } from "@/config/forms";
// TYPES
import { IQueryForm } from "@/types";

interface IContactForm extends IQueryForm {
  goodToKnow: string;
}

export const ContactForm = () => {
  // STATE & HOOKS
  const mutation = useAddQuery();
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
        status: 'INITIAL',
      });
    }

    if (mutation.isIdle) {
      toast(
        <div className="flex justify-center items-center gap-4">
          <LoadingSpinner /> Loadding...
        </div>, {
          id: 'loading-contact-form',
      })
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

      <Button className={buttonVariants({ size: 'lg' })} type="submit" disabled={mutation.isPending}>
        Submit
      </Button>
    </form>
  )
}