import { createSlice } from '@reduxjs/toolkit'
import { UsersInterface } from 'api/types'

const initialState = [] as UsersInterface[]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => ([...state, ...action.payload ])
  },
})

export const { addUsers } = usersSlice.actions

export default usersSlice.reducer