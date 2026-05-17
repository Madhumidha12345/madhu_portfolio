// import { Box, Typography, TextField, Button, Stack } from "@mui/material";

// function Contact() {
//   return (
//     <Box
//       id="contact"
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         px: 2,
//         background: "#050816",
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           maxWidth: "600px",
//           p: 4,
//           borderRadius: "25px",
//           background: "rgba(255,255,255,0.05)",
//           backdropFilter: "blur(10px)",
//           border: "1px solid rgba(255,255,255,0.1)",
//           boxShadow: "0 0 30px rgba(0,0,0,0.4)",
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             color: "white",
//             fontWeight: "bold",
//             mb: 1,
//             textAlign: "center",
//           }}
//         >
//           Contact Me
//         </Typography>

//         <Typography
//           sx={{
//             color: "gray",
//             textAlign: "center",
//             mb: 4,
//           }}
//         >
//           Feel free to contact me 🚀
//         </Typography>

//         <Stack spacing={3}>
//           <TextField
//             label="Your Name"
//             variant="outlined"
//             fullWidth
//             InputLabelProps={{ style: { color: "#aaa" } }}
//             sx={{
//               input: { color: "white" },
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: "15px",
//               },
//             }}
//           />

//           <TextField
//             label="Your Email"
//             variant="outlined"
//             fullWidth
//             InputLabelProps={{ style: { color: "#aaa" } }}
//             sx={{
//               input: { color: "white" },
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: "15px",
//               },
//             }}
//           />

//           <TextField
//             label="Message"
//             multiline
//             rows={5}
//             fullWidth
//             InputLabelProps={{ style: { color: "#aaa" } }}
//             sx={{
//               textarea: { color: "white" },
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: "15px",
//               },
//             }}
//           />

//           <Button
//             variant="contained"
//             sx={{
//               py: 1.5,
//               borderRadius: "15px",
//               fontWeight: "bold",
//               background:
//                 "linear-gradient(90deg, #7b2ff7 0%, #f107a3 100%)",
//               textTransform: "none",
//               fontSize: "16px",
//             }}
//           >
//             Send Message
//           </Button>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }

// export default Contact;


import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 8,
        background: "#050816",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          p: 5,
          borderRadius: "30px",

          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",

          border: "1px solid rgba(255,255,255,0.08)",

          boxShadow: "0 0 35px rgba(123,47,247,0.2)",
        }}
      >

        {/* TITLE */}
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 1,
            textAlign: "center",
            fontSize: {
              xs: "35px",
              md: "45px",
            },
          }}
        >
          Contact Me
        </Typography>

        <Typography
          sx={{
            color: "#aaa",
            textAlign: "center",
            mb: 5,
          }}
        >
          Feel free to contact me 🚀
        </Typography>

        {/* FORM */}
        <Stack spacing={3}>

          {/* NAME */}
          <TextField
            label="Your Name"
            fullWidth
            InputLabelProps={{
              style: { color: "#aaa" },
            }}
            sx={{
              input: {
                color: "white",
              },

              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",

                "& fieldset": {
                  borderColor: "#333",
                },

                "&:hover fieldset": {
                  borderColor: "#7b2ff7",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#f107a3",
                },
              },
            }}
          />

          {/* EMAIL */}
          <TextField
            label="Your Email"
            fullWidth
            InputLabelProps={{
              style: { color: "#aaa" },
            }}
            sx={{
              input: {
                color: "white",
              },

              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",

                "& fieldset": {
                  borderColor: "#333",
                },

                "&:hover fieldset": {
                  borderColor: "#7b2ff7",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#f107a3",
                },
              },
            }}
          />

          {/* MESSAGE */}
          <TextField
            label="Message"
            multiline
            rows={5}
            fullWidth
            InputLabelProps={{
              style: { color: "#aaa" },
            }}
            sx={{
              textarea: {
                color: "white",
              },

              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",

                "& fieldset": {
                  borderColor: "#333",
                },

                "&:hover fieldset": {
                  borderColor: "#7b2ff7",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#f107a3",
                },
              },
            }}
          />

          {/* BUTTON */}
          <Button
            variant="contained"
            sx={{
              py: 1.7,
              borderRadius: "15px",
              fontWeight: 700,

              background:
                "linear-gradient(90deg, #7b2ff7 0%, #f107a3 100%)",

              textTransform: "none",
              fontSize: "16px",

              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 0 20px rgba(241,7,163,0.5)",
              },
            }}
          >
            Send Message
          </Button>

        </Stack>
      </Box>
    </Box>
  );
}

export default Contact;