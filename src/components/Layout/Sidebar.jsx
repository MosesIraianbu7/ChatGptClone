import {
    Drawer,
    Box,
    Typography,
    Button,
    List,
    ListItemButton,
    ListItemText,
    Divider,
    Avatar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const drawerWidth = 280;

export default function Sidebar({
    drawerOpen,
    chats,
    currentChatId,
    setCurrentChatId,
    createNewChat,
}) {
    return (
        <Drawer
            variant="persistent"
            open={drawerOpen}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",   
                    justifyContent: "space-between",
                },
            }}
        >
            <Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6">Chats</Typography>
                </Box>

                <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    sx={{ my: 2 }}
                    onClick={createNewChat}
                    fullWidth
                >
                    New Chat
                </Button>

                <List>
                    {chats.map((chat) => (
                        <ListItemButton
                            key={chat.id}
                            selected={chat.id === currentChatId}
                            onClick={() => setCurrentChatId(chat.id)}
                        >
                            <ListItemText primary={chat.title} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
            <Box>
                <Divider sx={{ mb: 2 }} />
                <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    sx={{
                        p: 1,
                        borderRadius: 2,
                        cursor: "pointer",
                        "&:hover": { bgcolor: "#f5f5f5" },
                    }}
                >
                    <Avatar
                        sx={{
                            bgcolor: "#1976d2",   
                            color: "white",
                        }}
                    >M</Avatar>
                    <Typography variant="body1">Moses Iraianbu</Typography>
                </Box>
            </Box>
        </Drawer>
    );
}