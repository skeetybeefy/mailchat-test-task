import { Chat } from "./Chat"

export interface ChatListResponse {
  response: ChatList
}

export type ChatList = Array<Chat>
