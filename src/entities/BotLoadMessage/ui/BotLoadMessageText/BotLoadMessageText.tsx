import { MessageText } from "@shared/ui";
import { FC, useEffect, useState } from "react";
import style from "./BotLoadMessageText.module.scss";

interface BotLoadMessageTextProps {
  message: string;
  handleStopPrint: (message: string) => void;
  isDoneFetch: boolean;
  speedPrint?: number;
}

const BotLoadMessageText: FC<BotLoadMessageTextProps> = ({
  message,
  handleStopPrint,
  isDoneFetch,
  speedPrint,
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    /**
     * Если длина напечатанного сообщения совпадает с длиной загрущаемого сообщения и загрузка завершена,
     * вызываем функцию завершения печати.
     * Если длина значения не совпадает, добавляем следующий символ.
     */

    setTimeout(() => {
      if (value.length === message.length && isDoneFetch) {
        handleStopPrint(message);
      } else if (value.length !== message.length && message[value.length]) {
        setValue((prev) => prev + message[prev.length]);
      }
    }, speedPrint);
  }, [message, handleStopPrint, value, isDoneFetch, speedPrint]);

  return (
    <MessageText message={value}>
      <span className={style.cursor}></span>
    </MessageText>
  );
};

BotLoadMessageText.defaultProps = {
  speedPrint: 70,
};

export default BotLoadMessageText;
