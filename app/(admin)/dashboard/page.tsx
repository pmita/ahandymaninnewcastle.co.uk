// REACT
import { Suspense } from "react";
// DATA
import { getCollectionData } from '@/data/firestore';
// PACKAGES
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
// COMPONENTS
import { ItemsLayout } from "@/components/items/items-layout";
import { StatusFilters } from "@/components/status-filters";
import { LayoutFilters } from "@/components/layout-filters";
// UTILS
import { BASE_LIMIT } from "@/utils/constants";

type SeaerchParams = {
  [key: string]: string | undefined;
}

export default async function DashboardPage({ searchParams }: { searchParams: SeaerchParams }) {
  // SERVER LAND
  const { status, limit, sort, display } = searchParams;
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['queries', { status, limit, sort }],
    initialPageParam: { 
      status: status ?? 'ALL', 
      limit: limit ? Number(limit) : BASE_LIMIT, 
      sort: sort ?? 'desc', 
      startAfter: null 
    },
    staleTime: 60 * 1000,
    queryFn: async ({ pageParam }: { pageParam: any}) => {
      return await getCollectionData('queries', pageParam);
    },
  })

  return (
    <>
      <section className="flex justify-between items-stretch flex-wrap gap-4 my-4">
        <StatusFilters status={status || 'ALL'} />
        <LayoutFilters layoutView={display || 'GRID'} />
      </section>
      <Suspense fallback={(<h1>Loading ...</h1>)}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ItemsLayout />
        </HydrationBoundary>
      </Suspense>
    </>
  );
}