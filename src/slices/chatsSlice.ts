import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ChatList } from '../interface/ChatList'
import { getChatList } from '../api/chat'

export const fetchChats = createAsyncThunk<ChatList, undefined, {rejectValue: string}>(
  'chatsSlice/get',
  async (_, thunkAPI) => {
    try {
      const chatListResponse = await getChatList()
      return chatListResponse.response
    } catch (e) {
      return thunkAPI.rejectWithValue("Error happened while fetching chats")
    }
  }
)

interface ChatListState {
  isLoading: boolean,
  error: string,
  chats: ChatList
}

const initialState: ChatListState = {
  isLoading: false,
  error: "",
  chats: []
}

export const chatsSlice = createSlice({
  name: 'chatsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChats.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = ''
      state.chats = action.payload
    })
    builder.addCase(fetchChats.rejected, (state, action) => {
      state.isLoading = false
      state.chats = []
      if (action.payload) {
        state.error = action.payload
      }
    })
  }
})

export default chatsSlice.reducer
