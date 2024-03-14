import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TFilterStatus } from '@/types'

interface IFilterState {
  status: TFilterStatus
}

const initialState: IFilterState = {
  'status': TFilterStatus.All,
}

const filterSlice = createSlice({
  'name': 'filter',
  initialState,
  'reducers': {
    'setFilter': (state, action: PayloadAction<TFilterStatus>) => {
      state.status = action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
