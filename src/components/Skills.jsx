import { Typography, Stack, Box } from "@mui/material";

function Skills() {
  const skills = [
    {
      name: "HTML",
      image: "/html.png",
    },
    {
      name: "CSS",
      image: "/css1.png",
    },
    {
      name: "JavaScript",
      image: "/javascript.png",
    },
    {
      name: "React JS",
      image: "/react.png",
    },
    {
      name: "Material UI",
      image: "/mui.png",
    },
    {
      name: "GitHub",
      image: "/github.png",
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        px: 3,
        backgroundColor: "#0f0f0f",
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "35px",
            md: "50px",
          },
          fontWeight: 700,
          color: "white",
          mb: 8,
        }}
      >
        My Skills
      </Typography>

      {/* SKILLS */}
      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              width: "180px",
              height: "180px",
              backgroundColor: "#151515",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 0 25px #ff7a00",
              },
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
              }}
            />

            <Typography
              sx={{
                color: "white",
                mt: 3,
                fontSize: "18px",
                fontWeight: 600,
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