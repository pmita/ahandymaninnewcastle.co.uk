"use client"

// NEXT
import { useParams } from "next/navigation"
// DATA
import { getDocumentData } from "@/data/firestore";
// COMPONENTS
import { ItemDetails } from "@/components/details/item-details";
// PACKAGES
import { useQuery } from "@tanstack/react-query";
// TYPES
import { IQueryItem } from "@/types/firestore"

export const ItemLayout = ({ item }: { item: IQueryItem}) => {
  // STATE && VARIABLES
  const { data } = useQuery<FirebaseFirestore.DocumentData>({
    queryKey: ['queries', { id: item.id }],
    queryFn: async () => {
      return await getDocumentData('queries', item.id);
    },
    initialData: item,
  });

  if (!data) return null;

  return (
    <section className="flex flex-col justify-center items-stretch  gap-4 p-8">
      <div className="grid grid-cols-1 grid-rows-[250px] gap-4 lg:grid-cols-2 lg:gap-8">
        <ItemDetails item={item as IQueryItem} />
        <ItemDetails item={item as IQueryItem} />
        <ItemDetails item={item as IQueryItem} />
      </div> 
    </section>
  )
}