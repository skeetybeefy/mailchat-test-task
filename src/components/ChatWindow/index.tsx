import { FC, useEffect } from "react"
import "./ChatWindow.scss"
import { Header } from "../Header"
import { Input } from "../Input"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../store"
import { fetchMessages } from "../../slices/messagesSlice"
import { Message } from "../Message"
import { NewMessage } from "../NewMessage"

export const ChatWindow: FC = () => {
  const dispatch = useAppDispatch()
  const selectedChat = useSelector((state: RootState) => state.selectedChat)
  const { title = "" } = selectedChat

  useEffect(() => {
    if (selectedChat && selectedChat.id) {
      dispatch(fetchMessages(selectedChat.id))
    }
  }, [selectedChat, dispatch])

  const messagesState = useSelector((state: RootState) => state.messagesState)
  const { isLoading, error, messages } = messagesState
  
  return (
    <div className="chatWindow">
      <Header chatName={title} className="chatWindowHeader"></Header>
      <div className="messagesContainer">
        {!isLoading && !error && messages.map((message, index, array) => {
          /*
            Если следующее сообщение от того же человека,
            то делаем его !main

            Учитывая исключение в виде SystemMessage (TODO) и NewMessage
          */
          const isLastMessage = index >= (array.length - 1)
          const isMyMessage = message.user.you
          const isLastNewMessage = !isLastMessage && message.is_new && array[index + 1].is_new === false
          const isNotMain = !isLastNewMessage && 
          !isLastMessage && 
          (message.user.id === array[index + 1].user.id);
          return (
            <>
              <Message 
                main={!isNotMain} 
                my={isMyMessage} 
                name={[message.user.name, message.user.surname].join(" ")} 
                text={message.message}
                key={message.id}
              />
              {isLastNewMessage && <NewMessage/>}
            </>
          )
        })}
      </div>
      <Input className="chatWindowInput"></Input>
    </div>
  )
}