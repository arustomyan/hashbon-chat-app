import { FC, ReactNode } from "react";
import cl from "classnames";
import style from "./Message.module.scss";

interface MessageProps {
  children: ReactNode;
  user: boolean;
}

const Message: FC<MessageProps> = ({ children, user }) => (
  <div className={cl(style.message, { [style.messageUser]: user })}>{children}</div>
);

export default Message;
