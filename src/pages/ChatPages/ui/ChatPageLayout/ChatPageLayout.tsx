import { FC } from "react";
import style from "./ChatPageLayout.module.scss";

const ChatPageLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={style.chatPage}>
    <div className={style.container}>{children}</div>
  </div>
);

export default ChatPageLayout;
