// DATA
import { getCollectionData } from "@/data/firestore";
// PACKAGES
import { useQuery } from "@tanstack/react-query";


export const useCommentsData = (id: string) => {
  return useQuery({
    queryKey: ['comments', { id }],
    queryFn: async () => {
      return await getCollectionData(`queries/${id}/comments`, { sort: 'asc' });
    },
  });
}