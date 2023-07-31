import { FC } from "react"
import "./ChatItem.scss"
import { Avatar } from "../Avatar"
import { Time } from "../Time"
import { useAppDispatch } from "../../store"
import { setSelectedChat } from "../../slices/selectedChatSlice"
import { Chat } from "../../interface/Chat"
import { getLocaleTimeStringFromUnixTimestamp } from "../../utils/getLocaleTimeStringFromUnixTimestamp"

interface IChatItem {
  isSelected?: boolean,
  chat: Chat,
  avatarSrc: string,
}

export const ChatItem: FC<IChatItem> = ({ isSelected, chat, avatarSrc }) => {
  const dispatch = useAppDispatch()
  const { title, last_message } = chat

  return (
    <div 
      className={`chatItem ${isSelected ? " chatItem--selected" : ""}`}
      onClick={() => dispatch(setSelectedChat(chat))}
    >
      <Avatar size="md" src={avatarSrc}></Avatar>
      <div className="chatData">
        <h4>{title.slice(0, 15)}</h4>
        <p>{last_message.message.slice(0, 15)}</p>
        <Time 
          className="chatItemTime"
          time={getLocaleTimeStringFromUnixTimestamp(last_message.created_at)}
        />
      </div>
    </div>
  )
}