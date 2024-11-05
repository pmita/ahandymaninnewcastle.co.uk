"use client"

// PACKAGES
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
// DATA
import { getCollectionData } from "@//data/firestore"
import { IQueryItem } from "@/types/firestore";
import { ItemCard } from "./item-card";
import { ItemsInTable } from "./item-table";

export const ItemsInGrid = ({ items }: { items: IQueryItem[] }) => {
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
    <div className="grid grid-col-1 auto-rows-[285px] gap-4 lg:grid-cols-2 lg:gap-8 mt-4">
      {data ? (
        data.map((item) => (
          <ItemCard key={item.id} item={item as IQueryItem} />
        ))
      ) : null}

      <ItemsInTable items={data as IQueryItem[]}/>
    </div>
  )
}