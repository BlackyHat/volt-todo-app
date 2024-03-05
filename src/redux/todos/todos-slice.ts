import { createSlice } from "@reduxjs/toolkit"

import { TUserTodo } from "@/types"

type TodosState = {
  items: TUserTodo[]
}

const initialState: TodosState = { items: [] }

const tasksSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {state.items.push({...action.payload, id: Date.now(), completed:false})},

    deleteTask: (state, action) => {
      const index = state.items.findIndex(
        (todo) => todo.id === action.payload
      )
      state.items.splice(index, 1)},

    toggleCompleted: (state, action) => {
      const index = state.items.findIndex(
        (todo) => todo.id === action.payload.id
      )
      state.items.splice(index, 1, action.payload)
    }
  },
})

export const { addTask, deleteTask,toggleCompleted } = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer