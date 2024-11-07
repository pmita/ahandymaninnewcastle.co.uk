"use client"

// DATA
import { getCollectionData } from "@/data/firestore";
// PACKAGES
import { useQuery } from "@tanstack/react-query";
// COMPONENTS
import { Card, CardDescription, CardFooter } from "../ui/card";
import { ItemStatus } from "../item/components/item-status";
import { AddComment } from "./components/add-comment";
// TYPES
import { IComments } from "@/types/firestore";


type CommentsProps = {
  id: string;
  status: string;
  comments: IComments[];
  canAddComments?: boolean;
}

export const Comments = ({
  id,
  status,
  comments,
  canAddComments = true,
}: CommentsProps) => {
  // STATE && VARIABLES
  const { data } = useQuery({
    queryKey: ['comments', { id }],
    queryFn: async () => {
      return await getCollectionData(`queries/${id}/comments`, { sort: 'asc' });
    },
    initialData: comments,
  });

  return (
    <>
      <h1>Comments</h1>
      {data ? (
        <>
          {data.map((comment) => (
            <Card key={comment.id}>
              <CardDescription className="p-4">{comment.content}</CardDescription>
              <CardFooter className="flex-row justify-between p-4">
                <ItemStatus status={comment.status} />
              </CardFooter>
            </Card>
          ))}
        </>
      ): (
        <h1 className="text-center font-bold text-primary">No comments yet</h1>
      )}

      {canAddComments ? (
        <AddComment id={id} status={status} />
      ) : null}
    </>
  )
}