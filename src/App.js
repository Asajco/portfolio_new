import { Box, Text } from '@chakra-ui/react'
import Home from './pages/Home'
import Header from './components/Header'
import Projects from './pages/Projects'
import { Route, Router, Routes } from 'react-router'
import { useContext } from 'react'
import Contact from './pages/Contact'

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  )
}

export default App
