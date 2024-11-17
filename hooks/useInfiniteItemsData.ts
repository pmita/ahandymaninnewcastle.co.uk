// DATA
import { getCollectionData } from "@/data/firestore";
// PACKAGES
import { useInfiniteQuery } from "@tanstack/react-query";
// HOOKS
import { useFilterParams } from "./useFilterParams";

export const useInfiniteItemsData = () => {
    // STATE && VARIABLES
    const { status, sort, limit } = useFilterParams();
    return useInfiniteQuery<FirebaseFirestore.DocumentData[]>({
      queryKey: ['queries', { status, limit, sort }],
      queryFn: async ({ pageParam }: { pageParam: any}) => {
        return await getCollectionData('queries', pageParam);
      },
      initialPageParam: { status, limit, sort, startAfter: null },
      getNextPageParam: (lastPage) => {
        const lastItem = lastPage[lastPage.length - 1]
  
        if (lastItem) {
          const lastItemTimestamp = typeof lastItem.createdAt === 'number'
          ? new Date(lastItem.createdAt)
          : lastItem.createdAt;
    
          return lastPage.length < Number(limit)
            ? undefined 
            : { status, limit, sort, startAfter: lastItemTimestamp };
        } else {
          return undefined;
        }
      },
    });
}