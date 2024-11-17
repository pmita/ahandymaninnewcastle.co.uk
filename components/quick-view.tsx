"use client"

// TYPES
import { IQueryItem } from "@/types/firestore"
// COMPONENTS
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetTitle } from "./ui/sheet"
import { Comments } from "./comments/comments"
import { Button, buttonVariants } from "./ui/button"
import { ItemDetails } from "./details/item-details"
// UTILS
import { cn } from "@/utils/helpers"

export const QuickView = ({ item }: { item: IQueryItem}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          className={cn(buttonVariants({ variant: 'outline'}), "w-full border-[3px] border-secondary")}
        >
          Quick View
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full" side="right">
        <SheetHeader className="pb-5">
          <SheetTitle>Quick View</SheetTitle>
        </SheetHeader>
        <ItemDetails item={item} showStatus/>
        <div className="bg-gray lg:col-span-2 p-4 flex flex-col gap-4">
          <Comments id={item.id} status={item.status} comments={[]} canAddComments={false} />
        </div>
      </SheetContent>
    </Sheet>
  )
}