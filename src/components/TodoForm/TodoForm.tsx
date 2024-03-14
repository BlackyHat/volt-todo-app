import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { FormTextArea, FormField } from '@/components'

import { useAppDispatch } from '@/hooks'
import { addTask } from '@/redux'

import PlusIcon from '@assets/icons/icon-plus.svg?react'

export const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    reset,
    handleSubmit,
    'formState': { errors },
  } = useForm<FieldValues>({ 'mode': 'onChange' })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(addTask(data))
    toast.success('New task was added')
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-md:max-w-[480px] xl:w-full"
    >
      <FormField
        label="Todo title:"
        type="text"
        placeholder="Add todo title"
        name="todo-title"
        register={register}
        errors={errors}
      />

      <FormTextArea
        label="Todo description:"
        placeholder="Add todo description..."
        name="todo-description"
        register={register}
        errors={errors}
      />

      <button
        type="submit"
        className="mx-auto flex w-full max-w-80 items-center justify-center gap-4 rounded-full border border-primary px-6 py-2 font-medium capitalize text-secondary group-invalid:pointer-events-none group-invalid:opacity-30"
      >
        Add new todo
        <PlusIcon className="size-6 rounded-full" />
      </button>
    </form>
  )
}
