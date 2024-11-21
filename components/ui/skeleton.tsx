// UTILS
import { cn } from "@/utils/helpers"

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("skeleton rounded-[6px] bg-muted", className)}
      {...props}
    />
  )
}