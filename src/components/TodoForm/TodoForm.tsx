import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "react-hot-toast"

import { useAppDispatch } from "@/hooks"
import { addTask } from "@/redux"

import PlusIcon from '@assets/icons/icon-plus.svg?react'

import { TFormData } from "./types"

export const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const { register, reset, handleSubmit,formState: { errors } } = useForm<TFormData>({ mode: 'onChange',})
  
  const onSubmit: SubmitHandler<TFormData> = (data) =>  {
    dispatch(addTask(data))
    toast.success("New task was added")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-md:max-w-[480px] xl:w-full mx-auto">
      <label htmlFor="todo-name" className="relative flex flex-col text-sm text-slate-500 md:text-base mb-2">
        <span className="mb-2 md:mb-1 font-light tracking-wide">Todo name:</span>

        <input {...register("title", { required: true, maxLength: 20 })}          
          aria-invalid={errors['title'] ? "true" : "false"}  
          type="text"
          placeholder="Add todo title"
          className={`relative w-full mb-5 rounded-[10px] border-[1px] border-greyBorder font-light text-left text-sm p-4 transition focus:outline-none focus-visible:border-primary ${errors.title ? 'border-red-500' : ''}`}
        />

        {errors.title && 
            <p role="alert" className='h-4 absolute bottom-0 right-4 text-right text-red-500'>
              Max length 20 symbols
            </p>
        }
      </label>

      <label htmlFor="todo-name" className="relative flex flex-col text-sm text-slate-500 md:text-base mb-6">
        <span 
          className="mb-2 md:mb-1 font-light tracking-wide">
          Todo description:
        </span>

        <textarea 
          {...register("description", 
            { required: true, maxLength: 200 })} 
          aria-invalid={errors['description'] ? "true" : "false"}
          placeholder="Add todo description..."
          className={`resize-none relative w-full mb-5 rounded-[10px] border-[1px] border-greyBorder font-light text-left text-sm p-4 transition focus:outline-none h-40 focus-visible:border-primary ${errors.description ? 'border-red-500' : ''}`}
        />
        
        {errors.description && 
            <p 
              role="alert" 
              className='absolute bottom-0 h-4 text-right right-4 text-red-500'>
              Max length 200 symbols
            </p>
        }
      </label>

      <button 
        type="submit" 
        className="text-secondary flex gap-4 max-w-80 mx-auto justify-center items-center rounded-full border border-primary px-6 w-full py-2 capitalize group-invalid:pointer-events-none group-invalid:opacity-30 font-medium">
        Add new todo

        <PlusIcon className="size-6 rounded-full"/>
      </button>
    </form>

  )
}