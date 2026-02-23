import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import ChatHeader from "../Layout/ChatHeader";


export default function ChatArea({
  chat,
  sendMessage,
  handleSetOpen
}) {
  return (
    <>
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        transition: "margin 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
        <div>
            <IconButton
          onClick={() => handleSetOpen()}
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 1000,
          }}
        >
          <MenuIcon />
        </IconButton>
        <ChatHeader/>
        </div>
      <Box sx={{ flex: 1, p: 3, overflowY: "auto" }}>
        {chat?.messages?.length ? (
          <ChatMessages messages={chat.messages} />
        ) : (
          <Typography variant="h4" align="center" mt={10}>
            What can I help with?
          </Typography>
        )}
      </Box>

      <ChatInput sendMessage={sendMessage} />
    </Box>
    </>
  );
}