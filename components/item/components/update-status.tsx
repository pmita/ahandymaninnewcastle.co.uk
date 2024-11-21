"use client"

// REACT
import { useCallback } from "react";
// PACKAGES
import { useForm } from "react-hook-form"
import { toast } from "sonner";
// HOOKS
import { useUpdateItemStatus } from "@/hooks/useUpdateItemStatus";
import { useItemData } from "@/hooks/useItemData";
// COMPONENTS
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button, buttonVariants } from "@/components/ui/button";
import { ItemStatus } from "@/components/item/components/item-status";
import { LoadingSpinner } from "@/components/loading-spinner";
// TYPES
import { IQueryItem } from "@/types/firestore";

type IStatusForm = {
  status: string;
}

export const UpdateStatus = ({ id, status }: { id: string, status: string }) => {
  // STATE && VARIABLES
  const { register, handleSubmit, setValue } = useForm<IStatusForm>({
    defaultValues: { status },
  });
  const { data } = useItemData(id);
  const mutation = useUpdateItemStatus(id);

  // EVENTS
  const onSubmit = useCallback(({ status }: IStatusForm) => {
    mutation.mutate({ status });

    if (mutation.isIdle) {
      toast(
        <div className="flex justify-center items-center gap-4">
          <LoadingSpinner /> Loadding...
        </div>, {
          id: 'loading-update-status',
      })
    }
  }, [status, mutation]);
  
  return (
    <div className="rounded-lg bg-neutral flex flex-col justify-center items-stretch gap-4 p-2 lg:p-4">
      <div className="flex justify-center items-center gap-4">
        <span>Status</span>
        <ItemStatus status={(data as IQueryItem).status} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center gap-2">
        <Select 
          {...register('status', { required: true })}
          defaultValue={(data as IQueryItem).status}
          onValueChange={(value) => setValue('status', value)}
        >
          <SelectTrigger className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="INITIAL">Initial</SelectItem>
            <SelectItem value="PROGRESSED">Progressed</SelectItem>
            <SelectItem value="COMPLETED">Completed</SelectItem>
          </SelectContent>
        </Select>

        <Button className={buttonVariants({ variant: 'secondary' })} type="submit" disabled={mutation.isPending}>
          Update
        </Button>
        </form>
      </div>
  )
}