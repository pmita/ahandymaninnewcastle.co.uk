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

export const ItemsLayout = ({ items }: { items: IQueryItem[] }) => {
  // STATE && VARIABLES
  const seatchParams = useSearchParams();
  const status = seatchParams.get('status') || 'ALL';
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

  if (!data.length) return null;
  
  return (
    <>
      <ItemsInGrid items={data as IQueryItem[]} />
      <ItemsInTable items={data as IQueryItem[]} />
    </>
  )
}