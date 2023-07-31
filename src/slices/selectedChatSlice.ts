import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Chat } from '../interface/Chat'

const initialState: Partial<Chat> = {}

export const selectedChatSlice = createSlice({
  name: 'selectedChatSlice',
  initialState,
  reducers: {
    setSelectedChat: (_state, action: PayloadAction<Chat>) => {
      return action.payload
    },
  },
})


export const { setSelectedChat } = selectedChatSlice.actions

export default selectedChatSlice.reducer
