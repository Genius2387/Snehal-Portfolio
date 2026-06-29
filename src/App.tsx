import React, { useEffect } from 'react'
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom'
import { LenisProvider } from '@/context/LenisContext'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AppRouter } from '@/routes'

const AppContent: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/home'
  const isLoadingPage = location.pathname === '/loading' || location.pathname === '/'

  useEffect(() => {
    const currentPath = window.location.pathname
    if (currentPath !== '/loading' && currentPath !== '/') {
      sessionStorage.setItem('redirectPath', currentPath)
      navigate('/loading', { replace: true })
    }
  }, [])

  if (isLoadingPage) {
    return <AppRouter />
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-text-primary">
      <Navbar />

      <main className="flex-grow pt-[80px]">
        <AppRouter />
      </main>

      {!isHomePage && <Footer />}
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <LenisProvider>
          <AppContent />
        </LenisProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
