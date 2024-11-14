"use client"

// HOOKS
import { useFilterParams } from "@/hooks/useFilterParams";
import { useInfiniteItemsData } from '@/hooks/useInfiniteItemsData';
// COMPONENTS
import { ItemsInTable } from "./components/items-in-table";
import { ItemsInGrid } from "./components/items-in-grid";
import { Button, buttonVariants } from "@/components/ui/button"
// TYPES
import { IQueryItem } from "@/types/firestore";

type ComponentTypeMap = Record<string, React.ElementType>;

const ComponentType: ComponentTypeMap = {
  'GRID': ItemsInGrid,
  'TABLE': ItemsInTable,
}

export const ItemsLayout = () => {
  // STATE && VARIABLES
  const { display } = useFilterParams();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteItemsData();

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
