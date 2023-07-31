import {axiosInstance, wrapper} from "../../utils/wrapper";
import {URLS} from "../../constants/urls";
import { ChatListResponse } from "../../interface/ChatList";
import { MessageListResponse } from "../../interface/MessageList";
import { Chat } from "../../interface/Chat";

export const getChatList = (): Promise<ChatListResponse> => {
    return wrapper({
      method: "get",
      url: URLS.LIST,
    })
}

export const getMessagesInChat = (chatId: Chat['id']): Promise<MessageListResponse> => {
  return wrapper({
    method: "get", 
    url: URLS.MESSAGES,
    params: {
      chat_id: chatId
    },
  })
}
