// COMPONENTS
import { Skeleton } from "../ui/skeleton"


export const ItemsInTableSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-0.5">
        <Skeleton className="h-[50px] w-full bg-neutral opacity-50" />
        <Skeleton className="h-[50px] w-full bg-neutral opacity-50" />
        <Skeleton className="h-[50px] w-full bg-neutral opacity-50" />
        <Skeleton className="h-[50px] w-full bg-neutral opacity-50" />
        <div className="flex justify-center items-center mt-4">
          <Skeleton className="h-[40px] w-[150px] bg-neutral opacity-50" />
        </div>
      </div>
    </>
  )
}