"use client"

// PACKAGES
import { useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// COMPONENTS
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { ItemStatus } from "@/components/item/components/item-status";
// DATA
import { getDocumentData, updateDocumentData } from "@/data/firestore";
import { useCallback } from "react";

type IStatusForm = {
  status: string;
}

export const UpdateStatus = ({ id, status }: { id: string, status: string }) => {
  // STATE && VARIABLES
  const { register, handleSubmit, setValue } = useForm<IStatusForm>({
    defaultValues: { status },
  });
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['queries', { id }],
    queryFn: () => getDocumentData('queries', id),
    initialData: { status },
  });
  const mutation = useMutation({
    mutationKey: ['queries', { id }],
    mutationFn: async ({ status: newStatus }: IStatusForm) => {
      await updateDocumentData('queries', id, { status: newStatus });
    },
    onMutate: async ({ status: newStatus }) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['queries', { id }] });
      // Get the previous data
      const previousData = queryClient.getQueryData(['queries', { id }]);
      // Optimistically update the status based on new status
      queryClient.setQueryData(['queries', { id }], (oldData: any) => ({
        ...oldData,
        status: newStatus,
      }));
      // Return the previous data to be used in case of error
      return { previousData };
    },
    onError: (_error, _variables, context) => {
      // Rollback to the previous data
      queryClient.setQueryData(['queries', id], context?.previousData);
    },
    onSettled: () => {
      // Invalidate the queries to refetch the data
      queryClient.invalidateQueries({ queryKey: ['queries', { id }] });
    },
  })

  // EVENTS
  const onSubmit = useCallback(({ status }: IStatusForm) => {
    mutation.mutate({ status });
  }, [status, mutation]);
  
  return (
    <div className="rounded-lg bg-neutral flex flex-col justify-center items-stretch gap-4 p-2 lg:p-4">
      <div className="flex flex-row justify-center items-center gap-4">
        <span>Status</span>
        <ItemStatus status={data.status} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row justify-center items-center gap-2">
        <Select 
          {...register('status', { required: true })}
          defaultValue={data.status}
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

        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Sending...' : 'Submit'}
        </Button>
        </form>
      </div>
  )
}