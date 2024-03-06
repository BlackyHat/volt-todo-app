import type { RootState } from '../store'

import { FilterStatus, TUserTodo } from '@/types'

export const selectFilterStatus =
(state: RootState): FilterStatus => state.filter.status

export const selectTodos = (state: RootState): TUserTodo[] => state.todos.todos

export const selectFilteredTodos = (state: RootState): TUserTodo[] => {
  const allTodos = state.todos.todos
  const filterStatusValue = state.filter.status

  switch (filterStatusValue) {
    case FilterStatus.Active: {
      return allTodos.filter((todo) => !todo.completed)
    }
    case FilterStatus.Completed: {
      return allTodos.filter((todo) => todo.completed)
    }
    default: {
      return allTodos
    }
  }
}
