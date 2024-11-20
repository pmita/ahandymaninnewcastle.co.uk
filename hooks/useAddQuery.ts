// DATA
import { addQueryToDB } from "@/data/firestore";
// PACKAGES
import { useMutation } from "@tanstack/react-query";
// COMPONENTS
import { toast } from "sonner";
// TYPES
import { IQueryForm } from "@/types";


export const useAddQuery = () => {
  return useMutation({
    mutationKey: ['addQueryToDB'],
    mutationFn: async (formDetails: IQueryForm) => {
      await addQueryToDB('queries', formDetails);
    },
    onError: (error) => {
      toast("Something went wrong", {
        description: error.message,
        action: {
          label: "Close",
          onClick: () => toast.dismiss(),
        }
      })
    },
    onSuccess: () => {
      console.log('Query added to the database');
      toast("Sucess", {
        description: "Query added",
        action: {
          label: "Close",
          onClick: () => toast.dismiss(),
        }
      })
    }
  });
}