import React, { FC, useState } from "react";
import { SendButton } from "@shared/ui/";
import style from "./SendForm.module.scss";

const SendForm: FC<{ onSubmit: (message: string) => void; disabled: boolean }> = ({
  onSubmit,
  disabled,
}) => {
  const [value, setValue] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (value !== "") {
      onSubmit(value);
      setValue("");
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <form className={style.sendForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Start typing here..."
        onChange={handleChange}
        className={style.input}
        disabled={disabled}
      />
      <SendButton type="submit" disabled={disabled} />
    </form>
  );
};

export default SendForm;
