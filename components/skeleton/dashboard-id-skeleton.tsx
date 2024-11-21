// COMPONENTS
import { Skeleton } from "../ui/skeleton";

export const DashboardIdSkeleton = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[250px] gap-4 lg:grid-cols-2 lg:gap-8">
      <Skeleton className="h-[250px] w-full bg-neutral opacity-50" />
      <Skeleton className="h-[250px] w-full bg-neutral opacity-50" />
    <div className="rounded-lg lg:col-span-2 p-4 flex flex-col gap-4">
      <Skeleton className="h-[150px] w-full bg-neutral opacity-50" />
      <Skeleton className="h-[150px] w-full bg-neutral opacity-50" />
      <Skeleton className="h-[150px] w-full bg-neutral opacity-50" />
      <Skeleton className="h-[150px] w-full bg-neutral opacity-50" />
    </div>
  </div> 
  )
}