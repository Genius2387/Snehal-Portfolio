import React, { useEffect } from 'react'
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom'
import { LenisProvider } from '@/context/LenisContext'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AppRouter } from '@/routes'

import { useLenis } from '@/hooks/useLenis'


const AppContent: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const lenis = useLenis()
  const isHomePage = location.pathname === '/home'
  const isProjectDetailPage = location.pathname.startsWith('/projects/') && location.pathname !== '/projects'
  const isLoadingPage = location.pathname === '/loading' || location.pathname === '/'

  useEffect(() => {
    // Disable browser default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const currentPath = window.location.pathname
    if (currentPath === '/home' || currentPath === '/') {
      sessionStorage.setItem('redirectPath', '/home')
      navigate('/loading', { replace: true })
    }
  }, [])

  useEffect(() => {
    const handleScrollReset = () => {
      window.scrollTo(0, 0)
      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
      }
    }

    handleScrollReset()
    const timer = setTimeout(handleScrollReset, 50)
    return () => clearTimeout(timer)
  }, [location.pathname, lenis])

  if (isLoadingPage) {
    return <AppRouter />
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-text-primary">
      <Navbar />

      <main className="flex-grow pt-[80px]">
        <AppRouter />
      </main>

      {!isHomePage && !isProjectDetailPage && <Footer />}
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
