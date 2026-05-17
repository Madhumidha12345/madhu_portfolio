import {
  Typography,
  Stack,
  Box,
} from "@mui/material";

import html from "../assets/html.png";
import css from "../assets/css1.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import mui from "../assets/mui.png";
import github from "../assets/github.png";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "React JS",
      image: react,
    },
    {
      name: "Material UI",
      image: mui,
    },
    {
      name: "GitHub",
      image: github,
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          color: "#ff7a00",
          fontWeight: 700,
          letterSpacing: 1,
          mb: 2,
        }}
      >
        MY SKILLS
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "2.5rem", md: "4rem" },
          fontWeight: 800,
          lineHeight: 1.1,
          mb: 4,
        }}
      >
        Tools &
        <br />
        Technologies
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          color: "#999",
          maxWidth: "700px",
          lineHeight: 1.9,
          mb: 7,
        }}
      >
        I enjoy building responsive and visually appealing web
        applications using modern frontend technologies with
        clean UI and smooth user experience.
      </Typography>
      

    {/* Skills Grid */}
<Stack
  direction="row"
  flexWrap="wrap"
  justifyContent="center"
  spacing={4} 
  useFlexGap
>
  {skills.map((skill) => (
    <Box
      key={skill.name}
      sx={{
        width: {
          xs: "140px",
          sm: "170px",
          md: "190px",
        },

        height: {
          xs: "160px",
          sm: "190px",
          md: "210px",
        },

        bgcolor: "#111",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.08)",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        transition: "0.3s ease",

        "&:hover": {
          transform: "translateY(-8px)",
          borderColor: "#ff7a00",
          boxShadow: "0 10px 30px rgba(255,122,0,0.15)",
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={skill.image}
        alt={skill.name}
        sx={{
          width: {
            xs: 60,
            sm: 75,
            md: 90,
          },

          height: {
            xs: 60,
            sm: 75,
            md: 90,
          },

          objectFit: "contain",
          mb: 2.5,
        }}
      />

      {/* Skill Name */}
      <Typography
        sx={{
          color: "white",
          fontWeight: 600,
          fontSize: {
            xs: "1rem",
            md: "1.05rem",
          },
        }}
      >
        {skill.name}
      </Typography>
    </Box>
  ))}
 </Stack>
    </Box>
  );
}

export default Skills;
