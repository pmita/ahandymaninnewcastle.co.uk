"use client"

// REACT
import { useCallback } from "react";
// DATA
import { addQueryToDB } from "@/data/firestore";
// PACKAGES
import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";
// COMPONENTS
import { FieldWithLabel } from "@/components/field-with-label"
import { Button } from "@/components/ui/button";
// TYPES
import { IComments } from "@/types/firestore";

interface IAddCommentForm {
  comment: string;
}

interface IAddCommentMutation {
  comment: string;
  status: string;
}

export const AddComment = ({ id, status }: { id: string, status: string }) => {
  // STATE && VARIABLES
  const { register, reset, handleSubmit, formState: { errors } } = useForm<IAddCommentForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      comment: '',
    }
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ['comments', { id }],
    mutationFn: async ({ comment, status }: IAddCommentMutation) => {
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

  // EVENTS
  const onSubmit = useCallback(async ({ comment }: IAddCommentForm) => {
    mutation.mutate({ comment, status });
    reset();
  }, [mutation, status, reset]);

  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start items-start gap-4">
      <FieldWithLabel
        name="comment"
        register={register}
        validationSchema={{ required: 'This field is required' }}
        placeholder="Add a comment"
        error={errors.comment?.message}
      />

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Sending...' : 'Submit'}
      </Button>
    </form>
  )
}
