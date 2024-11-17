// NEXT
import { redirect } from 'next/navigation';
// DATA
import { validateUserSS } from '@/data/auth';
// COMPONENTS
import { AdminNavbar } from '@/components/layout/admin-navbar';
import { LayoutFilters } from '@/components/layout-filters';
import { StatusFilters } from '@/components/status-filters';

type SeaerchParams = {
  [key: string]: string | undefined;
}

type DashboardLayoutProps = {
  children: React.ReactNode;
  params: SeaerchParams;
}


export default async function DashboardLayout({ children, params }: DashboardLayoutProps) {
  // SERVER LAND
  const isUserValid = await validateUserSS();
  const { status, display } = params;

  if (!isUserValid) redirect("/signin");
  
  return (
    <>
      <AdminNavbar />
      <section className="flex flex-row justify-between items-stretch flex-wrap pt-4">
        <StatusFilters status={status || 'ALL'} />
        <LayoutFilters layoutView={display || 'GRID'} />
      </section>
      {children}
    </>
  )
}