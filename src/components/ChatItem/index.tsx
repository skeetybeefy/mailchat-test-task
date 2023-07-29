import { FC } from "react"
import "./ChatItem.scss"
import { Avatar } from "../Avatar"
import { Time } from "../Time"
import { useAppDispatch } from "../../store"
import { setSelectedChatId } from "../../slices/selectedChatSlice"

interface IChatItem {
  id: string,
  chatName: string,
  lastMsgText: string,
  isSelected?: boolean,
}

export const ChatItem: FC<IChatItem> = ({ chatName, lastMsgText, isSelected, id }) => {
  const dispatch = useAppDispatch()

  return (
    <div 
      className={`chatItem ${isSelected ? " chatItem--selected" : ""}`}
      onClick={() => dispatch(setSelectedChatId(id))}
    >
      <Avatar size="md"></Avatar>
      <div className="chatData">
        <h4>{chatName}</h4>
        <p>{lastMsgText}</p>
        <Time className="chatItemTime"></Time>
      </div>
    </div>
  )
}