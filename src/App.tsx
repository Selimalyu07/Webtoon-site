import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import SeriesDetailPage from './pages/SeriesDetailPage'
import ReadingPage from './pages/ReadingPage'
import NovelReadingPage from './pages/NovelReadingPage'
import ProfilePage from './pages/ProfilePage'
import AdminPage from './pages/AdminPage'
import PremiumPage from './pages/PremiumPage'
import SearchPage from './pages/SearchPage'
import LegalPage from './pages/LegalPage'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/webtoon" element={<CategoryPage type="webtoon" />} />
            <Route path="/manhwa" element={<CategoryPage type="manhwa" />} />
            <Route path="/manga" element={<CategoryPage type="manga" />} />
            <Route path="/novel" element={<CategoryPage type="novel" />} />
            <Route path="/:type/:slug" element={<SeriesDetailPage />} />
            <Route path="/:type/:slug/chapter/:chapterNo" element={<ReadingPage />} />
            <Route path="/:type/:slug/novel/:chapterNo" element={<NovelReadingPage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/:page" element={<LegalPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
