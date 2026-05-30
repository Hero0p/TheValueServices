import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import ScrollToTop from './components/ScrollToTop'
import ChatWidget from './components/ChatWidget/ChatWidget'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}

export default App
