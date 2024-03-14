import React from 'react'

import { FormTextAreaProps } from './types'

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  placeholder,
  name,
  register,
  errors,
}) => {
  return (

    <label
      htmlFor={name}
      className="relative mb-6 flex flex-col text-sm text-slate-500 md:text-base"
    >
      <span className="mb-2 font-light tracking-wide md:mb-1">
        {label}
      </span>

      <textarea
        id={name}
        {...register('description', { 'required': true, 'maxLength': 200 })}
        aria-invalid={errors.description ? 'true' : 'false'}
        placeholder={placeholder}
        className={`relative mb-5 h-40 w-full resize-none rounded-[10px] border border-greyBorder p-4 text-left text-sm font-light transition focus:outline-none focus-visible:border-primary 
        ${errors.description ? 'border-red-500' : ''}`}
      />

      {errors.description &&
      <p
        role="alert"
        className="absolute bottom-0 right-4 h-4 text-right text-red-500"
      >
        Max length 200 symbols
      </p>
      }
    </label>
  )
}
