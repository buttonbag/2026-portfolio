// Install the font first: `npm install @fontsource/montserrat`
// or include via a <link> to Google Fonts in your HTML.
import "@fontsource/montserrat/700.css"; // bold
import "@fontsource/montserrat/400.css"; // regular (optional)

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    primary: {
      main: "#90caf9",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    fontWeightBold: 700,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
        }
      `,
    },
  },
});

export default theme;
