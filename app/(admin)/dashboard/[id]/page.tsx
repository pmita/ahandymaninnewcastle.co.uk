// REACT
import { Suspense } from "react";
// DATA
import { getCollectionData, getDocumentData } from "@/data/firestore";
// PACKAGES
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// COMPONENTS
import ItemLayout from "@/components/item/item-layout";

interface DashboardItemPageProps {
  params: {
    id: string;
  };
}

export default async function DashboardItemPage({ params }: DashboardItemPageProps) {
  // SERVER LAND
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['queries', { id: id }],
    queryFn: async () => {
      return await getDocumentData('queries', id);
    },
  })
  await queryClient.prefetchQuery({
    queryKey: ['comments', { id }],
    queryFn: async () => {
      return getCollectionData(`queries/${id}/comments`, { sort: 'asc' });
    },
  })

  return (
    <Suspense fallback={(<h1>Loading...</h1>)}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ItemLayout id={id} />
      </HydrationBoundary>
    </Suspense>
  );
} 