import { User } from "./User";

export interface Message {
  id: string,
  created_at: number,
  user: User,
  message: string,
  is_new: boolean,
}
