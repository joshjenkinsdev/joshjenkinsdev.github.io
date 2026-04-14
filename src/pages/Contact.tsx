import { useState } from "react";
import { Box, Typography, TextField, Button, Stack, Divider, IconButton, Alert } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const accent = isDark ? "#6ee7b7" : "#818cf8";
  const accentRgb = isDark ? "16, 185, 129" : "79, 70, 229";
  const accentMain = isDark ? "#059669" : "#4f46e5";
  const accentDark = isDark ? "#047857" : "#3730a3";
  const accentHover = isDark ? "#10b981" : "#6366f1";
  const headingGradient = isDark
    ? "linear-gradient(135deg, #e2e8f0 0%, #10b981 30%)"
    : "linear-gradient(135deg, #0f172a 0%, #4f46e5 30%)";
  const formBg = isDark ? "rgba(19, 19, 26, 0.85)" : "rgba(253, 248, 241, 0.92)";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/mvzvbwrl`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: isDark ? undefined : "transparent",
      "& fieldset": { borderColor: `rgba(${accentRgb}, 0.25)` },
      "&:hover fieldset": { borderColor: `rgba(${accentRgb}, 0.5)` },
      "&.Mui-focused fieldset": { borderColor: accentMain },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: accent },
  };

  return (
    <Box sx={{ maxWidth: 680, mx: "auto", px: { xs: 2, sm: 4 }, py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="overline"
          sx={{ color: "secondary.main", letterSpacing: 4, fontWeight: 600, fontSize: "0.8rem" }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{
            mt: 0.5,
            mb: 1,
            background: headingGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-1px",
          }}
        >
          Contact Me
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 5, maxWidth: 480 }}>
          Have a question, opportunity, or just want to say hi? I'd love to hear from you.
        </Typography>
      </motion.div>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          background: formBg,
          border: `1px solid rgba(${accentRgb}, 0.2)`,
          borderRadius: 3,
          p: { xs: 3, sm: 4 },
          backdropFilter: "blur(12px)",
          mb: 4,
        }}
      >
        <Stack spacing={3}>
          {status === "success" && (
            <Alert
              severity="success"
              sx={{
                background: `rgba(${accentRgb}, 0.1)`,
                border: `1px solid rgba(${accentRgb}, 0.3)`,
                color: accent,
                "& .MuiAlert-icon": { color: accent },
              }}
            >
              Message sent! I'll get back to you soon.
            </Alert>
          )}
          {status === "error" && (
            <Alert
              severity="error"
              sx={{
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
              }}
            >
              Something went wrong. Please try again or email me directly.
            </Alert>
          )}

          <motion.div custom={0} variants={itemVariants} initial="hidden" animate="visible">
            <TextField
              label="Name"
              name="name"
              value={fields.name}
              onChange={handleChange}
              required
              fullWidth
              sx={textFieldSx}
            />
          </motion.div>

          <motion.div custom={1} variants={itemVariants} initial="hidden" animate="visible">
            <TextField
              label="Email"
              name="email"
              type="email"
              value={fields.email}
              onChange={handleChange}
              required
              fullWidth
              sx={textFieldSx}
            />
          </motion.div>

          <motion.div custom={2} variants={itemVariants} initial="hidden" animate="visible">
            <TextField
              label="Message"
              name="message"
              value={fields.message}
              onChange={handleChange}
              required
              multiline
              rows={5}
              fullWidth
              sx={textFieldSx}
            />
          </motion.div>

          <motion.div custom={3} variants={itemVariants} initial="hidden" animate="visible">
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={status === "loading"}
              sx={{
                background: `linear-gradient(135deg, ${accentMain}, ${accentDark})`,
                py: 1.5,
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: `0 0 30px rgba(${accentRgb}, 0.25)`,
                "&:hover": {
                  background: `linear-gradient(135deg, ${accentHover}, ${accentMain})`,
                  boxShadow: `0 0 50px rgba(${accentRgb}, 0.4)`,
                  transform: "translateY(-2px)",
                },
                "&.Mui-disabled": {
                  background: `rgba(${accentRgb}, 0.2)`,
                  color: `rgba(${accentRgb === "16, 185, 129" ? "110, 231, 183" : "129, 140, 248"}, 0.5)`,
                },
                transition: "all 0.3s ease",
              }}
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </Button>
          </motion.div>
        </Stack>
      </Box>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Divider sx={{ borderColor: `rgba(${accentRgb}, 0.15)`, mb: 3 }} />
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5, textAlign: "center" }}>
          Or find me on
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          {[
            { icon: <GitHubIcon />, label: "GitHub", href: "https://github.com/joshjenkinsdev" },
            { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/joshjenkins2/" },
            { icon: <EmailIcon />, label: "Email", href: "mailto:dajoesh@gmail.com" },
          ].map((social) => (
            <IconButton
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "text.secondary",
                border: `1px solid rgba(${accentRgb}, 0.2)`,
                p: 1.5,
                borderRadius: 2,
                "&:hover": {
                  color: accent,
                  borderColor: `rgba(${accentRgb}, 0.5)`,
                  background: `rgba(${accentRgb}, 0.08)`,
                  transform: "translateY(-3px)",
                },
                transition: "all 0.25s ease",
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
}
