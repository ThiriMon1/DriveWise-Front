import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#123456", // Your custom primary color
    },
    secondary: {
      main: "#abcdef", // Your custom secondary color
    },
  },
  components: {
    // Style every MUI component
    MuiContainer: {
      styleOverrides: {
        root: {
          // Set max-width for the content and auto margin for center alignment
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "16px", // MUI default padding
          paddingRight: "16px", // MUI default padding
        },
      },
    },
    typography: {
      fontFamily: ["Dosis", "Arial", "sans-serif"].join(","),
    },
  },
});
