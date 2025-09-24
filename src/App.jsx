import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import { ContentProvider, useContent } from './contexts/ContentContext'
import './index.css'

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'))
const Products = lazy(() => import('./components/Products'))
const Features = lazy(() => import('./components/Features'))
const About = lazy(() => import('./components/About'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component
const LoadingSpinner = () => {
  const { content } = useContent()
  
  return (
    <motion.div
      className="flex items-center justify-center min-h-[200px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-pastel-green-200 border-t-pastel-green-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <span className="ml-4 text-pastel-green-500">
        {content?.ui?.loading || "Loading..."}
      </span>
    </motion.div>
  )
}

// Main landing page component
const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <Header />
      
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Products />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </motion.div>
  )
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-pastel-green-50">
          <motion.div
            className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-pastel-green-500 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We're sorry for the inconvenience. Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-pastel-green-200 hover:bg-pastel-green-300 text-pastel-green-800 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Refresh Page
            </button>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}

// Main App component
function App() {
  return (
    <ErrorBoundary>
      <ContentProvider>
        <Router>
          <div className="App font-sans antialiased">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* Add more routes here as needed */}
              </Routes>
            </AnimatePresence>
          </div>
        </Router>
      </ContentProvider>
    </ErrorBoundary>
  )
}

export default App
