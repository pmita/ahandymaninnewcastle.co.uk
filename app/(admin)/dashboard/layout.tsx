// COMPONENTS
import { AdminNavbar } from '@/components/layout/admin-navbar';
import { validateUserSS } from '@/data/auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isUserValid = await validateUserSS();

  if (!isUserValid) redirect("/signin");
  
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  )
}