import { CollectionRefServerSide, IFirestoreFilters, ORDER_BY, QUERY_STATUS } from "@/types/firestore";
import { Timestamp } from "@/firebase/server";

export const applyFirestoreFilters = (collectionRef:  CollectionRefServerSide, { 
  numberOfItems = null, 
  status = null, 
  sort = null,
  startDate = null,
  endDate = null,
  lastItem = null
}: IFirestoreFilters) => {
  // filter based on item status
  if (status && QUERY_STATUS[status as keyof typeof QUERY_STATUS]) {
    collectionRef = collectionRef.where('status', '==', status);
  }

  // filter based on createdAt date
  if (startDate) {
    const timeStamp = Timestamp.fromMillis(startDate as number);
    collectionRef = collectionRef.where('createdAt', '<=', timeStamp);
  }

  // filter based on updatedAt date
  if (endDate) {
    collectionRef = collectionRef.where('createdAt', '>=', endDate);
  }

  // sort based on date they were created
  switch(sort) {
    case ORDER_BY.ASC:
      collectionRef = collectionRef.orderBy('createdAt', ORDER_BY.ASC);
      break;
    case ORDER_BY.DESC:
    default:
      collectionRef = collectionRef.orderBy('createdAt', ORDER_BY.DESC);
      break;
  }

  if (lastItem) {
    const timeStamp = Timestamp.fromMillis(lastItem as number);
    collectionRef = collectionRef.startAfter(timeStamp)
  }
  
  // filter based on number of items to fetch
  if(numberOfItems) {
    collectionRef = collectionRef.limit(numberOfItems);
  }

  return collectionRef;
}