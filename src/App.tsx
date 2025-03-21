import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import Layout from './layout/Layout'
import { ThemeProvider } from './context/ThemeContext'

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <Layout>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/user' element={<UserPage />} />
                    </Routes>
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
