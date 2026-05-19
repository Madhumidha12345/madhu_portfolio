import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
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
    pt: { xs: "90px", md: "100px" },
    pl: { xs: 0, md: "90px" },
    pr: { xs: 0, md: 2 },

    width: "100%",
    overflowX: "hidden",
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
          {/* ABOUT */}
          <Box id="about" sx={{ scrollMarginTop: "120px" }}>
            <About />
          </Box>

          {/* SKILLS */}
          <Box id="skills" sx={{ mt: 12, scrollMarginTop: "120px" }}>
            <Skills />
          </Box>

          {/* PROJECTS */}
          <Box id="projects" sx={{ mt: 12, scrollMarginTop: "120px" }}>
            <Projects />
          </Box>

          {/* CERTIFICATIONS */}
          <Box id="certifications" sx={{ mt: 12, scrollMarginTop: "120px" }}>
            <Certifications />
          </Box>

          {/* CONTACT */}
          <Box id="contact" sx={{ mt: 12, scrollMarginTop: "120px" }}>
            <Contact />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;