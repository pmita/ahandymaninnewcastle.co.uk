"use client"

// HOOKS
import { useItemData } from "@/hooks/useItemData";
// COMPONENTS
import { Comments } from "../comments/comments";
import { ItemDetails } from "../details/item-details";
import { UpdateStatus } from "./components/update-status";
// TYPES
import { IQueryItem } from "@/types/firestore";

export default function ItemLayout({ id }: { id: string }) {
  // STATE && VARIABLES
  const { data: item  } = useItemData(id);

  if (!item) return null;

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-[250px] gap-4 lg:grid-cols-2 lg:gap-8">
        <ItemDetails item={item as IQueryItem} />
        <UpdateStatus id={item.id} status={item.status} />
        <div className="rounded-lg bg-neutral lg:col-span-2 p-4 flex flex-col gap-4 overflow-y-scroll">
          <Comments id={item.id} status={item.status} />
        </div>
      </div> 
    </>
  );
} 