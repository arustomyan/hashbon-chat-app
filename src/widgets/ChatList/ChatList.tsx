import { useState } from "react";
import { BotMessage } from "@entities/BotMessage";
import { UserMessage } from "@entities/UserMessage/";
import style from "./ChatList.module.scss";

type message = {
  message: string;
  user: boolean;
  id: number;
};

const ChatList = () => {
  const [arrayMessages, setArrayMessages] = useState<message[]>([
    {
      message: "skcdkscmkmc",
      user: true,
      id: 3,
    },
    {
      message: "skcdkscmkmc",
      user: false,
      id: 2,
    },
    {
      message: "skcdkscmkmc",
      user: true,
      id: 4,
    },
    {
      message: "skcdkscmkmc",
      user: false,
      id: 1,
    },
  ]);

  return (
    <ul className={style.chatList}>
      {arrayMessages.map((item) => (
        <li>
          {item.user ? (
            <BotMessage message={item.message} key={item.id} />
          ) : (
            <UserMessage message={item.message} key={item.id} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ChatList;
