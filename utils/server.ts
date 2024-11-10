import { CollectionRefServerSide, IFirestoreFilters, ORDER_BY, QUERY_STATUS } from "@/types/firestore";
import { Timestamp } from "@/firebase/server";

export const applyFirestoreFilters = (collectionRef:  CollectionRefServerSide, { 
  numberOfItems = null, 
  status = null, 
  sort = null,
  lastItem = null
}: IFirestoreFilters) => {
  // db query based on status
  if (status && QUERY_STATUS[status as keyof typeof QUERY_STATUS]) {
    collectionRef = collectionRef.where('status', '==', status);
  }

  // db query based on asc/desc order
  switch(sort) {
    case ORDER_BY.ASC:
      collectionRef = collectionRef.orderBy('createdAt', ORDER_BY.ASC);
      break;
    case ORDER_BY.DESC:
    default:
      collectionRef = collectionRef.orderBy('createdAt', ORDER_BY.DESC);
      break;
  }

  // db query to fetch items past certain timestatmp
  if (lastItem) {
    const timeStamp = Timestamp.fromMillis(lastItem as number);
    collectionRef = collectionRef.startAfter(timeStamp)
  }
  
  // fdb query based on number of items I need back 
  if(numberOfItems) {
    collectionRef = collectionRef.limit(numberOfItems);
  }

  return collectionRef;
}