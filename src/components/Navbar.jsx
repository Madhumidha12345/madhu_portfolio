import {
  Box,
  Typography,
  Stack,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

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
          {/* LOGO */}
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 800,
              color: "white",
            }}
          >
            <span style={{ color: "#ff7a00" }}>M</span>ADHU
          </Typography>

          {/* DESKTOP MENU */}
          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {navItems.map((item) => (
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

          {/* DESKTOP BUTTON */}
          <Button
            href="#contact"
            variant="outlined"
            sx={{
              display: { xs: "none", md: "flex" },
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

          {/* MOBILE MENU ICON */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 260,
            height: "100%",
            backgroundColor: "#0f0f0f",
            color: "white",
            p: 3,
          }}
        >
          {/* CLOSE BUTTON */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 3,
            }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <List>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.link}
                  onClick={() => setOpen(false)}
                  sx={{
                    borderRadius: "12px",
                    mb: 1,

                    "&:hover": {
                      backgroundColor: "#1a1a1a",
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: "18px",
                          color: "white",
                        }}
                      >
                        {item.name}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;