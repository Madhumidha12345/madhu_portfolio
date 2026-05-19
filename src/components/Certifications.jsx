import React from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const Certifications = ({ certificates = [] }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: 4,
        justifyItems: "center",
        p: 2,
      }}
    >
      {certificates.map((item, index) => (
        <Card
          key={index}
          sx={{
            width: {
              xs: "100%",
              sm: 300,
              md: 320,
            },
            maxWidth: "320px",
            background: "#1d1836",
            borderRadius: "20px",
            color: "white",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
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
              width: "100%",
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
                backgroundColor: "#6c63ff",
                "&:hover": {
                  backgroundColor: "#574fd6",
                },
              }}
            >
              View Certificate
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Certifications;