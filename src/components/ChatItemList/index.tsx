import { FC } from "react"
import "./ChatItemList.scss"
import { ChatItem } from "../ChatItem"
import { ChatList } from "../../interface/ChatList"
import { Chat } from "../../interface/Chat"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

interface IChatItemList {
  chats: ChatList | null,
}

export const ChatItemList: FC<IChatItemList> = ({ chats }) => {
  const selectedChat = useSelector((state: RootState) => state.selectedChat)
  return (
    <div className="chatItemList">
      <div className="chatItemListHeader">
        <h3>All chats</h3>
      </div>
      {chats && chats.map(chat => (
        <ChatItem 
          chatName={chat.title.slice(0, 15)} 
          lastMsgText={chat.last_message.message.slice(0, 15)}
          id={chat.id}
          isSelected={chat.id === selectedChat}
        ></ChatItem>
      ))}
    </div>
  )
}