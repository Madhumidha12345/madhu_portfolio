import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
} from "@mui/material";

function Certifications() {
  const certificates = [
    {
      title: "SAP S/4HANA - Sourcing and Procurement",
       image: "/certificate_1.png",
      date: "January 2026",
      link: "/certificate_1.png",
    },
    {
      title: "Oracle AI Foundations Associate",
      image: "/certificate_2.png",
      date: "March 2025",
      link: "/certificate_2.png",
    },
    {
      title: "Software Testing - Naan Mudhalvan",
      image: "/certificate_3.png",
      date: "April 2025",
      link: "/certificate_3.png",
    },
    {
      title: "Oracle Cloud Infrastructure Architecture",
      image: "/certificate_4.png",
      date: "May 2024",
      link: "/certificate_4.png",
    },
    {
      title: "Oracle Foundations Associate",
      image: "/certificate_5.png",
      date: "February 2024",
      link: "/certificate_5.png",
    },
    {
      title: "Diplomo in Desktop Publishing",
      image: "/certificate_6.png",
      date: "March 2022",
      link: "/certificate_6.png",
    }
  ];

  return (
    <Box
      id="certifications"
      sx={{
        minHeight: "100vh",
        background: "#050816",
        py: 10,
        px: 3,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 8,
        }}
      >
        Certifications & Achievements
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        spacing={5}
        useFlexGap
      >
        {certificates.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 320,
              background: "#1d1836",
              borderRadius: "20px",
              color: "white",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.title}
              sx={{
                objectFit: "cover",
              }}
            />

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                p: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  minHeight: "60px",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#aaa6c3",
                  mb: 3,
                }}
              >
                {item.date}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: "auto",
                  borderRadius: "12px",
                  py: 1.2,
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                View Certificate
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default Certifications;