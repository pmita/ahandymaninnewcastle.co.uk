"use client"

// HOOKS
import { useCommentsData } from "@/hooks/useCommentsData";
// COMPONENTS
import { Card, CardDescription, CardFooter } from "../ui/card";
import { ItemStatus } from "../item/components/item-status";
import { AddComment } from "./comments/add-comment";
import { FormatedTime } from "../formated-time";


type CommentsProps = {
  id: string;
  status: string;
  canAddComments?: boolean;
}

export const Comments = ({
  id,
  status,
  canAddComments = true,
}: CommentsProps) => {
  // STATE && VARIABLES
  const { data } = useCommentsData(id);

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
                <FormatedTime time={comment.createdAt} />
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