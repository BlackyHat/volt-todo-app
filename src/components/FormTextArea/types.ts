import { FieldErrors, UseFormRegister, FieldValues } from 'react-hook-form'

export type FormTextAreaProps = {
  label: string
  placeholder: string
  name: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}
