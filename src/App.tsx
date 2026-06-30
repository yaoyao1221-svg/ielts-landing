import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustStats from './components/TrustStats'
import Features from './components/Features'
import PracticeModules from './components/PracticeModules'
import WritingHighlight from './components/WritingHighlight'
import StudyFlow from './components/StudyFlow'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import SpeakingPage from './pages/SpeakingPage'
import ReadingPage from './pages/ReadingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Hero />
              <TrustStats />
              <Features />
              <PracticeModules />
              <WritingHighlight />
              <StudyFlow />
              <CtaSection />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/speaking" element={<SpeakingPage />} />
        <Route path="/reading" element={<ReadingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
