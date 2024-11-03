import ItemsList from "@/components/items-list";
import { StatusFilters } from "@/components/status-filters";
// REACT
import { Suspense } from "react";

type SeaerchParams = {
  [key: string]: string | undefined;
}

export default async function DashboardPage({ searchParams }: { searchParams: SeaerchParams }) {
  return (
    <>
      <h1>Dashboard</h1>
      <section className="flex flex-row justify-between items-stretch flex-wrap">
        <StatusFilters status={searchParams.status || 'ALL'} />
      </section>
      <Suspense fallback={(<h1>Loading ...</h1>)}>
        <ItemsList status={searchParams.status || 'ALL'} />
      </Suspense>
    </>
  );
}