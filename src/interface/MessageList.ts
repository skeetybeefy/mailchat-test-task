import { Message } from "./Message"

export interface MessageListResponse {
  response: MessageList
}

export type MessageList = Array<Message>
