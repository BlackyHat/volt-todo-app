import React from 'react'

import { FormFieldProps } from './types'

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  placeholder,
  name,
  register,
  errors,
}) => {
  return (
    <label
      htmlFor={name}
      className="relative mb-2 flex flex-col text-sm
    text-slate-500 md:text-base"
    >
      <span className="mb-2 font-light tracking-wide md:mb-1">
        {label}
      </span>

      <input
        id={name }
        type={type}
        {...register('title', { 'required': true, 'maxLength': 20 })}
        aria-invalid={errors.title ? 'true' : 'false'}
        placeholder={placeholder}
        className={`relative mb-5 w-full rounded-[10px] border-[1px] 
      border-greyBorder p-4 text-left text-sm font-light transition 
      focus:outline-none focus-visible:border-primary 
      ${errors.title ? 'border-red-500' : ''}`}
      />

      {errors.title &&
      <p
        role="alert"
        className="absolute bottom-0 right-4 h-4 text-right
        text-red-500"
      >
        Max length 20 symbols
      </p>
      }
    </label>
  )
}
