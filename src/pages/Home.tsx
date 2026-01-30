import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Box sx={{ maxWidth: 800, mx: "auto", mt: 10, px: 2, textAlign: "center" }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Hi, I'm Josh Jenkins
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
                Full-stack developer | React, Node.js, PostgreSQL | Building projects and learning continuously.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
                <Button variant="contained" color="primary" component={Link} to="/projects">
                    View Projects
                </Button>
                <Button variant="outlined" color="primary" component={Link} to="/contact">
                    Contact Me
                </Button>
            </Stack>
        </Box>
    );
}
