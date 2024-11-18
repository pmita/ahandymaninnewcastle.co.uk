// COMPONENTS
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ItemRow } from "@/components/item/item-row"
// TYPES
import { IQueryItem } from "@/types/firestore"

export const ItemsInTable = ({ items }: { items : IQueryItem[] | null }) => {
  if (!items?.length) return null;

  return (
    <Table>
      <ItemsTableHeader />
      <TableBody>
        {items.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </TableBody>
    </Table>
  )
}

export const ItemsTableHeader = () => (
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Query ID</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
)