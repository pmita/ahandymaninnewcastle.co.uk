"use client"

import { IQueryItem } from "@/types/firestore"
import { Table, TableBody, TableCell, TableRow } from "../ui/table"
import { ItemStatus } from "../item/components/item-status"


export const ItemDetails = ({ item, showStatus = false }: { item: IQueryItem, showStatus?: boolean }) => {

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>ID: {item.id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Name: {item.fullName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Email: {item.email}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mobile: {item.mobile}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Details: {item.additionalInfo}</TableCell>
        </TableRow>
        {showStatus ? (
          <TableRow>
            <TableCell>Current Status: <ItemStatus status={item.status} /></TableCell>
          </TableRow>
        ) : null}
      </TableBody>
    </Table>
  )
}