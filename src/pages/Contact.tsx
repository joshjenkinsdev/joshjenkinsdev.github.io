import { Box, Typography, TextField, Button, Stack } from "@mui/material";

export default function Contact() {
    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 10, px: 2 }}>
            <Typography variant="h4" gutterBottom>Contact Me</Typography>
            <Stack spacing={3}>
                <TextField label="Name" fullWidth />
                <TextField label="Email" type="email" fullWidth />
                <TextField label="Message" multiline rows={4} fullWidth />
                <Button variant="contained" color="primary">Send</Button>
            </Stack>
        </Box>
    );
}
