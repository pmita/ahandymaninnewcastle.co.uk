"use client"

import { IQueryItem } from "@/types/firestore"
import { Table, TableBody, TableCaption, TableCell, TableRow } from "../ui/table"


export const ItemDetails = ({ item }: { item: IQueryItem }) => {

  return (
    <Table>
      <TableCaption>Query details</TableCaption>
      <TableBody>
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
      </TableBody>
    </Table>
  )
}