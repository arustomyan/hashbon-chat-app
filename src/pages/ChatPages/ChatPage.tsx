import Chat from "@widgets/Chat/Chat";
import { LogoBlock } from "@shared/ui";
import ChatPageLayout from "./ui/ChatPageLayout/ChatPageLayout";

const ChatPage = () => (
  <ChatPageLayout>
    <LogoBlock />
    <Chat />
  </ChatPageLayout>
);

export default ChatPage;
