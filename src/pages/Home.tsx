import { useState, useEffect } from "react";
import { Box, Typography, Button, Stack, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const TITLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI Engineer",
  "ML Explorer"
];

const SKILLS = [
  "React", "TypeScript", "Node.js", "PostgreSQL",
  "Python", "Machine Learning", "REST APIs",
];

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        px: 2,
        pb: 8,
      }}
    >
      {/* Ambient glow blobs */}
      <Box
        sx={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)",
          top: "-250px",
          right: "-200px",
          animation: "float 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          bottom: "-150px",
          left: "-150px",
          animation: "float 11s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ textAlign: "center", maxWidth: 820, zIndex: 1, width: "100%" }}
      >
        <motion.div variants={itemVariants}>
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              letterSpacing: 4,
              fontSize: "0.8rem",
              fontWeight: 600,
            }}
          >
            Welcome to my portfolio
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              mt: 1,
              mb: 2,
              background: "linear-gradient(135deg, #e2e8f0 30%, #a78bfa 65%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.2rem" },
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
            }}
          >
            Josh Jenkins
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h5" sx={{ color: "text.secondary", fontWeight: 400 }}>
              I'm a
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#a78bfa",
                  fontWeight: 600,
                  minWidth: { xs: "220px", sm: "280px" },
                  textAlign: "left",
                }}
              >
                {displayed}
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    width: "3px",
                    height: "1.2em",
                    background: "#a78bfa",
                    ml: "2px",
                    verticalAlign: "text-bottom",
                    animation: "blink 1s step-end infinite",
                    "@keyframes blink": {
                      "0%, 100%": { opacity: 1 },
                      "50%": { opacity: 0 },
                    },
                  }}
                />
              </Typography>
            </Box>
          </Box>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 5,
              maxWidth: 520,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Building full-stack applications with modern tools. Passionate about
            clean code and solving real problems.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Stack direction="row" spacing={2} justifyContent="center" mb={6} flexWrap="wrap" gap={2}>
            <Button
              variant="contained"
              component={Link}
              to="/projects"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 0 30px rgba(124, 58, 237, 0.35)",
                "&:hover": {
                  background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                  boxShadow: "0 0 50px rgba(124, 58, 237, 0.55)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/contact"
              size="large"
              sx={{
                borderColor: "rgba(124, 58, 237, 0.5)",
                color: "#a78bfa",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: "1rem",
                "&:hover": {
                  borderColor: "#a78bfa",
                  background: "rgba(124, 58, 237, 0.1)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.08, duration: 0.35, ease: "easeOut" }}
              >
                <Chip
                  label={skill}
                  sx={{
                    background: "rgba(124, 58, 237, 0.08)",
                    border: "1px solid rgba(124, 58, 237, 0.25)",
                    color: "#a78bfa",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                    "&:hover": {
                      background: "rgba(124, 58, 237, 0.18)",
                      borderColor: "#a78bfa",
                    },
                    transition: "all 0.2s ease",
                    cursor: "default",
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: "absolute", bottom: 24, zIndex: 1 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDownwardIcon sx={{ color: "rgba(167, 139, 250, 0.4)", fontSize: 26 }} />
      </motion.div>
    </Box>
  );
}
