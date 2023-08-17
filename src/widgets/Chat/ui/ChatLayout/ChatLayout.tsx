import { FC } from "react";
import style from "./ChatLayout.module.scss";

const ChatLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={style.windowChat}>{children}</div>
);

export default ChatLayout;
