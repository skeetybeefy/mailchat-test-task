import { FC } from "react"
import { Time } from "../Time"
import "./InnerMessage.scss"

interface IInnerMessage {
  my: boolean,
  text: string,
  time: string,
}

export const InnerMessage: FC<IInnerMessage> = ({ my, text, time }) => {
  return (
    <div className={`innerMessageContainer ${my ? "myMessage" : ""}`}>
      <span>{text}</span>
      <Time my={my} time={time}></Time>
    </div>
  )
}