// DATA
import { addQueryToDB } from "@/data/firestore";
//PACKAGES
import { useQueryClient, useMutation } from "@tanstack/react-query";
// TYPES
import { IComments } from "@/types/firestore";


export const useAddComment = (id: string) => {
    // STATE && VARIABLES
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: ['comments', { id }],
      mutationFn: async ({ comment, status }: { comment: string, status: string }) => {
        await addQueryToDB(`queries/${id}/comments`, { content: comment, status });
      },
      onMutate: async ({ comment, status }) => {
        await queryClient.cancelQueries({ queryKey: ['comments', { id }] });
  
        const previousData = queryClient.getQueryData(['comments', { id }]);
  
        queryClient.setQueryData(['comments', { id }], (oldData: IComments[]) => {
          return [
            ...oldData,
            { content: comment, status }
          ]
        });
  
        return { previousData };
      },
      onError: (_error, _variables, context) => {
        queryClient.setQueryData(['comments', { id }], context?.previousData);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['comments', { id }] });
      },
    })
}