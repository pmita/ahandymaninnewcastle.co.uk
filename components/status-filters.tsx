
"use client"

// NEXT
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// REACT
import { useCallback, useState } from "react"
// COMPONENTS
import { Button, buttonVariants } from "@/components/ui/button";
// UTILS
import { cn } from "@/utils/helpers";

const baseOptions = ['INITIAL', 'PROGRESSED', 'COMPLETED'];

export const StatusFilters = ({ status }: { status: string }) => {
  // STATE & VARIABLES
  const [currentOption, setCurrentOption] = useState(status || 'ALL');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // EVENTS
  const updateSearchParams = useCallback((filterOption: string) => {
    const params = new URLSearchParams(searchParams.toString());

    baseOptions.includes(filterOption)
      ? params.set('status', filterOption)
      : params.set('status', 'ALL');

      setCurrentOption(filterOption);
    replace(`${pathname}?${params.toString()}`);
  }, [replace, searchParams, pathname]);

  return (
    <div className="flex flex-wrap flex-row justify-start items-center gap-2">
      {['ALL', ...baseOptions].map((itemStatus: string) => (
        <Button
          key={itemStatus}
          className={cn(buttonVariants({
            variant: (currentOption === itemStatus ? 'secondary' : 'outline'),
            size: 'sm',
          }), "rounded-none border-[3px] border-secondary")}
          onClick={() => updateSearchParams(itemStatus)}
        >
          {itemStatus}
        </Button>
      ))}
    </div>
  )
}