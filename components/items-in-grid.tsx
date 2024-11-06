// DATA
import { IQueryItem } from "@/types/firestore";
// COMPONENTS
import { ItemCard } from "./item-card";


export const ItemsInGrid = ({ items }: { items : IQueryItem[] | null }) => {
  if (!items?.length) return null;

  return (
    <div className="grid grid-col-1 auto-rows-[285px] gap-4 lg:grid-cols-2 lg:gap-8 mt-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}