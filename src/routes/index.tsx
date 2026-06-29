import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

// Lazy load pages for optimal code splitting
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Projects = lazy(() => import('@/pages/Projects'))
const ProjectDetails = lazy(() => import('@/pages/ProjectDetails'))
const Contact = lazy(() => import('@/pages/Contact'))
const Loading = lazy(() => import('@/pages/Loading/page'))

const LoadingRoute: React.FC = () => {
  const navigate = useNavigate()

  const handleSkip = () => {
    const redirectPath = sessionStorage.getItem('redirectPath')
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath')
      navigate(redirectPath)
    } else {
      navigate('/home')
    }
  }

  return <Loading onSkip={handleSkip} />
}

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigate to="/loading" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loading" element={<LoadingRoute />} />
        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  )
}
export default AppRouter
