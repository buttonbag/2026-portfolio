import Header from "./components/Header"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Work from "./pages/Work"
import Contact from "./pages/Contact"

function App() {

  return (
    <CssBaseline>
      <Container>
        
        <Header></Header>

        <Routes>
          <Route index path="/" element={<Home/>}/> 
          <Route path="/work" element={<Work />}/> 
          <Route path="/contact" element={<Contact />}/> 
        </Routes>
        
      </Container>
    </CssBaseline>
  )
}

export default App
