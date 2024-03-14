import type { RootState } from '../store'

import { TFilterStatus, TUserTodo } from '@/types'

export const selectFilterStatus = (state: RootState): TFilterStatus => {
  return state.filter.status
}

export const selectTodos = (state: RootState): TUserTodo[] => state.todos.todos

export const selectFilteredTodos = (state: RootState): TUserTodo[] => {
  const allTodos = state.todos.todos
  const filterStatusValue = state.filter.status

  switch (filterStatusValue) {
    case TFilterStatus.Active: {
      return allTodos.filter((todo) => !todo.completed)
    }
    case TFilterStatus.Completed: {
      return allTodos.filter((todo) => todo.completed)
    }
    default: {
      return allTodos
    }
  }
}
