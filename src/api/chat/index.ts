import {wrapper} from "../../utils/wrapper";
import {URLS} from "../../constants/urls";
import { ChatListResponse } from "../../interface/ChatList";

export const getChatList = (): Promise<ChatListResponse> => {
    return wrapper("get", URLS.LIST)
}