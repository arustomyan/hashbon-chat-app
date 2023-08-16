import { FC } from "react";
import style from "./MessageText.module.scss";

interface MessageTextProps {
  message: string;
}

const MessageText: FC<MessageTextProps> = ({ message }) => (
  <span className={style.text}>
    {message}
    <span className="cursor"></span>
  </span>
);

export default MessageText;
