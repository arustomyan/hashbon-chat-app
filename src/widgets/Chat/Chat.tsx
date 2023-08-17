import ChatLayout from "./ui/ChatLayout/ChatLayout";
import { ChatList } from "./ui/ChatList";
import ChatProvider from "./context/ChatProvider";
import ChatSendForm from "./ui/ChatSendForm/ChatSendForm";

const Chat = () => (
  <ChatProvider>
    <ChatLayout>
      <ChatList />
      <ChatSendForm />
    </ChatLayout>
  </ChatProvider>
);

export default Chat;
