import { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider, CssBaseline, createTheme, GlobalStyles } from "@mui/material";
import { ThemeToggleContext } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const sharedTheme = {
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none" as const,
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
  },
};

const darkTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#059669",
      light: "#6ee7b7",
      dark: "#047857",
    },
    secondary: {
      main: "#34d399",
    },
    background: {
      default: "#0a0a0f",
      paper: "#13131a",
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94a3b8",
    },
  },
});

const lightTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#4f46e5",
      light: "#818cf8",
      dark: "#3730a3",
    },
    secondary: {
      main: "#8b5cf6",
    },
    background: {
      default: "#f7f0e6",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#64748b",
    },
  },
});

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -16 },
};

const pageTransition = {
  duration: 0.3,
  ease: "easeInOut" as const,
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppContent() {
  return (
    <Router basename="/">
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default function App() {
  const [mode, setMode] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme-mode");
    return saved === "light" ? "light" : "dark";
  });

  const toggleMode = useMemo(
    () => () => {
      setMode((prev) => {
        const next = prev === "dark" ? "light" : "dark";
        localStorage.setItem("theme-mode", next);
        return next;
      });
    },
    []
  );

  const theme = mode === "dark" ? darkTheme : lightTheme;

  const scrollbarStyles = useMemo(
    () => ({
      "::-webkit-scrollbar": { width: "6px" },
      "::-webkit-scrollbar-track": {
        background: mode === "dark" ? "#0a0a0f" : "#f7f0e6",
      },
      "::-webkit-scrollbar-thumb": {
        background: mode === "dark" ? "#059669" : "#4f46e5",
        borderRadius: "3px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: mode === "dark" ? "#6ee7b7" : "#818cf8",
      },
      body: {
        backgroundColor: mode === "dark" ? "#0a0a0f" : "#f7f0e6",
      },
    }),
    [mode]
  );

  return (
    <ThemeToggleContext.Provider value={toggleMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={scrollbarStyles} />
        <AppContent />
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
