import React from 'react'
import { toast } from 'react-hot-toast'

import { useAppDispatch, useAppSelector } from '@/hooks'
import { selectFilteredTodos, deleteTask, toggleCompleted } from '@/redux'

import { TUserTodo } from '@/types'

import TrashIcon from '@assets/icons/icon-trash.svg?react'

export const TodoList: React.FC = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(selectFilteredTodos)

  const handleTaskStatus = (task: TUserTodo): void => {
    dispatch(toggleCompleted({ ...task, 'completed': !task.completed }))
    toast.success("Task's status was changed")
  }

  const handleTaskDelete = (id: number): void => {
    dispatch(deleteTask(id))
    toast.error('Task was removed')
  }

  return tasks.length === 0 ? <p className="text-base font-medium text-slate-800 md:text-2xl">
      Try to add some tasks ...
  </p> : <ul className="grid gap-3 md:grid-cols-2 md:gap-6 xl:row-span-full xl:grid-cols-3">
    {tasks.map((task) => <li
      key={task.id}
      className="relative rounded-lg border border-slate-100 p-4 pt-6"
    >
      <div className="absolute right-2 top-2 flex items-center justify-center gap-2">
        <span
          className={`rounded-xl border border-slate-100 p-1 px-2 text-sm uppercase ${task.completed ? 'bg-green-100' : 'bg-orange-100'}`}
        >
          {task.completed ? 'completed' : 'in progress'}
        </span>

        <button
          onClick={() => handleTaskDelete(task.id)}
          className="text-red-500 transition-colors focus-within:text-red-800 hover:text-red-800"
          aria-label="deletetask"
        >
          <TrashIcon className="size-[20px]" />
        </button>
      </div>

      <button
        onClick={() => handleTaskStatus(task)}
        className={`p-2 text-base font-medium text-slate-800 md:text-2xl ${task.completed ? 'line-through' : 'no-underline'}`}
      >
        {task.title}
      </button>

      <p
        className={`whitespace-pre-line px-2 text-sm font-light text-slate-600 md:text-lg ${task.completed ? 'line-through' : 'no-underline'}`}
      >
        {task.description}
      </p>
    </li>)}
  </ul>
}
