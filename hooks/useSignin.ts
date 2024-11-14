// NEXT
import { useRouter } from "next/navigation";
// PACKAGES
import { useMutation } from "@tanstack/react-query";
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
}