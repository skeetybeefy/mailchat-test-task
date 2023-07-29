import { FC } from "react"
import "./ChatWindow.scss"
import { Header } from "../Header"
import { Input } from "../Input"

interface IChatWindow {
  chatName: string,
}

export const ChatWindow: FC<IChatWindow> = ({ chatName }) => {
  return (
    <div className="chatWindow">
      <Header chatName={chatName} className="chatWindowHeader"></Header>
      <div className="messagesContainer">
        123123
      </div>
      <Input className="chatWindowInput"></Input>
    </div>
  )
}