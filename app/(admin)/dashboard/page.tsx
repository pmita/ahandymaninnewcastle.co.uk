import { StatusFilters } from "@/components/status-filters";

type SeaerchParams = {
  [key: string]: string | undefined;
}

export default async function DashboardPage({ searchParams }: { searchParams: SeaerchParams }) {
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <h1>Dashboard</h1>
      <section className="flex flex-row justify-between items-stretch flex-wrap">
        <StatusFilters status={searchParams.status || 'ALL'} />
      </section>
    </section>
  );
}