import { FC } from "react";
import { Avatar, Message } from "@shared/ui";
import BotLoadMessageText from "./ui/BotLoadMessageText/BotLoadMessageText";

interface BotLoadMessageProps {
  message: string;
  handleStopPrint: (message: string) => void;
  isDoneFetch: boolean;
}

const BotLoadMessage: FC<BotLoadMessageProps> = ({ message, handleStopPrint, isDoneFetch }) => (
  <Message user={false}>
    <Avatar size={40} user={false} />
    <BotLoadMessageText
      message={message}
      handleStopPrint={handleStopPrint}
      isDoneFetch={isDoneFetch}
      speedPrint={10}
    />
  </Message>
);

export default BotLoadMessage;
