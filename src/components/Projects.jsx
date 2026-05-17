// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Stack,
// } from "@mui/material";

// // LOCAL IMAGES
// import scoreboard from "../assets/scoreboard.png";
// import weather from "../assets/weather.png";
// import todo from "../assets/todo.png";

// const projects = [
//   {
//     title: "CricPulse",
//     image: scoreboard,
//     desc: "Interactive cricket dashboard with live scores and stats.",
//     tech: "React • MUI • API",
//   },
//   {
//     title: "SkyCast",
//     image: weather,
//     desc: "Modern weather app with real-time weather updates.",
//     tech: "React • API • JavaScript",
//   },
//   {
//     title: "TaskFlow",
//     image: todo,
//     desc: "Simple todo app with clean UI and local storage.",
//     tech: "React • Local Storage",
//   },
// ];

// function Projects() {
//   return (
//     <Box
//       id="projects"
//       sx={{
//         py: 10,
//         px: 3,
//         backgroundColor: "#050505",
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           color: "white",
//           textAlign: "center",
//           mb: 6,
//           fontWeight: "bold",
//         }}
//       >
//         My Projects
//       </Typography>

//       <Stack
//         direction={{ xs: "column", md: "row" }}
//         spacing={4}
//         justifyContent="center"
//         alignItems="center"
//         flexWrap="wrap"
//       >
//         {projects.map((project, index) => (
//           <Card
//             key={index}
//             sx={{
//               width: 320,
//               background: "rgba(255,255,255,0.05)",
//               backdropFilter: "blur(10px)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: "20px",
//               color: "white",
//               overflow: "hidden",
//               transition: "0.3s",
//               "&:hover": {
//                 transform: "translateY(-10px)",
//               },
//             }}
//           >
//             <CardMedia
//               component="img"
//               height="200"
//               image={project.image}
//               alt={project.title}
//             />

//             <CardContent>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontWeight: "bold",
//                   mb: 1,
//                 }}
//               >
//                 {project.title}
//               </Typography>

//               <Typography
//                 variant="body2"
//                 sx={{
//                   color: "#ccc",
//                   mb: 2,
//                 }}
//               >
//                 {project.desc}
//               </Typography>

//               <Typography
//                 variant="body2"
//                 sx={{
//                   color: "#00bfff",
//                   mb: 3,
//                 }}
//               >
//                 {project.tech}
//               </Typography>

//               <Stack direction="row" spacing={2}>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#00bfff",
//                     borderRadius: "10px",
//                     textTransform: "none",
//                   }}
//                 >
//                   Live Demo
//                 </Button>

//                 <Button
//                   variant="outlined"
//                   sx={{
//                     color: "white",
//                     borderColor: "white",
//                     borderRadius: "10px",
//                     textTransform: "none",
//                   }}
//                 >
//                   GitHub
//                 </Button>
//               </Stack>
//             </CardContent>
//           </Card>
//         ))}
//       </Stack>
//     </Box>
//   );
// }

// export default Projects;


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

  live: "https://cricket-scoreboard.vercel.app",
  github: "https://github.com/yourname/cricket-scoreboard",
},

  {
    title: "SkyCast",
    image: "/weather.png",
    desc: "Modern weather application with real-time forecast updates.",
    tech: "React • API • JavaScript",

    live: "https://your-live-link.com",
    github: "https://github.com/yourname/skycast",
  },

  {
    title: "TaskFlow",
    image: "/todo.png",
    desc: "Simple and clean todo app using local storage support.",
    tech: "React • Local Storage",

    live: "https://your-live-link.com",
    github: "https://github.com/yourname/taskflow",
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
          fontSize: {
            xs: "35px",
            md: "50px",
          },
        }}
      >
        My Projects
      </Typography>

      {/* PROJECT CARDS */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
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

            {/* CONTENT */}
            <CardContent sx={{ p: 3 }}>

              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{
                  color: "#bbb",
                  mb: 2,
                  lineHeight: 1.8,
                }}
              >
                {project.desc}
              </Typography>

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

                <Button
                  component="a"
                  href={project.live}
                  target="_blank"
                  variant="contained"
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

                <Button
                  component="a"
                  href={project.github}
                  target="_blank"
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