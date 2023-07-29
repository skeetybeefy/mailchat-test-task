import { FC } from "react"
import { Avatar } from "../Avatar"
import "./Message.scss"
import { InnerMessage } from "../InnerMessage"


interface IMessage {
  my?: boolean,
  main?: boolean,
  name: string,
  text: string,
}

export const Message: FC<IMessage> = ({ my, main, name, text }) => {
  return (
    <div className="messageContainer">
      <Avatar size="sm" invisible={!main}></Avatar>
      <div className="nameAndTextContainer">
        {main && <h4>{name}</h4>}
        <InnerMessage my={!!my} text={text}/>
      </div>
    </div>
  )
}