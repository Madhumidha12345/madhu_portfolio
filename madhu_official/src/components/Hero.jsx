import {
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Box,
  Avatar,
} from "@mui/material";

function Hero() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={8}
        alignItems="center"
        sx={{
          minHeight: "85vh",
        }}
      >
        {/* LEFT */}
        <Grid item xs={12} md={7}>
          <Typography
            sx={{
              color: "#ff7a00",
              mb: 2,
              letterSpacing: 2,
            }}
          >
             
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "45px",
                md: "75px",
              },
              fontWeight: 900,
            }}
          >
            Madhumidha R
          </Typography>

          <Typography
            sx={{
              color: "#888",
              fontSize: "28px",
              mt: 2,
              mb: 3,
            }}
          >
            Frontend Developer
          </Typography>

          <Typography
            sx={{
              color: "#666",
              lineHeight: 2,
              mb: 5,
              maxWidth: "550px",
            }}
          >
            I am a passionate Frontend Developer focused on building responsive, user-friendly, and visually appealing web applications. I enjoy turning design ideas into real-world interactive websites.

I have strong knowledge in HTML, CSS, JavaScript, and React.js. I always focus on writing clean, reusable code and improving performance and user experience.

I am currently looking for opportunities to contribute and grow as a Frontend Developer in a dynamic team.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#ff7a00",
                px: 5,
                py: 1.5,
                borderRadius: "14px",
                textTransform: "none",
              }}
            >
              Hire Me
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "#333",
                px: 5,
                py: 1.5,
                borderRadius: "14px",
                textTransform: "none",

                "&:hover": {
                  borderColor: "#ff7a00",
                },
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Grid>

        {/* RIGHT */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 350,
                height: 350,
                borderRadius: "50%",
                bgcolor: "#ff7a00",
                filter: "blur(120px)",
                opacity: 0.25,
                position: "absolute",
              }}
            />

            <Avatar
              sx={{
                width: 320,
                height: 320,
                bgcolor: "#111",
                border: "6px solid #ff7a00",
                fontSize: "22px",
                zIndex: 2,
              }}
            >
              IMAGE
            </Avatar>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;