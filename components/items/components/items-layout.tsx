"use client"

// NEXT
import { useSearchParams } from "next/navigation"
// DATA
import { getCollectionData } from "@/data/firestore"
// PACKAGES
import { useQuery } from "@tanstack/react-query"
// COMPONENTS
import { ItemsInTable } from "./items-in-table";
import { ItemsInGrid } from "./items-in-grid";
// TYPES
import { IQueryItem } from "@/types/firestore";

type ComponentTypeMap = Record<string, React.ElementType>;

const ComponentType: ComponentTypeMap = {
  'GRID': ItemsInGrid,
  'TABLE': ItemsInTable,
}

export const ItemsLayout = ({ items }: { items: IQueryItem[] }) => {
  // STATE && VARIABLES
  const seatchParams = useSearchParams();
  const status = seatchParams.get('status') || 'ALL';
  const display = seatchParams.get('display') || 'GRID';
  const { data } = useQuery<FirebaseFirestore.DocumentData[]>({
    queryKey: ['queries', { status }],
    queryFn: async () => {
      return await getCollectionData('queries', {
        status,
        numberOfItems: 5,
        sort: 'desc',
      });
    },
    initialData: items,
  })

  // LAYOUT
  const Component = ComponentType[display] || ComponentType['TABLE'];

  if (!data.length) return null;
  
  return (
    <Component items={data as IQueryItem[]} />
  )
}