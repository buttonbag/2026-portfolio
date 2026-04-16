import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#232625",
    },
    primary: {
      main: "#90caf9",
    },
    text: {
      primary: "#ffffff",
      secondary: "#BFBFB8",
    },
    
  },
  typography: {
    h1: {  },
    h2: {  },
    h3: {  },
    h4: {  },
    h5: {  },
    h6: {  },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-style: normal;
          font-display: swap;
        }
      `,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
