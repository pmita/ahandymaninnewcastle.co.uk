"use client"

// NEXT
import { useSearchParams } from "next/navigation"
// DATA
import { getCollectionData } from "@/data/firestore"
// PACKAGES
import { useInfiniteQuery } from "@tanstack/react-query"
// COMPONENTS
import { ItemsInTable } from "./items-in-table";
import { ItemsInGrid } from "./items-in-grid";
import { Button, buttonVariants } from "@/components/ui/button"
// TYPES
import { IQueryItem } from "@/types/firestore";

type ComponentTypeMap = Record<string, React.ElementType>;

const ComponentType: ComponentTypeMap = {
  'GRID': ItemsInGrid,
  'TABLE': ItemsInTable,
}

const itemsPerPage = 2;

export const ItemsLayout = ({ items }: { items: IQueryItem[] }) => {
  // STATE && VARIABLES
  const searchParams = useSearchParams();
  const status = searchParams.get('status') || 'ALL';
  const display = searchParams.get('display') || 'GRID';
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery<FirebaseFirestore.DocumentData[]>({
    queryKey: ['queries', { status }],
    queryFn: async ({ pageParam }: { pageParam: any}) => {
      return await getCollectionData('queries', pageParam);
    },
    initialPageParam: { 
      status,
      numberOfItems: itemsPerPage,
      sort: 'desc',
      lastItem: null 
    },
    getNextPageParam: (lastPage) => {
      const lastItem = lastPage[lastPage.length - 1]
      const lastItemTimestamp = typeof lastItem.createdAt === 'number'
      ? new Date(lastItem.createdAt)
      : lastItem.createdAt;

      return lastPage.length < itemsPerPage
        ? undefined 
        : {       
          status,
          numberOfItems: itemsPerPage,
          sort: 'desc',
          lastItem: lastItemTimestamp 
        };
    },
    
  });

  const allItems = data?.pages.flat() ?? [];

  // LAYOUT
  const Component = ComponentType[display] || ComponentType['TABLE'];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading items.</div>;
  if (!allItems.length) return <div>No items found.</div>;

  return (
    <div>
      <Component items={allItems as IQueryItem[]} />
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        {hasNextPage ? (
          <Button className={buttonVariants({ variant: 'default', size: 'lg' })} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </Button>
        ) : <h1>No more items</h1>}
      </div>
    </div>
  );
}
