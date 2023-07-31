import { FC } from "react"
import { Avatar } from "../Avatar"
import "./Message.scss"
import { InnerMessage } from "../InnerMessage"


interface IMessage {
  my?: boolean,
  main?: boolean,
  name: string,
  text: string,
  time: string,
}

export const Message: FC<IMessage> = ({ my, main, name, text, time }) => {
  return (
    <div className={`messageContainer ${my ? "messageContainer--my" : ""} ${main ? "" : "shiftedTop"}`}>
      <Avatar size="sm" invisible={!main}></Avatar>
      <div className="nameAndTextContainer">
        {main && !my && <h4>{name}</h4>}
        <InnerMessage my={!!my} text={text} time={time}/>
      </div>
    </div>
  )
}