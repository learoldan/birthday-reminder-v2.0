import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
