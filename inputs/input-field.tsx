"use client"

import { IFormField } from '@/types';

export function InputField({
  name,
  label,
  register,
  validationSchema,
  type,
  placeholder,
  error,
  ...rest
}: IFormField) : JSX.Element {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-5">
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}

      <input
        className="w-full border-solid border-[0.3rem] border-primary p-4 rounded-[6px]"
        id={name}
        placeholder={placeholder}
        type={type}
        {...register(name, validationSchema)}
        {...rest}
      />

      {error && (
        <span className="text-danger">{error}</span>
      )}
    </div>
  )
}