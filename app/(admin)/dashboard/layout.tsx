// NEXT
import { redirect } from 'next/navigation';
// DATA
import { validateUserSS } from '@/data/auth';
// COMPONENTS
import { AdminNavbar } from '@/components/layout/admin-navbar';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // SERVER LAND
  const isUserValid = await validateUserSS();

  if (!isUserValid) redirect("/signin");
  
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  )
}