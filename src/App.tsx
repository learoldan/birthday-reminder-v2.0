import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import Layout from './layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Layout>
  </BrowserRouter>
  )
}

export default App
