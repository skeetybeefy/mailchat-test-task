import { FC } from "react"
import { Time } from "../Time"
import "./InnerMessage.scss"

interface IInnerMessage {
  my: boolean,
  text: string,
  main: boolean,
}

export const InnerMessage: FC<IInnerMessage> = ({ my, text, main }) => {
  return (
    <div className={`innerMessageContainer ${my ? "myMessage" : ""} ${main ? "" : "shiftedTop"}`}>
      <span>{text}</span>
      <Time my={my}></Time>
    </div>
  )
}