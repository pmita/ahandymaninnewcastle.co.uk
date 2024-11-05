import { getCollectionData } from "@/data/firestore";
import { ItemCard } from "@/components/item-card";
import { IQueryItem } from "@/types/firestore";
import { ItemsInGrid } from "./items-in-grid";

export default async function ItemsList({ status }: { status: string }) {
  // SERVER LAND
  const items = await getCollectionData('queries', {
    status,
    numberOfItems: 5,
    sort: 'desc', 
  });

  return (
    <>
      {/* {items ? (
        {items.map((item: any) => (
          <ItemCard key={item.id} item={item} />
        ))}
      ): null} */}
      {/* {items && items.map((item: any) => (
        <ItemCard key={item.id} item={item} />
      ))} */}

      <ItemsInGrid items={items as IQueryItem[]} />
    </>
  )
}