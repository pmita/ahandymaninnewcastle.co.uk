// COMPONENTS
import { Skeleton } from "../ui/skeleton"


export const ItemsInGridSkeleton = () => {
  return (
    <>
      <div>
        <div className="grid grid-col-1 auto-rows-[285px] gap-4 lg:grid-cols-2 lg:gap-8">
          <Skeleton className="h-[285px] w-full bg-neutral opacity-50" />
          <Skeleton className="h-[285px] w-full bg-neutral opacity-50" />
          <Skeleton className="h-[285px] w-full bg-neutral opacity-50" />
          <Skeleton className="h-[285px] w-full bg-neutral opacity-50" />
        </div>
        <div className="flex justify-center items-center mt-4">
          <Skeleton className="h-[40px] w-[150px] bg-neutral opacity-50" />
        </div>
      </div>
    </>
  )
}