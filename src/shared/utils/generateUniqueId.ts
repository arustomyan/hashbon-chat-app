const generateUniqueId = (): string => {
  const timestamp = new Date().getTime().toString();
  const randomNum = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return `${timestamp}-${randomNum}`;
};

export default generateUniqueId;
