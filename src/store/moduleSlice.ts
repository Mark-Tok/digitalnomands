import { createSlice } from '@reduxjs/toolkit'
import { ModulesType } from 'api/types'

const initialState = {} as ModulesType

export const counterSlice = createSlice({
  name: 'allModules',
  initialState,
  reducers: {
    addModules: (state, action) => ({ ...state, ...action.payload })
  },
})

export const { addModules } = counterSlice.actions

export default counterSlice.reducer