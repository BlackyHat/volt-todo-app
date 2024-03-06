import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { TFormData } from '../TodoForm/types'

export type FormFieldProps = {
  type:string
  label: string
  placeholder: string
  name: string
  register: UseFormRegister<TFormData>
  errors: FieldErrors
}
