import { useState, useEffect } from "react";
import { Box, Typography, Button, Stack, Chip, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CodeIcon from "@mui/icons-material/Code";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const TITLES = [
  "Full-Stack Developer",
  "Software Engineer",
  "Data Scientist",
  "Technical Architect",
];

const SKILLS = [
  "React", "TypeScript", "Node.js", "PostgreSQL",
  "Python", "Machine Learning", "REST APIs", "Django",
];

const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "SQL", "C"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["Django", "Django REST Framework", "React", "Angular", "Flask", "Node.js", "PyTorch", "TensorFlow"],
  },
  {
    label: "Infrastructure & Tools",
    items: ["Docker", "PostgreSQL", "AWS (EC2, RDS, Amplify)", "Azure", "Celery", "Git"],
  },
  {
    label: "Concepts",
    items: ["Agile / Scrum", "CI/CD Pipelines", "RESTful API Design", "Containerization"],
  },
];

const EXPERIENCE = [
  {
    role: "Backend Developer",
    company: "Drund",
    period: "Jul 2024 – Mar 2026",
    bullets: [
      "Built and maintained production-grade RESTful APIs using Django REST Framework in a containerized environment backed by Docker and PostgreSQL.",
      "Led cross-team handoffs, coordinated meetings and technical guides shared with engineering stakeholders with a focus on end-user experience.",
      "Developed Stripe payment integration across client-facing applications, including 3D Secure authentication flows.",
      "Investigated and resolved production issues, prioritizing client-facing reliability and system stability.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Naval Sea Systems Command (NAVSEA)",
    period: "Jun 2023 – Aug 2023",
    bullets: [
      "Delivered full-stack features in an Agile workflow using Angular, React, Node.js, C#, and SQL across internal defense applications.",
      "Spearheaded Playwright integration for automated end-to-end testing, improving deployment confidence.",
      "Managed version control via Azure DevOps and presented technical progress to organizational stakeholders.",
      "Obtained a government-issued security clearance to work with sensitive systems and data.",
    ],
  },
  {
    role: "IT Systems Generalist",
    company: "Infrared Processing & Analysis Center (IPAC) at Caltech",
    period: "May 2022 – Aug 2022",
    bullets: [
      "Automated data processing workflows using Python scripts and C programs, reducing manual effort for the IT team.",
      "Maintained physical servers and local network infrastructure in a research computing environment using UNIX system administration practices.",
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

function SectionHeading({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: "10px",
          background: "rgba(16, 185, 129, 0.15)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          color: "#6ee7b7",
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          background: "linear-gradient(135deg, #e2e8f0 30%, #6ee7b7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontSize: { xs: "1.6rem", sm: "2rem" },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

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
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* ── HERO ── */}
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          width: "100%",
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
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%)",
            bottom: "-150px",
            left: "-150px",
            animation: "float 11s ease-in-out infinite reverse",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

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
                background: "linear-gradient(135deg, #e2e8f0 30%, #6ee7b7 65%, #34d399 100%)",
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
                    color: "#6ee7b7",
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
                      background: "#6ee7b7",
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
              Versatile software engineer with production experience in defense contracting,
              academic research, and commercial product development.
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
                  background: "linear-gradient(135deg, #059669, #047857)",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: "1rem",
                  boxShadow: "0 0 30px rgba(16, 185, 129, 0.35)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    boxShadow: "0 0 50px rgba(16, 185, 129, 0.55)",
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
                  borderColor: "rgba(16, 185, 129, 0.5)",
                  color: "#6ee7b7",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: "1rem",
                  "&:hover": {
                    borderColor: "#6ee7b7",
                    background: "rgba(16, 185, 129, 0.1)",
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
                      background: "rgba(16, 185, 129, 0.08)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      color: "#6ee7b7",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                      "&:hover": {
                        background: "rgba(16, 185, 129, 0.18)",
                        borderColor: "#6ee7b7",
                      },
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                mt: 10,
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {[
                { label: "About Me", id: "about" },
                { label: "Experience", id: "experience" },
                { label: "Education", id: "education" },
                { label: "Skills", id: "skills" },
              ].map((item) => (
                <Button
                  key={item.id}
                  size="small"
                  onClick={() =>
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                  }
                  sx={{
                    borderRadius: "8px",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "rgba(110, 231, 183, 0.75)",
                    px: 7,
                    py: 2,
                    fontSize: "1.0rem",
                    fontWeight: 500,
                    background: "rgba(16, 185, 129, .05)",
                    "&:hover": {
                      background: "rgba(16, 185, 129, 0.12)",
                      borderColor: "#6ee7b7",
                      color: "#6ee7b7",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ position: "absolute", bottom: 24, zIndex: 1 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDownwardIcon sx={{ color: "rgba(110, 231, 183, 0.4)", fontSize: 75 }} />
        </motion.div>
      </Box>

      {/* ── ABOUT ── */}
      <Box
        id="about"
        component="section"
        sx={{
          width: "100%",
          maxWidth: 860,
          px: { xs: 2, sm: 4 },
          py: { xs: 8, sm: 10 },
        }}
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading icon={<PersonOutlineIcon fontSize="small" />} label="About Me" />
          <Box
            sx={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(16, 185, 129, 0.18)",
              borderRadius: "16px",
              p: { xs: 3, sm: 4 },
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                fontSize: "1.05rem",
              }}
            >
              Hi, I'm Josh. My journey into technology started in elementary school, where I was the "go-to" 
              student for troubleshooting classroom tech issues. That early curiosity evolved into a passion 
              for software engineering - a field that allows me to build impactful tools from the ground up 
              and deploy them to the world with a single click. Today, as a driven software engineer, I focus 
              on creating seamless digital experiences and solving complex problems with clean code. I'm always 
              looking for the next challenge to build, learn, and grow from. Thanks for stopping by!
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Divider sx={{ width: "100%", maxWidth: 860, borderColor: "rgba(16, 185, 129, 0.12)" }} />

      {/* ── EXPERIENCE ── */}
      <Box
        id="experience"
        component="section"
        sx={{
          width: "100%",
          maxWidth: 860,
          px: { xs: 2, sm: 4 },
          py: { xs: 8, sm: 10 },
        }}
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionHeading icon={<WorkOutlineIcon fontSize="small" />} label="Experience" />
        </motion.div>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.company}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(16, 185, 129, 0.18)",
                  borderRadius: "16px",
                  p: { xs: 3, sm: 4 },
                  backdropFilter: "blur(8px)",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    borderColor: "rgba(16, 185, 129, 0.4)",
                    boxShadow: "0 4px 32px rgba(16, 185, 129, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 0.5,
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={700} sx={{ color: "#e2e8f0" }}>
                      {job.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6ee7b7", fontWeight: 500 }}>
                      {job.company}
                    </Typography>
                  </Box>
                  <Chip
                    label={job.period}
                    size="small"
                    sx={{
                      background: "rgba(16, 185, 129, 0.1)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      mt: { xs: 0.5, sm: 0 },
                    }}
                  />
                </Box>
                <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {job.bullets.map((b) => (
                    <Box
                      component="li"
                      key={b}
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                        mb: 0.5,
                        "&::marker": { color: "rgba(16, 185, 129, 0.5)" },
                      }}
                    >
                      {b}
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      <Divider sx={{ width: "100%", maxWidth: 860, borderColor: "rgba(16, 185, 129, 0.12)" }} />

      {/* ── EDUCATION ── */}
      <Box
        id="education"
        component="section"
        sx={{
          width: "100%",
          maxWidth: 860,
          px: { xs: 2, sm: 4 },
          py: { xs: 8, sm: 10 },
        }}
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading icon={<SchoolOutlinedIcon fontSize="small" />} label="Education" />
          <Box
            sx={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(16, 185, 129, 0.18)",
              borderRadius: "16px",
              p: { xs: 3, sm: 4 },
              backdropFilter: "blur(8px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              "&:hover": {
                borderColor: "rgba(16, 185, 129, 0.4)",
                boxShadow: "0 4px 32px rgba(16, 185, 129, 0.1)",
              },
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={700} sx={{ color: "#e2e8f0" }}>
                California Polytechnic State University, Pomona
              </Typography>
              <Typography variant="body2" sx={{ color: "#6ee7b7", fontWeight: 500, mt: 0.5 }}>
                B.S. Computer Science &nbsp;·&nbsp; Minor: Data Science
              </Typography>
            </Box>
            <Chip
              label="Spring 2024"
              size="small"
              sx={{
                background: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                color: "text.secondary",
                fontWeight: 500,
                fontSize: "0.75rem",
                flexShrink: 0,
              }}
            />
          </Box>
        </motion.div>
      </Box>

      <Divider sx={{ width: "100%", maxWidth: 860, borderColor: "rgba(16, 185, 129, 0.12)" }} />

      {/* ── SKILLS ── */}
      <Box
        id="skills"
        component="section"
        sx={{
          width: "100%",
          maxWidth: 860,
          px: { xs: 2, sm: 4 },
          py: { xs: 8, sm: 10 },
        }}
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionHeading icon={<CodeIcon fontSize="small" />} label="Technical Skills" />
        </motion.div>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(16, 185, 129, 0.18)",
                  borderRadius: "16px",
                  p: { xs: 3, sm: 4 },
                  backdropFilter: "blur(8px)",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "rgba(110, 231, 183, 0.7)",
                    letterSpacing: 2,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    display: "block",
                    mb: 2,
                  }}
                >
                  {group.label}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {group.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      sx={{
                        background: "rgba(16, 185, 129, 0.08)",
                        border: "1px solid rgba(16, 185, 129, 0.22)",
                        color: "#a7f3d0",
                        fontWeight: 500,
                        fontSize: "0.82rem",
                        "&:hover": {
                          background: "rgba(16, 185, 129, 0.18)",
                          borderColor: "#6ee7b7",
                        },
                        transition: "all 0.2s ease",
                        cursor: "default",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
