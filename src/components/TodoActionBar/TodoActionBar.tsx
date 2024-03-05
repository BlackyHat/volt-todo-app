import { useAppDispatch, useAppSelector } from "@/hooks"
import { setFilter,selectFilterStatus, selectTodos  } from "@/redux"

import { FilterStatus } from "@/types"

export const TodoActionBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)
  const filterStatus = useAppSelector(selectFilterStatus)

  const completedTodos = todos.filter(({completed})=> completed ).length
  const activeTodos = todos.length - completedTodos

  const handleFilter = (status: FilterStatus):void => {
    dispatch(setFilter(status))
  }

  return (
    <div className="max-md:flex-col max-md:gap-4 flex justify-between items-center mx-auto mb-10 after:content-[''] relative after:w-full after:h-[1px] after:bg-greyBorder after:-bottom-4 after:inset-x-0 after:absolute">
      <ul className="flex gap-4">
        {Object.values(FilterStatus).map(status=>
          <li key={status}>
            <button type="button" onClick={()=>handleFilter(status)} className={`p-2 font-light tracking-widest rounded-md capitalize border-greyBorder border-2 hover:bg-secondary hover:border-secondary focus:hover:bg-secondary focus:border-secondary transition-colors ${filterStatus===status ? "bg-secondary/[0.8]" : "bg-white"}`}>{status.toLowerCase()}</button>
          </li>

        )}
      </ul>
      <ul className="flex gap-4 font-light tracking-widest">
        <li><p>Completed: <span className="font-bold text-primary">{completedTodos}</span> </p></li>
        <li><p>Active: <span className="font-bold text-primary">{activeTodos}</span> </p></li>
      </ul>
    </div>
  )
}