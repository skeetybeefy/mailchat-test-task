import { FC } from "react";
import readIcon from "./assets/read.svg"
import "./Time.scss"


interface ITime {
  my?: boolean,
  className?: string,
}

export const Time: FC<ITime> = ({ my, className }) => {
  return (
    <span className={`timeSpan ${className ? className : ""}`}>
      <span>21:31</span>
      {my && <img src={readIcon} className="readIcon"/>}
    </span>
  )
}
