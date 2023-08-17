import { SendForm } from "@entities/SendForm";
import { ChatList } from "@widgets/ChatList";
import { LogoBlock } from "@shared/ui";
import { useCallback, useState } from "react";
import fetchMessage from "@shared/api/fetchMessage";
import { generateUniqueId } from "@shared/utils";
import style from "./ChatPages.module.scss";

type message = {
  message: string;
  user: boolean;
  id: string;
};

// Начальное приветственное сообщение от бота
const greetingMessage = "Hello! I’m BotHub, AI-based bot designed to answer all your questions.";

const ChatPages = () => {
  const [arrayMessages, setArrayMessages] = useState<message[]>([]);
  const [downloadableMessage, setDownloadableMessage] = useState<string>(greetingMessage);
  const [isPrintMessage, setIsPrintMessage] = useState(true);
  const [isDoneFetch, setIsDoneFetch] = useState(true);

  // Функция для добавления завершенного сообщения в список
  const handlePrintCompleted = useCallback((value: string) => {
    setArrayMessages((prev) => [
      ...prev,
      {
        message: value,
        user: true,
        id: generateUniqueId(),
      },
    ]);
    setIsPrintMessage(false);
    setDownloadableMessage("");
  }, []);

  // Функция для загрузки сообщений через API
  const fetchMessages = useCallback(async (message: string) => {
    const reader = await fetchMessage({ message });
    setIsPrintMessage(true);
    setIsDoneFetch(false);

    let saveValue = "";

    const push = async () => {
      const { done, value } = await reader.read();
      if (done) {
        setIsDoneFetch(true);
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
      setDownloadableMessage((prev) => prev + arr.join(""));
      push();
    };

    push();
  }, []);

  // Функция для обработки отправки пользовательского сообщения
  const handleSubmit = useCallback(
    (value: string) => {
      setArrayMessages((prev) => [
        ...prev,
        {
          message: value,
          id: generateUniqueId(),
          user: false,
        },
      ]);
      fetchMessages(value);
    },
    [fetchMessages],
  );

  return (
    <div className={style.chatPage}>
      <div className={style.container}>
        <LogoBlock />
        <div className={style.windowChat}>
          <div className="ff">
            <ChatList
              messages={arrayMessages}
              isLoad={isPrintMessage}
              isDoneFetch={isDoneFetch}
              loadMessage={downloadableMessage}
              handleStopPrint={handlePrintCompleted}
            />
          </div>
          <SendForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ChatPages;
