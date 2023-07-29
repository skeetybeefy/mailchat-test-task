import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import chatsReducer from '../slices/chatsSlice'
import selectedChatReducer from '../slices/selectedChatSlice'

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    selectedChat: selectedChatReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
