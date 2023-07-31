import { FC } from "react"
import "./Header.scss"
import chatIcon from "./assets/chat.svg"

interface IHeader {
  chatName: string,
  className?: string,
}

export const Header: FC<IHeader> = ({ chatName, className }) => {
  return (
    <header className={`chatHeader ${className ? className : ""}`}>
      <div className="chatHeaderItem">
        <img src={chatIcon} alt=""></img>
        <h3>{chatName}</h3>
      </div>
    </header>
  )
}
