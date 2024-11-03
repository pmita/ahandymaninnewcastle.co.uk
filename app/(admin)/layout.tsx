// CONTEXT
import { AuthContextProvider } from "@/context/AuthContext";

export default function SigninPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}