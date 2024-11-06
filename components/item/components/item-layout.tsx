"use client"

// DATA
import { getDocumentData } from "@/data/firestore";
// COMPONENTS
import { ItemDetails } from "@/components/details/item-details";
import { UpdateStatus } from "@/components/item/components/update-status";
import { Comments } from "@/components/comments/comments";
// PACKAGES
import { useQuery } from "@tanstack/react-query";
// TYPES
import { IComments, IQueryItem } from "@/types/firestore"

export const ItemLayout = ({ 
  item,
  comments 
}: { 
  item: IQueryItem,
  comments: IComments[]
}) => {
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
        <ItemDetails item={data as IQueryItem} />
        <UpdateStatus id={data.id} status={data.status} />
        <div className="rounded-lg bg-neurtal lg:col-span-2 p-4 flex flex-col gap-4 overflow-y-scroll">
          <Comments id={data.id} status={data.status} comments={comments} />
        </div>
      </div> 
    </section>
  )
}