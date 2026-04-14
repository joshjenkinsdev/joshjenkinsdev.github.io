import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Stack, IconButton, Tooltip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeToggle } from "../ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const toggleMode = useThemeToggle();
  const isDark = theme.palette.mode === "dark";

  const accent = isDark ? "#6ee7b7" : "#818cf8";
  const accentRgb = isDark ? "16, 185, 129" : "79, 70, 229";
  const navBg = isDark ? "rgba(10, 10, 15, 0.88)" : "rgba(250, 246, 240, 0.92)";
  const nameGradient = isDark
    ? "linear-gradient(135deg, #6ee7b7, #34d399)"
    : "linear-gradient(135deg, #818cf8, #4f46e5)";
  const underlineGradient = isDark
    ? "linear-gradient(90deg, #059669, #34d399)"
    : "linear-gradient(90deg, #4f46e5, #818cf8)";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: scrolled ? navBg : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? `1px solid rgba(${accentRgb}, 0.2)`
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            background: nameGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
            letterSpacing: "-0.5px",
          }}
        >
          Josh Jenkins
        </Typography>
        <Stack direction="row" spacing={0.5} alignItems="center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  position: "relative",
                  color: isActive ? accent : "text.secondary",
                  fontWeight: isActive ? 600 : 400,
                  px: 2,
                  "&:hover": {
                    color: accent,
                    background: `rgba(${accentRgb}, 0.08)`,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 6,
                    left: "50%",
                    transform: isActive
                      ? "translateX(-50%) scaleX(1)"
                      : "translateX(-50%) scaleX(0)",
                    height: "2px",
                    width: "60%",
                    background: underlineGradient,
                    borderRadius: "1px",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover::after": {
                    transform: "translateX(-50%) scaleX(1)",
                  },
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </Button>
            );
          })}
          <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
            <IconButton
              onClick={toggleMode}
              size="small"
              sx={{
                ml: 1,
                color: accent,
                border: `1px solid rgba(${accentRgb}, 0.3)`,
                borderRadius: "8px",
                width: 36,
                height: 36,
                "&:hover": {
                  background: `rgba(${accentRgb}, 0.1)`,
                  borderColor: accent,
                },
                transition: "all 0.2s ease",
              }}
            >
              {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
