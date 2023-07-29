import {FC} from "react";
import {IAvatar} from "./interface";
import "./avatar.scss";

export const Avatar: FC<IAvatar> = (props: IAvatar) => {
    const { src, size = 'sm', invisible } = props;

    const className = `component-avatar component-avatar--${size}`;

    return (
        <div className={className}>
            {!invisible && <img src={src} />}
        </div>
    )
}