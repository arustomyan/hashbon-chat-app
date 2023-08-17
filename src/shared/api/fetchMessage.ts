const URL = "http://185.46.8.130/api/v1/chat/send-message";

type fetchMessageArgs = {
  message: string;
};

const fetchMessage = async ({
  message,
}: fetchMessageArgs): Promise<ReadableStreamDefaultReader<Uint8Array>> => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (response.body) {
    return response.body.getReader();
  }

  throw new Error("Failed to fetch messages");
};

export default fetchMessage;
