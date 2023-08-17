import { FC } from "react";
import style from "./MessageText.module.scss";

interface MessageTextProps {
  message: string;
  children?: React.ReactNode;
}

const MessageText: FC<MessageTextProps> = ({ message, children }) => (
  <span className={style.text}>
    {message}
    {children}
  </span>
);

MessageText.defaultProps = {
  children: undefined,
};

export default MessageText;
