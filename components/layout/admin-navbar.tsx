"use client"

// NEXT
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// REACT
import { useCallback } from 'react';
// COMPONENTS
import { Button, buttonVariants } from '@/components/ui/button';
// HOOKS
import { useAuth } from '@/hooks/useAuth';
// PACKAGES
import { useMutation } from '@tanstack/react-query';
// UTILS
import { cn } from '@/utils/helpers';
import { signUserOut } from '@/utils/auth';

export const AdminNavbar = () => {
  // STATE && VARIABLES
  const router = useRouter();
  const { setUser } = useAuth();
  const mutation = useMutation({
    mutationKey: ['signout'],
    mutationFn: async () => {
      await signUserOut();
    },
    onSuccess: () => {
      setUser(null);
      router.push('/signin');
    },
    onError: (error) => {
      console.log(error);
    }
  })

  // EVENTS
  const onClick = useCallback(() => mutation.mutate(), [mutation]);


  return (
    <nav className="min-h-[10dvh] w-full flex flex-row justify-between items-center bg-primary px-4 py-6">
      <Link 
        href="/" 
        className="text-lg text-neutral font-poppins font-bold"
      >
        RefubCity Admin
      </Link>

      <Button 
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'lg' }), 
          "item-stretch"
        )}
        onClick={onClick}
      >
        Sign Out
      </ Button>
    </nav>
  );
}