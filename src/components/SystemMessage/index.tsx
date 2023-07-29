import { FC } from "react";
import "./SystemMessage.scss"

interface ISystemMessage {
  messageText: string
}

export const SystemMessage: FC<ISystemMessage> = ({ messageText }) => {
  return (
    <div className="systemMessage">
      {messageText}
    </div>
  )
}
