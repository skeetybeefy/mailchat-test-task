import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { MessageList } from "../interface/MessageList"
import { getMessagesInChat } from "../api/chat"
import { Chat } from "../interface/Chat"

export const fetchMessages = createAsyncThunk<MessageList, Chat['id'], {rejectValue: string}>(
  'messagesSlice/get',
  async (chatId, thunkAPI) => {
    try {
      const messagesResponse = await getMessagesInChat(chatId)
      return messagesResponse.response
    } catch (e) {
      return thunkAPI.rejectWithValue("Error while getting messages")
    }
  }
)

interface MessagesState {
  isLoading: boolean,
  error: string,
  messages: MessageList,
}

const initialState: MessagesState = {
  isLoading: false,
  error: '',
  messages: []
}

export const messageSlice = createSlice({
  name: 'messagesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = ''
      state.messages = action.payload
    })
    builder.addCase(fetchMessages.rejected, (state, action) => {
      state.isLoading = false
      state.messages = []
      if (action.payload) {
        state.error = action.payload
      }
    })
  }
})

export default messageSlice.reducer
