import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from "@mui/material";

const projects = [
    { name: "Stock Forecast ML", description: "LSTM model predicting stock prices", link: "#" },
    { name: "Portfolio Website", description: "React + Vite portfolio", link: "#" },
    { name: "NAVSEA Dashboard", description: "Internal dashboard project", link: "#" },
];

export default function Projects() {
    return (
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 10, px: 2 }}>
            <Typography variant="h4" gutterBottom>
                Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((proj) => (
                    <Grid
                        key={proj.name}
                        item
                        xs={12}
                        md={4}
                    >
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{proj.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{proj.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={proj.link}>View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
