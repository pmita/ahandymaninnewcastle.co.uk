// NEXT
import { notFound } from "next/navigation";
// DATA
import { getDocumentData } from "@/data/firestore";
// COMPONENTS
import { ItemLayout } from "./components/item-layout";
// TYPES
import { IQueryItem } from "@/types/firestore";

export default async function Item({ id }: { id: string }) {
  const item = await getDocumentData('queries', id);

  if (!item) return notFound();

  return (
    <>
      <ItemLayout item={item as IQueryItem} />
    </>
  );
} 