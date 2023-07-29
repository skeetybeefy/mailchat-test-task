import { Message } from "./Message";
import { User } from "./User";

export interface Chat {
  id: string,
  title: string,
  avatar: string,
  private: boolean,
  last_message: Message,
  count_unread: number,
  users: Array<User>
}
