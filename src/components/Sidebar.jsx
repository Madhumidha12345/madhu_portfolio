import { Box, Stack, IconButton } from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Instagram,
  Email,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <Box
      sx={{
        position: "fixed",
        right: 25,
        top: "35%",
        display: { xs: "none", md: "block" },
        zIndex: 1000,

        //float animation
        animation: "sideFloat 3.5s ease-in-out infinite",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          bgcolor: "rgba(3, 0, 5, 0.8)",
          p: 1.2,
          borderRadius: "30px",
          border: "4px solid rgba(67, 7, 179, 0.5)",
          backdropFilter: "blur(10px)",

          boxShadow: "0 0 20px rgba(174, 219, 10, 0.1)",
        }}
      >
        {/* LinkedIn */}
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          sx={{
            color: "#777",
            "&:hover": {
              color: "#107eec",
              transform: "scale(1.15)",
            },
          }}
        >
          <LinkedIn />
        </IconButton>

        {/* GitHub */}
        <IconButton
          component="a"
          href="https://github.com"
          target="_blank"
          sx={{
            color: "#777",
            "&:hover": {
              color: "#fff",
              transform: "scale(1.15)",
            },
          }}
        >
          <GitHub />
        </IconButton>

        {/* Instagram */}
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          sx={{
            color: "#777",
            "&:hover": {
              color: "#f3115c",
              transform: "scale(1.15)",
            },
          }}
        >
          <Instagram />
        </IconButton>

        {/* Email */}
        <IconButton
          component="a"
          href="mailto:yourmail@gmail.com"
          sx={{
            color: "#777",
            "&:hover": {
              color: "#ff7a00",
              transform: "scale(1.15)",
            },
          }}
        >
          <Email />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Sidebar;