import { ChatList } from "@widgets/ChatList";
import { SendForm } from "@entities/SendForm";
import { LogoBlock } from "@shared/ui";
import style from "./ChatPages.module.scss";

const ChatPages = () => (
  <div className={style.chatPage}>
    <div className={style.container}>
      <LogoBlock />
      <div className={style.windowChat}>
        <ChatList />
        <SendForm />
      </div>
    </div>
  </div>
);

export default ChatPages;
