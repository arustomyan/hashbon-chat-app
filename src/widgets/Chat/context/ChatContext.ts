import { createContext, useContext } from "react";

// Типы для сообщений
type Message = {
  message: string;
  user: boolean;
  id: string;
};

// Типы для состояния загрузки
type LoadingStatus = {
  isLoad: boolean;
  isDoneFetch: boolean;
  isPrint: boolean;
  downloadableMessage: string;
};

// Типы для функции добавления сообщений
type HandlePushMessage = ({ user, message }: { user: boolean; message: string }) => void;

// Тип контекста
type ChatContextType = {
  messages: Message[];
  handlePushMessage: HandlePushMessage;
  statusLoading: LoadingStatus;
  setStatusLoading: React.Dispatch<React.SetStateAction<LoadingStatus>>;
};

// Создание контекста
const ChatContext = createContext<ChatContextType | null>(null);

const useChatContext = () => useContext(ChatContext) as ChatContextType;

export default ChatContext;
export { useChatContext };
export type { HandlePushMessage, Message, LoadingStatus };
