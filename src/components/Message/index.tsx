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
    <div className={`messageContainer ${my ? "messageContainer--my" : ""}`}>
      <Avatar size="sm" invisible={!main}></Avatar>
      <div className="nameAndTextContainer">
        {main && !my && <h4>{name}</h4>}
        <InnerMessage my={!!my} text={text} main={!!main}/>
      </div>
    </div>
  )
}