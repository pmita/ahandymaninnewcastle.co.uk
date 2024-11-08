// DATA
import { getCollectionData } from "@/data/firestore";
// COMPONENTS
import { ItemsLayout } from "./components/items-layout";
// TYPES
import { IQueryItem } from "@/types/firestore";
// import { Timestamp } from "firebase-admin/firestore";
import { Timestamp } from '@/firebase/server';

export default async function Items({ status }: { status: string }) {
  // SERVER LAND

// const startDate = Timestamp.fromDate(new Date('2024-11-08T00:00:00Z'));
// const startTime = Timestamp.fromMillis(1730994233235);
// console.log(typeof startDate);
// const endDate = Timestamp.fromDate(new Date('2023-11-06T23:59:59Z'));
  const items = await getCollectionData('queries', {
    status,
    numberOfItems: 2,
    sort: 'desc', 
    // lastItem: 'test',
    // startDate: startTime,
  });



  // console.log(items);

  return (
    <>
      <ItemsLayout items={items as IQueryItem[]} />
    </>
  )
}