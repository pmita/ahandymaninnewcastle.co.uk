"use client"

// NEXT
import { useRouter } from 'next/navigation';
// REACT
import { useCallback } from 'react';
// COMPONETNS
import { FieldWithLabel } from '@/components/field-with-label';
import { Button, buttonVariants } from "@/components/ui/button";
// HOOKS
import { useSignin } from '@/hooks/useSignin';
// PACKAGES
import { useForm } from "react-hook-form";
// CONFIG
import { signinForm } from "@/config/forms";
// UTILS
import { cn } from "@/utils/helpers";

interface SignInFormProps {
  email: string;
  password: string;
}

export const SignInForm = () => {
  // STATE && VARIABLES
  const router = useRouter();
  const mutation = useSignin();
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormProps>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    }
  });

  // EVENTS
  const onSubmit = useCallback(async ({email, password }: SignInFormProps) => {
    mutation.mutate({ email, password });

    if (mutation.isSuccess) router.push('/dashboard');
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[300px] flex flex-col justify-center items-center gap-5">
      {signinForm && signinForm.map((input) => (
        <FieldWithLabel
          key={input.id}
          name={input.name}
          type={input.type}
          register={register}
          validationSchema={input.validationSchema}
          placeholder={input.placeholder}
          error={errors[input.name as keyof SignInFormProps]?.message}
        />
      ))}

      {mutation.isError && <p className="text-red-500 text-sm">Invalid email or password</p>}

      <Button 
        className={cn(buttonVariants({ variant: "default", size: "lg" }))} 
        type="submit" 
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Loading...' : 'Sign In'}
      </Button>
    </form> 
  );
}