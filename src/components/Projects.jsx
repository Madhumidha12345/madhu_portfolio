import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";

const projects = [
  {
    title: "Cricket score board",
    image: "/scoreboard.png",
    desc: "Interactive cricket dashboard with live scores and match statistics.",
    tech: "React • MUI • API",
    live: "https://035-cricket-score-board-etnh.vercel.app/",
    github: "https://github.com/Madhumidha12345/035_cricket_score_board",
  },

  {
    title: "SkyCast",
    image: "/weather.png",
    desc: "Modern weather application with real-time forecast updates.",
    tech: "React • API • JavaScript",
    live: "https://weather-eta-snowy-97.vercel.app/",
    github: "https://github.com/Madhumidha12345/Weather.git",
  },

  {
    title: "TaskFlow",
    image: "/todo.png",
    desc: "Simple and clean todo app using local storage support.",
    tech: "React • Local Storage",
    live: "https://036-my-todo.vercel.app/",
    github: "https://github.com/Madhumidha12345/036_my_todo",
  },
];

function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        px: 3,
        backgroundColor: "#050505",
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          mb: 8,
          fontWeight: 700,
          fontSize: { xs: "35px", md: "50px" },
        }}
      >
        My Projects
      </Typography>

      {/* PROJECT CARDS */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              width: 320,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              color: "white",
              overflow: "hidden",
              transition: "0.4s",

              "&:hover": {
                transform: "translateY(-12px)",
                boxShadow: "0 0 30px rgba(0,191,255,0.25)",
              },
            }}
          >
            {/* IMAGE */}
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
            />

            <CardContent sx={{ p: 3 }}>
              {/* TITLE */}
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {project.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  color: "#bbb",
                  mb: 2,
                  lineHeight: 1.8,
                }}
              >
                {project.desc}
              </Typography>

              {/* TECH */}
              <Typography
                sx={{
                  color: "#00bfff",
                  mb: 3,
                  fontWeight: 500,
                }}
              >
                {project.tech}
              </Typography>

              {/* BUTTONS */}
              <Stack direction="row" spacing={2}>
                {/* LIVE DEMO */}
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(project.live, "_blank")
                  }
                  sx={{
                    backgroundColor: "#00bfff",
                    borderRadius: "12px",
                    textTransform: "none",
                    px: 3,

                    "&:hover": {
                      backgroundColor: "#0099cc",
                    },
                  }}
                >
                  Live Demo
                </Button>

                {/* GITHUB */}
                <Button
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "#444",
                    borderRadius: "12px",
                    textTransform: "none",
                    px: 3,

                    "&:hover": {
                      borderColor: "#00bfff",
                      color: "#00bfff",
                    },
                  }}
                >
                  GitHub
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default Projects;