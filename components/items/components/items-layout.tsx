"use client"

// NEXT
import { useSearchParams } from "next/navigation"
// REACT
import { useState, useEffect } from "react"
// DATA
import { getCollectionData } from "@/data/firestore"
// PACKAGES
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
// COMPONENTS
import { ItemsInTable } from "./items-in-table";
import { ItemsInGrid } from "./items-in-grid";
// TYPES
import { IQueryItem } from "@/types/firestore";
import { fromMillis } from "@/firebase/client-config";
import { query, Timestamp } from "firebase/firestore";
import { Button, buttonVariants } from "@/components/ui/button"

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
  const [itemsOnTheScreen, setItemsOnTheScreen] = useState<IQueryItem[]>(items);
  // const {
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   isLoading,
  //   isError,
  // } = useInfiniteQuery<any>({
  //   queryKey: ['queries', { status }],
  //   queryFn: async ({ pageParam }: { pageParam: any}) => {
  //     const test =  await getCollectionData('queries', {
  //       status,
  //       numberOfItems: itemsPerPage,
  //       sort: 'desc',
  //       startDate: pageParam.startAfter, 
  //     });
  //     return test;
  //   },
  //   initialPageParam: { startAfter: null },
  //   getNextPageParam: (lastPage: FirebaseFirestore.DocumentData[]) => {
  //     const lastItem = lastPage[lastPage.length - 1]
  //     const lastItemTimestamp = typeof lastItem.createdAt === 'number'
  //     ? Timestamp.fromMillis(lastItem.createdAt)
  //     : lastItem.createdAt;

  //     return lastPage.length ? lastItemTimestamp  : null;
  //   },
    
  // });

  // const allItems = data?.pages.flat() ?? [];

  const { data } = useQuery({
    queryKey: ['queries', { status }],
    queryFn: async () => {
      const startDate = Timestamp.fromDate(new Date('2024-11-07T00:00:00Z'));
      return await getCollectionData('queries', {
        status,
        numberOfItems: itemsPerPage,
        sort: 'desc',
        startDate: 1730994233235,
      });
    }
  })

  // LAYOUT
  const Component = ComponentType[display] || ComponentType['TABLE'];

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error loading items.</div>;
  // if (!allItems.length) return <div>No items found.</div>;

  return (
    <div>
      <Component items={data as IQueryItem[]} />
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        {/* {hasNextPage && (
          <Button className={buttonVariants({ variant: 'default', size: 'lg' })} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </Button>
        )} */}
      </div>
    </div>
  );
}
