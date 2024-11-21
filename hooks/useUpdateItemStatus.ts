// DATA
import { updateDocumentData } from "@/data/firestore";
// PACKAGES
import { useQueryClient, useMutation } from "@tanstack/react-query";
// COMPONENTS
import { toast } from "sonner";
// TYPES
import { IQueryItem } from "@/types/firestore";

export const useUpdateItemStatus = (id: string) => {
    // STATE && VARIABLES
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['queries', { id }],
        mutationFn: async ({ status }: { status: string}) => {
          await updateDocumentData('queries', id, { status });
        },
        onMutate: async ({ status }) => {
          await queryClient.cancelQueries({ queryKey: ['queries', { id }] });
    
          const previousData = queryClient.getQueryData(['queries', { id }]);
    
          queryClient.setQueryData(['queries', { id }], (oldData: IQueryItem) => ({
            ...oldData,
            status,
          }));
    
          return { previousData };
        },
        onError: (_error, _variables, context) => {
          queryClient.setQueryData(['queries', id], context?.previousData);
          toast("Could not update status", {
            description: _error.message,
            action: {
              label: "Close",
              onClick: () => toast.dismiss(),
            }
          })
        },
        onSettled: () => {
          queryClient.invalidateQueries({ queryKey: ['queries', { id }] });
          toast.dismiss('loading-update-status');
        },
        onSuccess: () => {
          toast("Success", {
            description: "Item status updated",
            action: {
              label: "Close",
              onClick: () => toast.dismiss(),
            }
          })
        }
      })
}