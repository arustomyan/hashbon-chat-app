import { useCallback } from "react";
import { BotLoadMessage } from "@entities/BotLoadMessage";
import { useChatContext } from "../../context/ChatContext";

/**
 * Компонент ChatBotLoadMessage отвечает за отображение и управление состоянием загрузки сообщений бота.
 * Он был вынесен в отдельный компонент для оптимизации рендера.
 * Вместо того чтобы обновлять весь список сообщений в ChatList.tsx при каждом добавленнии чанки,
 * обновляем только ChatBotLoadMessage.tsx.
 */

const ChatBotLoadMessage = () => {
  const { statusLoading, setStatusLoading, handlePushMessage } = useChatContext();

  // Обработчик завершения печати сообщения
  const handlePrintCompleted = useCallback(
    (value: string) => {
      // Добавление сообщения в чат
      handlePushMessage({
        message: value,
        user: true,
      });
      // Сброс состояния загрузки
      setStatusLoading((prev) => ({
        ...prev,
        isLoad: false,
        isPrint: false,
        downloadableMessage: "",
      }));
    },
    [handlePushMessage, setStatusLoading],
  );

  if (!statusLoading.isLoad) return null;

  return (
    <li>
      <BotLoadMessage
        isDoneFetch={statusLoading.isDoneFetch}
        message={statusLoading.downloadableMessage}
        handleStopPrint={handlePrintCompleted}
      />
    </li>
  );
};

export default ChatBotLoadMessage;
