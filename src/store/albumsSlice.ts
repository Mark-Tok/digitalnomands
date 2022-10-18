import { createSlice } from '@reduxjs/toolkit'
import { AlbumsInterface } from 'api/types'

const initialState = [] as AlbumsInterface[]

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    addAlbums: (state, action) => ([...state, ...action.payload ])
  },
})

export const { addAlbums } = albumsSlice.actions

export default albumsSlice.reducer