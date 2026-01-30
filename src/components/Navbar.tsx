import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Josh Jenkins
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/projects">Projects</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
