import { Box, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const accent = isDark ? "#6ee7b7" : "#818cf8";
  const accentRgb = isDark ? "16, 185, 129" : "79, 70, 229";
  const nameGradient = isDark
    ? "linear-gradient(135deg, #6ee7b7, #34d399)"
    : "linear-gradient(135deg, #818cf8, #4f46e5)";

  return (
    <Box
      component="footer"
      sx={{
        borderTop: `1px solid rgba(${accentRgb}, 0.12)`,
        py: 4,
        px: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            background: nameGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 700,
            letterSpacing: "-0.3px",
          }}
        >
          Josh Jenkins
        </Typography>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} — Built with React + TypeScript
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            href="https://github.com/joshjenkinsdev"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: "text.secondary",
              "&:hover": { color: accent },
              transition: "color 0.2s ease",
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/joshjenkinsdev/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: "text.secondary",
              "&:hover": { color: accent },
              transition: "color 0.2s ease",
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
