// NEXT
import { useRouter } from "next/navigation";
// PACKAGES
import { useMutation } from "@tanstack/react-query";
// COMPONENTS
import { toast } from "sonner";
// HOOKS
import { useAuth } from "./useAuth";
// UTILS
import { signUserIn, saveFirebaseCookie } from "@/utils/auth";


export const useSignin = () => {
    // STATE && VARIABLES
    const router = useRouter();
    const { setUser } = useAuth();
    return useMutation({
      mutationKey: ['signin'],
      mutationFn: async ({ email, password }: { email: string, password: string }) => {
        const response = await signUserIn(email, password);
        
        if(response.user) {
          await saveFirebaseCookie();
          setUser(response.user);
        }
      },
      onSuccess: () => {
        router.push('/dashboard');
      },
      onSettled: () => {
        toast.dismiss('loading-signin-form');
      },
      onError: (error) => {
        setUser(null);
        toast("Something went wrong", {
          description: error.message,
          action: {
            label: "Close",
            onClick: () => toast.dismiss(),
          }
        })
      },
    })
}