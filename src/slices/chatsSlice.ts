import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChatList } from '../interface/ChatList'

const initialState: ChatList = []

export const chatsSlice = createSlice({
  name: 'chatsSlice',
  initialState,
  reducers: {
    setChats: (_state, action: PayloadAction<ChatList>) => {
      return action.payload
    },
  },
})


export const { setChats } = chatsSlice.actions

export default chatsSlice.reducer
