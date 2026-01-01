import { useState, lazy, Suspense, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import PageTransition from './components/PageTransition'
import Timeline from './components/Timeline'
import LoadingScreen from './components/LoadingScreen'

// Lazy load route components for better performance
const Project = lazy(() => import('./components/Project'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

// Wrapper component to use useLocation hook
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    }>
      <main className="flex-grow">
        <PageTransition>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Hero />}></Route>
            <Route path='/projects' element={<Project />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/timeline' element={<Timeline />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </PageTransition>
      </main>
    </Suspense>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    // Simulate page load time (you can adjust this)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadComplete = () => {
    setShowLoadingScreen(false);
  };

  return (
    <div className='App min-h-screen flex flex-col'>
      {showLoadingScreen && (
        <LoadingScreen isLoading={isLoading} onLoadComplete={handleLoadComplete} />
      )}

      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <ChatBot />
      </BrowserRouter>
    </div>
  )
}

export default App
