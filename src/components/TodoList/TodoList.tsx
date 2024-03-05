import { useAppDispatch, useAppSelector } from "@/hooks"
import { selectFilteredTodos,deleteTask, toggleCompleted } from "@/redux"

import { TUserTodo } from "@/types"

import TrashIcon from '@assets/icons/icon-trash.svg?react'


export const TodoList: React.FC = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(selectFilteredTodos)

  const handleTaskStatus = (task: TUserTodo): void => {
    dispatch(toggleCompleted({...task, completed: !task.completed}))
  }

  return (
    tasks.length === 0 
      ? 
      <p className="text-base font-medium md:text-2xl text-slate-800">Try to add some tasks ...</p> 
      :
      <ul className="grid gap-3 md:gap-6 md:grid-cols-2 xl:grid-cols-3 xl:grid- xl:row-span-full">
        {tasks.map(task=>
          <li key={task.id} className="border border-slate-100 p-4 pt-6 rounded-lg relative">
            <div className="absolute top-2 right-2 flex gap-2 items-center justify-center">
              <span className={`p-1 px-2 text-sm border uppercase border-slate-100 rounded-xl ${task.completed ? "bg-green-100": "bg-orange-100"}`}>
                {task.completed ? "completed" : 'in progress'}
              </span>
                
              <button onClick={()=>dispatch(deleteTask(task.id))} className="text-red-500 hover:text-red-800 focus-within:text-red-800 transition-colors" aria-label="deletetask">
                <TrashIcon className="size-[20px]"/>
              </button>
            </div>

            <button onClick={()=> handleTaskStatus(task)} className={`text-base md:text-2xl font-medium text-slate-800 p-2 ${task.completed ? "line-through": "no-underline"}`}>
              {task.title}
            </button>
              
            <p className={`text-sm md:text-lg font-light text-slate-600 whitespace-pre-line px-2 ${task.completed ? "line-through": "no-underline"}`}>{task.description}</p>
          </li>
        )}
      </ul>
  )
}
