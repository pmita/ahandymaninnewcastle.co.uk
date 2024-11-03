"use client"

// NEXT
import { useRouter } from 'next/navigation';
// REACT
import { useCallback, useEffect } from 'react';
// COMPONETNS
import { FieldWithLabel } from '@/components/field-with-label';
import { Button, buttonVariants } from "@/components/ui/button";
// HOOKS
import { useAuth } from '@/hooks/useAuth';
// PACKAGES
import { useForm } from "react-hook-form";
import { useMutation } from '@tanstack/react-query';
// CONFIG
import { signinForm } from "@/config/forms";
// UTILS
import { cn } from "@/utils/helpers";
import { saveFirebaseCookie, signUserIn } from '@/utils/auth';

interface SignInFormProps {
  email: string;
  password: string;
}

export const SignInForm = () => {
  // STATE && VARIABLES
  const router = useRouter();
  const { setUser } = useAuth();
  const mutation = useMutation({
    mutationKey: ['signin'],
    mutationFn: async ({ email, password }: SignInFormProps) => {
      const response = await signUserIn(email, password);

      saveFirebaseCookie();
      setUser(response.user);
      console.log('User signed in successfully');
    },
    onSuccess: () => {
      router.push('/dashboard');
    },
    onError: (error) => {
      setUser(null);
      console.log(error);
    },
  })
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