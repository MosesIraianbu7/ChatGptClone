import { Box, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ChatHeader() {
  return (
    <Box
      sx={{
        p: 2,
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        paddingLeft: 8
      }}
    >
      <Typography variant="h6">
        ChatGPT <ExpandMoreIcon fontSize="small" />
      </Typography>
    </Box>
  );
}