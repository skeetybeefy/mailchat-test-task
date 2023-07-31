import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import chatsReducer from '../slices/chatsSlice'
import selectedChatReducer from '../slices/selectedChatSlice'
import messagesReducer from '../slices/messagesSlice'

export const store = configureStore({
  reducer: {
    chatsState: chatsReducer,
    selectedChat: selectedChatReducer,
    messagesState: messagesReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
