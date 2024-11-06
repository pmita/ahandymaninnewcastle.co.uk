import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IQueryItem } from "@/types/firestore"
import { ItemStatus } from "./item-status"

export const ItemsInTable = ({ items }: { items : IQueryItem[] | null }) => {
  if (!items?.length) return null;

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <ItemsTableHeader />
      <TableBody>
        {items.map((item) => (
          <ItemsTableRow key={item.id} item={item} />
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

export const ItemsTableRow = ({ item }: { item : IQueryItem | null }) => {
  if (!item) return null;
  
  return (
    <TableRow>
      <TableCell className="font-medium">{item.id}</TableCell>
      <TableCell>{<ItemStatus status="INITIAL"/>}</TableCell>
      <TableCell>{item.additionalInfo}</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  )
}