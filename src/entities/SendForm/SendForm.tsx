import React, { useState } from "react";
import { SendButton } from "@shared/ui/";
import style from "./SendForm.module.scss";

const SendForm = () => {
  const [value, setValue] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
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
      />
      <SendButton type="submit" />
    </form>
  );
};

export default SendForm;
