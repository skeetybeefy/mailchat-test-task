import { FC } from "react"
import attachLogo from "./assets/attach.svg"
import sendLogo from "./assets/send.svg"
import "./Input.scss"

interface IInput {
  className?: string,
}

export const Input: FC<IInput> = ({ className }) => {
  return (
    <div className={`inputContainer ${className ? className : ""}`}>
      <div contentEditable className="chatInput" placeholder="Type message" /> 
      <div className="actionsContainer">
        <div className="attachIcon iconContainer">
          <img src={attachLogo}/>
        </div>
        <div className="iconContainer">
          <img src={sendLogo}/>
        </div>
      </div>
    </div>

  )
}