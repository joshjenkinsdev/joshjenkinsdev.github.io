import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box component="footer" sx={{ textAlign: "center", p: 3, mt: 5 }}>
            <Typography variant="body2" color="text.secondary">
                © 2026 Josh Jenkins | GitHub
            </Typography>
        </Box>
    );
}
