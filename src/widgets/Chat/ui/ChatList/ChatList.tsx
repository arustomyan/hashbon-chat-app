import { FC } from "react";
import { BotMessage } from "@entities/BotMessage";
import { UserMessage } from "@entities/UserMessage";
import { useChatContext } from "../../context/ChatContext";
import ChatBotLoadMessage from "../ChatBotLoadMessage/ChatBotLoadMessage";
import style from "./ChatList.module.scss";

interface ChatListProps {}

const ChatList: FC<ChatListProps> = () => {
  const { messages } = useChatContext();
  return (
    <div className={style.root}>
      <ul className={style.chatList}>
        {messages.map((item) => (
          <li key={item.id}>
            {item.user ? (
              <BotMessage message={item.message} />
            ) : (
              <UserMessage message={item.message} />
            )}
          </li>
        ))}

        <ChatBotLoadMessage />
      </ul>
    </div>
  );
};

export default ChatList;
