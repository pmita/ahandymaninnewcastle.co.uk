// NEXT
import Link from "next/link";
// COMPONENTS
import { buttonVariants } from "../ui/button";
import { TableRow, TableCell } from "../ui/table";
import { ItemStatus } from "./components/item-status";
import { QuickView } from "../quick-view";
// TYPES
import { IQueryItem } from "@/types/firestore";

export const ItemRow = ({ item }: { item : IQueryItem | null }) => {
  if (!item) return null;
  
  return (
    <TableRow>
      <TableCell className="font-medium">{item.id}</TableCell>
      <TableCell>{<ItemStatus status="INITIAL"/>}</TableCell>
      <TableCell>{item.additionalInfo}</TableCell>
      <TableCell className="flex flex-row justify-end gap-4">
        <Link 
            className={(buttonVariants({ variant: 'secondary', size: 'lg' }))}
            href={`/dashboard/${item.id}`}
        >
            Edit
        </Link>
        <QuickView item={item} />
      </TableCell>
    </TableRow>
  )
}