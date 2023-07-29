import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Chat } from '../interface/Chat'

const initialState: Chat['id'] = ""

export const selectedChatSlice = createSlice({
  name: 'selectedChatSlice',
  initialState,
  reducers: {
    setSelectedChatId: (_state, action: PayloadAction<Chat['id']>) => {
      return action.payload
    },
  },
})


export const { setSelectedChatId } = selectedChatSlice.actions

export default selectedChatSlice.reducer
