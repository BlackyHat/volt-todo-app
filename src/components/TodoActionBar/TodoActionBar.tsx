import React from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks'
import { setFilter, selectFilterStatus, selectTodos } from '@/redux'

import { FilterStatus } from '@/types'

export const TodoActionBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)
  const filterStatusValue = useAppSelector(selectFilterStatus)

  const completedTodos = todos.filter(({ completed }) => completed).length
  const activeTodos = todos.length - completedTodos

  const handleFilter = (status: FilterStatus): void => {
    dispatch(setFilter(status))
  }

  return (
    <div className="relative mx-auto mb-10 flex items-center justify-between
     after:absolute after:inset-x-0 after:-bottom-4 after:h-[1px] after:w-full
      after:bg-greyBorder after:content-[''] max-md:flex-col max-md:gap-4">
      <ul className="flex gap-4">
        {Object.values(FilterStatus).map((status) => <li key={status}>
          <button
            type="button"
            onClick={() => handleFilter(status)}
            className={`rounded-md border-2 border-greyBorder p-2 font-light 
            capitalize tracking-widest transition-colors hover:border-secondary 
            hover:bg-secondary focus:border-secondary focus:hover:bg-secondary 
            ${filterStatusValue === status ? 'bg-secondary/[0.8]' : 'bg-white'}`
            }
          >
            {status.toLowerCase()}
          </button>
        </li>)}
      </ul>
      <ul className="flex gap-4 font-light tracking-widest">
        <li>
          <p>
            Completed:
            <span className="font-bold text-primary">{completedTodos}</span>
          </p>
        </li>
        <li>
          <p>
            Active:
            <span className="font-bold text-primary">{activeTodos}</span>
          </p>
        </li>
      </ul>
    </div>
  )
}
