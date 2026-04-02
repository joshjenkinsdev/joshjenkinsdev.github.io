import { Box, Typography, Card, CardContent, CardActions, Button, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const projects = [
  {
    name: "Job Tracker Web App",
    description:
      "Full-stack job application tracker with AI-powered resume analysis and cover letter generation. Built with React, Node.js, PostgreSQL, and Claude AI API - all deployed on AWS.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "AI"],
    link: "https://main.d11b8apz1u5a7z.amplifyapp.com/",
    demo: "https://www.youtube.com/watch?v=Oy5rgscOAbM",
    accentGradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    name: "Stock Forecast ML",
    description:
      "LSTM neural network model predicting stock price movements using historical market data and technical indicators. Trains on as many years of data as requested by the user and pulls directly from yfinance API.",
    tech: ["Python", "TensorFlow", "LSTM", "Pandas", "NumPy"],
    link: "https://github.com/joshjenkinsdev/ML-Stock-Market-Prediction",
    demo: "https://drive.google.com/file/d/1ma8c-kOw4xklhKCWYJsV8uJMIjgmYdiR/view",
    accentGradient: "linear-gradient(135deg, #7c3aed, #06b6d4)",
  },
  {
    name: "Portfolio Website",
    description:
      "This very site - built with React, TypeScript, Vite, and Material UI. Features smooth page transitions, typewriter animations, and glassmorphism UI.",
    tech: ["React", "TypeScript", "Vite", "MUI", "Framer Motion"],
    link: "https://joshjenkinsdev.github.io",
    accentGradient: "linear-gradient(135deg, #06b6d4, #10b981)",
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", px: { xs: 2, sm: 4 }, py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="overline"
          sx={{ color: "secondary.main", letterSpacing: 4, fontWeight: 600, fontSize: "0.8rem" }}
        >
          My Work
        </Typography>
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{
            mt: 0.5,
            mb: 1,
            background: "linear-gradient(135deg, #e2e8f0 40%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-1px",
          }}
        >
          Projects
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 7, maxWidth: 480 }}>
          A selection of things I've built. More on GitHub.
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          gap: 28,
        }}
      >
        {projects.map((proj) => (
          <motion.div key={proj.name} variants={cardVariants} style={{ display: "flex" }}>
            <Card
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                background: "rgba(19, 19, 26, 0.85)",
                border: "1px solid rgba(124, 58, 237, 0.15)",
                backdropFilter: "blur(12px)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                  transform: "translateY(-8px)",
                  boxShadow: "0 24px 60px rgba(124, 58, 237, 0.2)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: proj.accentGradient,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ mb: 1.5, color: "text.primary", fontSize: "1.1rem" }}
                >
                  {proj.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 3, lineHeight: 1.75, fontSize: "0.9rem" }}
                >
                  {proj.description}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={0.75}>
                  {proj.tech.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        background: "rgba(124, 58, 237, 0.08)",
                        border: "1px solid rgba(124, 58, 237, 0.2)",
                        color: "text.secondary",
                        fontSize: "0.72rem",
                        height: 24,
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
                <Button
                  size="small"
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewIcon sx={{ fontSize: "0.9rem !important" }} />}
                  sx={{
                    color: "#a78bfa",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    p: 0,
                    "&:hover": { color: "#c4b5fd", background: "transparent" },
                    transition: "color 0.2s ease",
                  }}
                >
                  View Project
                </Button>
                {"demo" in proj && (
                  <Button
                    size="small"
                    href={(proj as typeof proj & { demo: string }).demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<PlayCircleOutlineIcon sx={{ fontSize: "1rem !important" }} />}
                    sx={{
                      color: "#06b6d4",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      p: 0,
                      ml: 1,
                      "&:hover": { color: "#67e8f9", background: "transparent" },
                      transition: "color 0.2s ease",
                    }}
                  >
                    Watch Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
}
