import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { FilterStatus } from "@/types"

interface IFilterState {
  status: FilterStatus
}

const initialState: IFilterState = {
  status: FilterStatus.All,
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterStatus>) => {
      state.status = action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer