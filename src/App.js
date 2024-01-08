import { Box, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Projects from './pages/Projects'
import { Route, Router, Routes } from 'react-router'
import { useContext } from 'react'
import Contact from './pages/Contact'
import { collection, getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from './firebase/config'
import Footer from './components/Footer'
function App() {
  useEffect(() => {
    const checkAndSetCount = async () => {
      const hasVisitedBefore = localStorage.getItem('hasVisitedBefore')

      if (hasVisitedBefore) {
      } else {
        const documentId = 'WvYnzVwlfpEALwt6h3Cd'
        // Increment the count in the database
        try {
          const viewCountDocRef = doc(db, 'viewCount', documentId)
          // Replace 'your-document-id' with the actual document ID
          const viewCountDocSnapshot = await getDoc(viewCountDocRef)

          if (viewCountDocSnapshot.exists()) {
            const viewCountData = viewCountDocSnapshot.data()
            const currentCount = viewCountData.count || 0

            // Update the count in the database
            await updateDoc(viewCountDocRef, {
              count: currentCount + 1,
            })
          } else {
          }
        } catch (error) {
          console.error(error)
        }

        localStorage.setItem('hasVisitedBefore', true)
      }
    }

    checkAndSetCount()
  }, [])

  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
