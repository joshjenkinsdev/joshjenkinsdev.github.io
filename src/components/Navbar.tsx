import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        background: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124, 58, 237, 0.2)" : "1px solid transparent",
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
            background: "linear-gradient(135deg, #a78bfa, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
            letterSpacing: "-0.5px",
          }}
        >
          Josh Jenkins
        </Typography>
        <Stack direction="row" spacing={0.5}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  position: "relative",
                  color: isActive ? "#a78bfa" : "text.secondary",
                  fontWeight: isActive ? 600 : 400,
                  px: 2,
                  "&:hover": { color: "#a78bfa", background: "rgba(124, 58, 237, 0.08)" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 6,
                    left: "50%",
                    transform: isActive ? "translateX(-50%) scaleX(1)" : "translateX(-50%) scaleX(0)",
                    height: "2px",
                    width: "60%",
                    background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
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
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
