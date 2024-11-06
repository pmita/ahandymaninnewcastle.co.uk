// DATA
import { getCollectionData } from "@/data/firestore";
// COMPONENTS
import { ItemsLayout } from "./items-layout";
// TYPES
import { IQueryItem } from "@/types/firestore";

export default async function Items({ status }: { status: string }) {
  // SERVER LAND
  const items = await getCollectionData('queries', {
    status,
    numberOfItems: 5,
    sort: 'desc', 
  });

  return (
    <>
      <ItemsLayout items={items as IQueryItem[]} />
    </>
  )
}