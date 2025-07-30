import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import AuditionForm from './pages/AuditionForm.jsx'
import Faculty from './pages/Faculty.jsx'
import Programs from './pages/Programs'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/audition" element={<AuditionForm />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
