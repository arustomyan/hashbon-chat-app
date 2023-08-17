import { FC } from "react";
import cl from "classnames";
import style from "./MessageText.module.scss";

interface MessageTextProps {
  message: string;
  children?: React.ReactNode;
  user?: boolean;
}

const MessageText: FC<MessageTextProps> = ({ message, children, user }) => (
  <span className={cl(style.text, { [style.messageUser]: user })}>
    {message}
    {children}
  </span>
);

MessageText.defaultProps = {
  children: undefined,
  user: false,
};

export default MessageText;
