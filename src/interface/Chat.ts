import { LastMessage } from "./LastMessage";
import { User } from "./User";

export interface Chat {
  id: string,
  title: string,
  avatar: string,
  private: boolean,
  last_message: LastMessage,
  count_unread: number,
  users: Array<User>
}
