"use client"

// REACT
import { useCallback } from "react";
// PACKAGES
import { useForm } from "react-hook-form";
import { toast } from "sonner";
// HOOKS
import { useAddComment } from "@/hooks/useAddComment";
// COMPONENTS
import { FieldWithLabel } from "@/components/field-with-label"
import { Button, buttonVariants } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/loading-spinner";

interface IAddCommentForm {
  comment: string;
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
  const mutation = useAddComment(id);

  // EVENTS
  const onSubmit = useCallback(async ({ comment }: IAddCommentForm) => {
    mutation.mutate({ comment, status });

    if (mutation.isIdle) {
      toast(
        <div className="flex justify-center items-center gap-4">
          <LoadingSpinner /> Loadding...
        </div>, {
          id: 'loading-add-comment',
      })
    }

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

      <Button className={buttonVariants({ variant: 'secondary' })} type="submit" disabled={mutation.isPending}>
        Add Comments
      </Button>
    </form>
  )
}
