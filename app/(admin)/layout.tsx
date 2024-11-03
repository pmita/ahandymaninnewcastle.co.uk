// CONTEXT
import { AuthContextProvider } from "@/context/AuthContext";

export default async function SigninPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}