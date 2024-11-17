"use client"

//NEXT
import { useSearchParams, usePathname, useRouter } from "next/navigation"
// REACT
import { useState } from "react"
// COMPONENTS
import { Button, buttonVariants } from "./ui/button"
// UTILS
import { cn } from "@/utils/helpers";

export const LayoutFilters = ({ layoutView }: { layoutView: string }) => {
  const [layout, setLayout] = useState(layoutView || 'GRID');
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  // EVENTS
  const updateSearchParams = (option: string) => {
    const params = new URLSearchParams(searchParams.toString());

    switch(option) {
      case 'TABLE':
        params.set('display', 'TABLE');
        break;
      case 'GRID':
      default:
        params.set('display', 'GRID');
        break;
    }

    setLayout(option);
    replace(`${pathName}?${params.toString()}`);
  }
  return (
    <div className="flex flex-wrap flex-row justify-start items-center">
      {['GRID', 'TABLE'].map((item: string) => (
        <Button
          key={item}
          className={cn(buttonVariants({
            variant: (layout === item ? 'secondary' : 'outline'),
            size: 'sm',
          }), "rounded-none border-[3px] border-secondary")}
          onClick={() => updateSearchParams(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  )
}

