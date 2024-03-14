import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export type FormFieldProps = {
  type: string
  label: string
  placeholder: string
  name: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}
