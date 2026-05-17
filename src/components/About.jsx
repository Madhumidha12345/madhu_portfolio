import {
  Typography,
  Box,
  Grid,
  Stack,
  Divider,
} from "@mui/material";

function About() {
  return (
    <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  }}
>
      <Grid container spacing={8}>
        
        {/* LEFT SIDE */}
        <Grid item xs={12} md={7}>
          
          <Typography
            sx={{
              color: "#ff7a00",
              fontWeight: 700,
              letterSpacing: 1,
              mb: 2,
            }}
          >
            ABOUT ME
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 4,
            }}
          >
            Frontend
            <br />
            Developer
          </Typography>

          <Typography
            sx={{
              color: "#b0b0b0",
              lineHeight: 1.9,
              fontSize: "1rem",
              mb: 3,
            }}
          >
            I’m Madhu, a B.Sc. Computer Science student with a
            strong interest in frontend development and modern
            web technologies. I enjoy building responsive and
            user-friendly websites with clean UI and smooth
            user experience.
          </Typography>

          <Typography
            sx={{
              color: "#b0b0b0",
              lineHeight: 1.9,
              fontSize: "1rem",
              mb: 5,
            }}
          >
            I focus on creating modern web interfaces and
            continuously improving my skills through real-world
            projects and learning new technologies.
          </Typography>

          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.08)",
              mb: 5,
            }}
          />

          {/* EDUCATION */}
          <Typography
            sx={{
              color: "white",
              fontSize: "1.5rem",
              fontWeight: 700,
              mb: 4,
            }}
          >
            Education
          </Typography>

          <Stack spacing={4}>
            
            <Box>
              <Typography
                sx={{
                  color: "#ff7a00",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                B.Sc Computer Science
              </Typography>

              <Typography sx={{ color: "white" }}>
                Vivekananda Arts and Science College for Women
              </Typography>

              <Typography
                sx={{
                  color: "#777",
                  mt: 0.5,
                }}
              >
                Sirkali • Expected Graduation 2025
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#ff7a00",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Higher Secondary Education
              </Typography>

              <Typography sx={{ color: "white" }}>
                Government Girls Higher Secondary School
              </Typography>

              <Typography
                sx={{
                  color: "#777",
                  mt: 0.5,
                }}
              >
                Manalmedu • Completed in 2022
              </Typography>
            </Box>

          </Stack>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={5}>
          
          <Box
            sx={{
              backgroundColor: "#111",
              borderRadius: "24px",
              p: { xs: 4, md: 5 },
              border: "1px solid rgba(255,255,255,0.05)",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: 700,
                mb: 3,
              }}
            >
              What I Do
            </Typography>

            <Typography
              sx={{
                color: "#999",
                lineHeight: 1.9,
                mb: 4,
              }}
            >
              I build responsive and modern websites focused on
              clean design, smooth performance and better user
              experience.
            </Typography>

            <Stack spacing={3}>
              
              <Box>
                <Typography
                  sx={{
                    color: "#ff7a00",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Frontend Development
                </Typography>

                <Typography
                  sx={{
                    color: "#888",
                    lineHeight: 1.7,
                  }}
                >
                  Creating responsive and interactive web pages
                  using modern frontend technologies.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#ff7a00",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  UI Design
                </Typography>

                <Typography
                  sx={{
                    color: "#888",
                    lineHeight: 1.7,
                  }}
                >
                  Designing clean layouts with better user
                  experience and visual consistency.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#ff7a00",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Continuous Learning
                </Typography>

                <Typography
                  sx={{
                    color: "#888",
                    lineHeight: 1.7,
                  }}
                >
                  Exploring new technologies and improving
                  development skills through projects.
                </Typography>
              </Box>

            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;