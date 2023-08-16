import { FC } from "react";
import { Message, MessageText } from "@shared/ui/";
import UserAvatar from "./ui/UserAvatar.tsx";

interface UserMessageProps {
  message: string;
}

const UserMessage: FC<UserMessageProps> = ({ message }) => (
  <Message user>
    <UserAvatar size={40} />
    <MessageText message={message} />
  </Message>
);

export default UserMessage;
