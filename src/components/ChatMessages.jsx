import { Box, Typography } from "@mui/material";

export default function ChatMessages({ messages }) {
  return (
    <Box sx={{ flex: 1, p: 3, overflowY: "auto" }}>
      {messages.map((msg, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
            mb: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: msg.sender === "user" ? "#1976d2" : "#f1f1f1",
              color: msg.sender === "user" ? "white" : "black",
              p: 2,
              borderRadius: 3,
              maxWidth: "60%",
            }}
          >
            <Typography>{msg.text}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}