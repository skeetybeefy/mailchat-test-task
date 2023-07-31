import { FC } from "react"
import "./InnerMessage.scss"
import { MessageTime } from "../Time"

interface IInnerMessage {
  my: boolean,
  text: string,
  time: string,
}

export const InnerMessage: FC<IInnerMessage> = ({ my, text, time }) => {
  return (
    <div className={`innerMessageContainer ${my ? "myMessage" : ""}`}>
      <span className="messageText">{text}</span>
      <MessageTime my={my} time={time}></MessageTime>
    </div>
  )
}