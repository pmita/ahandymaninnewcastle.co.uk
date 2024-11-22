"use client"

// NEXT
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// REACT
import { useCallback } from 'react';
// COMPONENTS
import { Button, buttonVariants } from '@/components/ui/button';
import { toast } from 'sonner';
// HOOKS
import { useAuth } from '@/hooks/useAuth';
// PACKAGES
import { useMutation } from '@tanstack/react-query';
// UTILS
import { cn } from '@/utils/helpers';
import { signUserOut } from '@/utils/auth';
import { removeAuthCookie } from '@/utils/cookies';

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
      removeAuthCookie();
      setUser(null);
      router.push('/signin');
    },
    onError: (error) => {
      toast("Something went wrong", {
        action: {
          label: "Close",
          onClick: () => toast.dismiss(),
        }
      })
    }
  })

  // EVENTS
  const onClick = useCallback(() => mutation.mutate(), [mutation]);


  return (
    <nav className="min-h-[10dvh] w-full flex justify-between items-center bg-neutral px-4 py-6">
      <Link 
        href="/" 
        className="text-lg text-primary font-poppins font-bold"
      >
        RefubCity Admin
      </Link>

      <Button 
        className={cn(
          buttonVariants({ variant: 'secondary' }), 
          "item-stretch"
        )}
        onClick={onClick}
      >
        Sign Out
      </ Button>
    </nav>
  );
}