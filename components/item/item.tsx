// NEXT
import { notFound } from "next/navigation";
// DATA
import { getCollectionData, getDocumentData } from "@/data/firestore";
// COMPONENTS
import { ItemLayout } from "./components/item-layout";
// TYPES
import { IComments, IQueryItem } from "@/types/firestore";

export default async function Item({ id }: { id: string }) {
  const item = await getDocumentData('queries', id);
  const comments = await getCollectionData(`queries/${id}/comments`, { sort: 'asc' });

  if (!item) return notFound();

  return (
    <ItemLayout item={item as IQueryItem} comments={comments as IComments[]} />
  );
} 