import type { RootState } from "../store"

import { FilterStatus, TUserTodo } from "@/types"

export const selectFilterStatus = (state: RootState):FilterStatus  => state.filter.status

export const selectTodos = (state: RootState): TUserTodo[] => state.todos.items

export const selectFilteredTodos = (state: RootState): TUserTodo[] => {
  const allTodos = state.todos.items
  const filterStatus = state.filter.status
  
  switch (filterStatus) {
    case FilterStatus.Active:
      return allTodos.filter(todo => !todo.completed)
    case FilterStatus.Completed:
      return allTodos.filter(todo => todo.completed)
    default:
      return allTodos
  }
}