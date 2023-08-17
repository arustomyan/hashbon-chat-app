import { FC, useCallback, useState } from "react";
import { generateUniqueId } from "@shared/utils";
import ChatContext, { HandlePushMessage, LoadingStatus, Message } from "./ChatContext";

const usePushMessage = (): [Message[], HandlePushMessage] => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePushMessage: HandlePushMessage = useCallback(({ user, message }) => {
    setMessages((prev) => [
      ...prev,
      {
        message,
        id: generateUniqueId(),
        user,
      },
    ]);
  }, []);

  return [messages, handlePushMessage];
};

// Начальное приветственное сообщение от бота
const greetingMessage = "Hello! I’m BotHub, AI-based bot designed to answer all your questions.";

const ChatProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, handlePushMessage] = usePushMessage();
  const [statusLoading, setStatusLoading] = useState<LoadingStatus>({
    isLoad: true,
    isDoneFetch: true,
    isPrint: true,
    downloadableMessage: greetingMessage,
  });

  return (
    <ChatContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ messages, handlePushMessage, statusLoading, setStatusLoading }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
