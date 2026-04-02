import { Box, Typography, TextField, Button, Stack, Divider, IconButton } from "@mui/material";
import { motion } from "framer-motion";
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
  return (
    <Box
      sx={{
        maxWidth: 680,
        mx: "auto",
        px: { xs: 2, sm: 4 },
        py: 10,
      }}
    >
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
            background: "linear-gradient(135deg, #e2e8f0 40%, #a78bfa 100%)",
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
        sx={{
          background: "rgba(19, 19, 26, 0.85)",
          border: "1px solid rgba(124, 58, 237, 0.2)",
          borderRadius: 3,
          p: { xs: 3, sm: 4 },
          backdropFilter: "blur(12px)",
          mb: 4,
        }}
      >
        <Stack spacing={3}>
          {(["Name", "Email", "Message"] as const).map((label, i) => (
            <motion.div key={label} custom={i} variants={itemVariants} initial="hidden" animate="visible">
              <TextField
                label={label}
                type={label === "Email" ? "email" : "text"}
                multiline={label === "Message"}
                rows={label === "Message" ? 5 : 1}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgba(124, 58, 237, 0.25)" },
                    "&:hover fieldset": { borderColor: "rgba(124, 58, 237, 0.5)" },
                    "&.Mui-focused fieldset": { borderColor: "#7c3aed" },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#a78bfa" },
                }}
              />
            </motion.div>
          ))}
          <motion.div custom={3} variants={itemVariants} initial="hidden" animate="visible">
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                py: 1.5,
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 0 30px rgba(124, 58, 237, 0.25)",
                "&:hover": {
                  background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                  boxShadow: "0 0 50px rgba(124, 58, 237, 0.45)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Send Message
            </Button>
          </motion.div>
        </Stack>
      </Box>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Divider sx={{ borderColor: "rgba(124, 58, 237, 0.15)", mb: 3 }} />
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 2.5, textAlign: "center" }}
        >
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
                border: "1px solid rgba(124, 58, 237, 0.2)",
                p: 1.5,
                borderRadius: 2,
                "&:hover": {
                  color: "#a78bfa",
                  borderColor: "rgba(124, 58, 237, 0.5)",
                  background: "rgba(124, 58, 237, 0.08)",
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
