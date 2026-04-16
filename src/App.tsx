import { Route, Routes } from "react-router"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import Header from "./components/Header"
import Container from "@mui/material/Container"
import Home from "./pages/Home"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import WorkDetails from "./pages/WorkDetails"
import theme from "./theme"
import About from "./pages/About"


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>

        <Header></Header>

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:workId" element={<WorkDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Container>
    </ThemeProvider>
  )
}

export default App
