import { FC } from "react";
import readIcon from "./assets/read.svg"
import "./Time.scss"


interface ITime {
  my?: boolean,
  className?: string,
  time: string,
}

export const Time: FC<ITime> = ({ my, className, time }) => {
  return (
    <span className={`timeSpan ${className ? className : ""}`}>
      <span>{time}</span>
      {my && <img src={readIcon} alt="" className="readIcon"/>}
    </span>
  )
}

export const MessageTime: FC<ITime> = (props) => {
  return (
    <>
      <Time className="timeSpan timeSpan--message timeSpan--hidden" {...props}></Time>
      <Time className="timeSpan timeSpan--message timeSpan--visible" {...props}></Time>
    </>
  )
}
