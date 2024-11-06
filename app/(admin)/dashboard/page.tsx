// REACT
import { Suspense } from "react";
// COMPONENTS
import Items from "@/components/items/items";
import { StatusFilters } from "@/components/status-filters";
import { LayoutFilters } from "@/components/layout-filters";

type SeaerchParams = {
  [key: string]: string | undefined;
}

export default async function DashboardPage({ searchParams }: { searchParams: SeaerchParams }) {
  return (
    <>
      <h1>Dashboard</h1>
      <section className="flex flex-row justify-between items-stretch flex-wrap">
        <StatusFilters status={searchParams.status || 'ALL'} />
        <LayoutFilters layoutView={searchParams.display || 'GRID'} />
      </section>
      <Suspense fallback={(<h1>Loading ...</h1>)}>
        <Items status={searchParams.status || 'ALL'} />
      </Suspense>
    </>
  );
}