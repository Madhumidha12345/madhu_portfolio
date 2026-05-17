import {
  Box,
  Typography,
  Stack,
  Button,
  Container,
} from "@mui/material";

function Navbar() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "rgba(5,5,5,0.9)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 800,
            }}
          >
            <span style={{ color: "#ff7a00" }}>M</span>ADHU
          </Typography>

          {/* Links */}
          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Skills", link: "#skills" },
              { name: "Projects", link: "#projects" },
              { name: "Contact", link: "#contact" },
            ].map((item) => (
              <Typography
                key={item.name}
                component="a"
                href={item.link}
                sx={{
                  color: "#aaa",
                  textDecoration: "none",
                  cursor: "pointer",

                  "&:hover": {
                    color: "#ff7a00",
                  },
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Stack>

          {/* Button */}
          <Button
            href="#contact"
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "#333",
              borderRadius: "12px",
              textTransform: "none",

              "&:hover": {
                borderColor: "#ff7a00",
                color: "#ff7a00",
              },
            }}
          >
            Hire Me
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;