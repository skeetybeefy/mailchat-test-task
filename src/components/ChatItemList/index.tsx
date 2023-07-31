import { FC, useEffect } from "react"
import "./ChatItemList.scss"
import { ChatItem } from "../ChatItem"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../store"
import { fetchChats } from "../../slices/chatsSlice"

export const ChatItemList: FC = () => {
  const dispatch = useAppDispatch()
  const chatsState = useSelector((state: RootState) => state.chatsState)
  const { isLoading, error, chats } = chatsState

  useEffect(() => {
    dispatch(fetchChats())
  }, [dispatch])
  
  const selectedChat = useSelector((state: RootState) => state.selectedChat)

  return (
    <div className="chatItemList">
      <div className="chatItemListHeader">
        <h3>All chats</h3>
      </div>
      {chats && chats.map(chat => (
        <ChatItem
          chat={chat}
          avatarSrc={chat.avatar}
          isSelected={chat.id === selectedChat.id}
          key={chat.id}
        ></ChatItem>
      ))}
    </div>
  )
}