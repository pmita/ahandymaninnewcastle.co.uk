// DATA
import { getDocumentData } from "@/data/firestore";
// PACKAGES
import { useQuery } from "@tanstack/react-query";
// TYPES
import { IQueryItem } from "@/types/firestore";


export const useItemData = (id: string) => {
    return useQuery<FirebaseFirestore.DocumentData>({
        queryKey: ['queries', { id }],
        queryFn: async () => await getDocumentData('queries', id) as IQueryItem
        },
    );
}