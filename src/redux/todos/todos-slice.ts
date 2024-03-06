import { createSlice } from '@reduxjs/toolkit'

import { TUserTodo } from '@/types'

type TodosState = {
  todos: TUserTodo[]
}

const initialState: TodosState = { 'todos': [] }

const tasksSlice = createSlice({
  'name': 'todos',
  initialState,
  'reducers': {
    'addTask': (state, action) => {
      state.todos.push({
        ...action.payload,
        'id': Date.now(),
        'completed': false,
      })
    },

    'deleteTask': (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload)
      state.todos.splice(index, 1)
    },

    'toggleCompleted': (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      )
      state.todos.splice(index, 1, action.payload)
    },
  },
})

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer
