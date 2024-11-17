// DATA
import { addQueryToDB } from "@/data/firestore";
// PACKAGES
import { useMutation } from "@tanstack/react-query";
// TYPES
import { IQueryForm } from "@/types";


export const useAddQuery = () => {
  return useMutation({
    mutationKey: ['addQueryToDB'],
    mutationFn: async (formDetails: IQueryForm) => {
      await addQueryToDB('queries', formDetails);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      console.log('Query added to the database');
    }
  });
}