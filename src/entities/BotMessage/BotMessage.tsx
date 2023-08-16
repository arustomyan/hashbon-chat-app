import { FC } from "react";
import { Avatar, Message } from "@shared/ui/";
import BotMessageText from "./ui/BotMessage.tsx";

interface BotMessageProps {
  message: string;
}

const BotMessage: FC<BotMessageProps> = ({ message }) => (
  <Message user={false}>
    <Avatar size={40} user={false} />
    <BotMessageText message={message} />
  </Message>
);

export default BotMessage;
