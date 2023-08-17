import { useCallback } from "react";
import { SendForm } from "@entities/SendForm";
import fetchMessage from "@shared/api/fetchMessage";
import { useChatContext } from "../../context/ChatContext";

const ChatSendForm = () => {
  const { handlePushMessage, setStatusLoading, statusLoading } = useChatContext();
  const fetchMessages = useCallback(
    async (message: string) => {
      setStatusLoading((prev) => ({
        ...prev,
        isLoad: true,
        isDoneFetch: false,
      }));

      const reader = await fetchMessage({ message });

      let saveValue = "";

      const push = async () => {
        const { done, value } = await reader.read();
        if (done) {
          setStatusLoading((prev) => ({
            ...prev,
            isDoneFetch: true,
          }));
          reader.releaseLock();
          return;
        }

        const text: string = new TextDecoder().decode(value);
        const arr = text
          .split("}{")
          .map((item: string, index: number, array): string => {
            // Обработка последнего элемента чанка
            if (array.length - 1 === index) {
              // Проверка является ли элемент целым объектом
              if (item[item.length - 1] === "}") {
                return `{${item}`;
              }
              // Если получена только часть объекта, сохраняем в отдельную переменную,
              // чтобы добавить его к первому элементу следующего чанка
              saveValue = item;
              return "{}";
            }

            // Проверка первого элемента чанка, является ли он целым объектом,
            // если нет то добавляем к нему часть из предыдущего чанка
            if (item[0] !== "{" && index === 0) {
              return `{${saveValue + item}}`;
            }

            // Обработка промежуточных элементов чанка
            if (item[0] !== "{" && item[0] !== "}") {
              return `{${item}}`;
            }
            // Обработка первого элемента чанка, являющегося целым объектом
            if (item[item.length - 1] !== "}") {
              return `${item}}`;
            }

            return "{}";
          })
          .reduce((acc: string[], item: string) => {
            if (item === "{}") return acc;
            const { value }: { value: string | null } = JSON.parse(item);

            if (value !== null) acc.push(value);
            return acc;
          }, []);

        // Обновление загружаемого сообщения
        setStatusLoading((prev) => ({
          ...prev,
          downloadableMessage: prev.downloadableMessage + arr.join(""),
        }));
        push();
      };

      push();
    },
    [setStatusLoading],
  );

  const handleSubmit = useCallback(
    (message: string) => {
      handlePushMessage({
        message,
        user: false,
      });
      fetchMessages(message);
    },
    [handlePushMessage, fetchMessages],
  );

  return <SendForm onSubmit={handleSubmit} disabled={statusLoading.isLoad} />;
};

export default ChatSendForm;
