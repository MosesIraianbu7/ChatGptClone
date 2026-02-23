import { Box } from "@mui/material";
import { useState } from "react";
import Sidebar from "./components/Layout/Sidebar";
import ChatArea from "./components/Chat/ChatArea";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [open , setOpen] = useState(true)

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: `New Chat ${chats.length + 1}`,
      messages: [],
    };

    setChats((prev) => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
  };
 const sendMessage = (text) => {
  if (!text.trim()) return;

  const userMessage = { sender: "user", text };
  const botMessage = {
    sender: "bot",
    text:
      text.toLowerCase() === "hi"
        ? "Hello 👋 How can I help you?"
        : "This is a hardcoded reply.",
  };

  if (!currentChatId) {
    const newChat = {
      id: Date.now(),
      title: text.slice(0, 30), 
      messages: [userMessage, botMessage],
    };

    setChats((prev) => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
    return;
  }

  setChats((prevChats) =>
    prevChats.map((chat) => {
      if (chat.id === currentChatId) {
        return {
          ...chat,
          title:
            chat.messages.length === 0
              ? text.slice(0, 30)
              : chat.title,
          messages: [...chat.messages, userMessage, botMessage],
        };
      }
      return chat;
    })
  );
};

  const currentChat = chats.find((chat) => chat.id === currentChatId);

  const handleSetOpen = () => {
    setOpen(prev => !prev)
  }

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <div>
        {open && <Sidebar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        chats={chats}
        currentChatId={currentChatId}
        setCurrentChatId={setCurrentChatId}
        createNewChat={createNewChat}
      />}
      </div>
      <ChatArea
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        chat={currentChat}
        sendMessage={sendMessage}
        handleSetOpen={handleSetOpen}
      />
    </Box>
  );
}

export default App;