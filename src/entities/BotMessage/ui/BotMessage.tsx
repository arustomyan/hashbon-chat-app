/* eslint-disable arrow-body-style */
import { MessageText } from "@shared/ui";
import { FC } from "react";

interface BotMessageTextProps {
  message: string;
}

const BotMessageText: FC<BotMessageTextProps> = ({ message }) => {
  return <MessageText message={message} />;
};

export default BotMessageText;
