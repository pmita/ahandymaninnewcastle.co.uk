import { getCollectionData } from "@/data/firestore";
import { ItemCard } from "@/components/item-card";


export default async function ItemsList({ status }: { status: string }) {
  // SERVER LAND
  const items = await getCollectionData('queries', {
    status,
    numberOfItems: 5,
    sort: 'desc', 
  });

  console.log(items);

  return (
    <div className="grid grid-col-1 auto-rows-[285px] gap-4 lg:grid-cols-2 lg:gap-8 mt-4">
      {/* {items ? (
        {items.map((item: any) => (
          <ItemCard key={item.id} item={item} />
        ))}
      ): null} */}
      {items && items.map((item: any) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}