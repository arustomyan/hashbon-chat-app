/* eslint-disable arrow-body-style */
import { FC } from "react";
import { BotMessage } from "@entities/BotMessage";
import { UserMessage } from "@entities/UserMessage";
import { BotLoadMessage } from "@entities/BotLoadMessage";
import style from "./ChatList.module.scss";

interface ChatListProps {
  messages: { id: string; message: string; user: boolean }[];
  isLoad: boolean;
  loadMessage: string;
  handleStopPrint: (message: string) => void;

  isDoneFetch: boolean;
}

const ChatList: FC<ChatListProps> = ({
  messages,
  isLoad,
  loadMessage,
  handleStopPrint,
  isDoneFetch,
}) => {
  return (
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

      {isLoad && (
        <li>
          <BotLoadMessage
            isDoneFetch={isDoneFetch}
            message={loadMessage}
            handleStopPrint={handleStopPrint}
          />
        </li>
      )}
    </ul>
  );
};

export default ChatList;
