import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./index.css";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#050505",
        minHeight: "100vh",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* FLOATING NAVBAR */}
      <Navbar />

      {/* SIDEBAR */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
        }}
      >
        <Sidebar />
      </Box>

      {/* MAIN WRAPPER */}
      <Box
        sx={{
          pt: "100px", // navbar space
          pl: { xs: 0, md: "90px" }, // sidebar space fix
          pr: { xs: 0, md: 2 },
        }}
      >
        {/* HERO */}
        <Box id="home">
          <Hero />
        </Box>

        {/* SECTIONS */}
        <Box
          sx={{
            px: { xs: 3, sm: 5, md: 10 },
            py: { xs: 6, md: 10 },
          }}
        >
          <Box id="about" sx={{ scrollMarginTop: "120px" }}>
            <About />
          </Box>

          <Box id="skills" sx={{ mt: 12, scrollMarginTop: "120px" }}>
            <Skills />
          </Box>

          <Box id="projects" sx={{ mt: 12, scrollMarginTop: "120px" }}>
            <Projects />
          </Box>

          <Box id="contact" sx={{ mt: 12, scrollMarginTop: "120px" }}>
            <Contact />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default App;