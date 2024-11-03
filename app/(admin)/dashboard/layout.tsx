// COMPONENTS
import { AuthCheck } from '@/components/auth-check';
import { AdminNavbar } from '@/components/layout/admin-navbar';
import { SignInForm } from '@/components/forms/signin-form';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthCheck fallback={(
      <section className="min-h-[100dvh] grid place-content-center text-center gap-5">
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    )}>
        <AdminNavbar />
        {children}
    </AuthCheck>
  )
}